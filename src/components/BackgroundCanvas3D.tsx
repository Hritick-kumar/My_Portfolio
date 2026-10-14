import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/useTheme';

export const BackgroundCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { config } = useTheme();
  const themeRef = useRef(config);

  useEffect(() => {
    themeRef.current = config;
  }, [config]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const isMobile = window.innerWidth < 768;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: isMobile ? 'default' : 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Particle Constellation - tuned for mobile performance
    const particleCount = isMobile ? 35 : 100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const rangeX = isMobile ? 80 : 140;
    const rangeY = isMobile ? 60 : 90;
    const rangeZ = 70;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * rangeX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * rangeY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * rangeZ;

      velocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.04,
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Points Material
    const pointsMaterial = new THREE.PointsMaterial({
      color: themeRef.current.threeColorHex,
      size: 1.8,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);

    // Lines for connecting points
    const linesMaterial = new THREE.LineBasicMaterial({
      color: themeRef.current.threeSecondaryHex,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, linesMaterial);
    scene.add(lines);

    // Mouse movement tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) * 0.0006;
      targetMouseY = (e.clientY - halfH) * 0.0006;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // Scroll throttle on mobile to keep scroll 100% fluid
    let isScrolling = false;
    let scrollDebounce: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (!isMobile) return;
      isScrolling = true;
      if (scrollDebounce) clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        isScrolling = false;
      }, 120);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Animation loop & tab visibility
    let animationId: number;
    let isRunning = true;

    const onVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationId);
      } else {
        isRunning = true;
        animate();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    let frameCount = 0;

    const animate = () => {
      if (!isRunning) return;
      animationId = requestAnimationFrame(animate);
      frameCount++;

      // When fast scrolling on mobile, throttle line distance updates
      if (isMobile && isScrolling && frameCount % 2 !== 0) {
        return;
      }

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.rotation.y = -mouseX * 0.8;
      camera.rotation.x = -mouseY * 0.8;

      // Update theme colors dynamically
      pointsMaterial.color.setHex(themeRef.current.threeColorHex);
      linesMaterial.color.setHex(themeRef.current.threeSecondaryHex);

      // Update particles
      const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      let lineVertexIndex = 0;
      const maxDistance = isMobile ? 18 : 24;

      for (let i = 0; i < particleCount; i++) {
        // Position update with velocity
        posArray[i * 3] += velocities[i].x;
        posArray[i * 3 + 1] += velocities[i].y;
        posArray[i * 3 + 2] += velocities[i].z;

        // Bounce back within bounds
        if (Math.abs(posArray[i * 3]) > rangeX / 2) velocities[i].x *= -1;
        if (Math.abs(posArray[i * 3 + 1]) > rangeY / 2) velocities[i].y *= -1;
        if (Math.abs(posArray[i * 3 + 2]) > rangeZ / 2) velocities[i].z *= -1;

        // Connect nearby points
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            linePositions[lineVertexIndex++] = posArray[i * 3];
            linePositions[lineVertexIndex++] = posArray[i * 3 + 1];
            linePositions[lineVertexIndex++] = posArray[i * 3 + 2];

            linePositions[lineVertexIndex++] = posArray[j * 3];
            linePositions[lineVertexIndex++] = posArray[j * 3 + 1];
            linePositions[lineVertexIndex++] = posArray[j * 3 + 2];
          }
        }
      }

      posAttr.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineVertexIndex / 3);
      (lineGeometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;

      // Subtle slow rotation
      points.rotation.y += 0.0006;
      lines.rotation.y += 0.0006;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (scrollDebounce) clearTimeout(scrollDebounce);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60"
      aria-hidden="true"
    />
  );
};
