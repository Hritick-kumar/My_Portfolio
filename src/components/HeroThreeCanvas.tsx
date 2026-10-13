import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/useTheme';
import { RotateCw, Box, Orbit, Sparkles } from 'lucide-react';

type GeometryMode = 'core' | 'torus' | 'neural';

export const HeroThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { config } = useTheme();
  const themeRef = useRef(config);
  
  const [geomMode, setGeomMode] = useState<GeometryMode>('core');
  const [wireframe, setWireframe] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [liveStats, setLiveStats] = useState({ vertices: 1240, mode: 'Cyber Icosa-Core' });

  useEffect(() => {
    themeRef.current = config;
  }, [config]);

  // Ref to pass user options to animation loop without re-triggering full canvas re-creation
  const optionsRef = useRef({
    mode: geomMode,
    wireframe,
    autoRotate,
    triggerWave: false,
  });

  useEffect(() => {
    optionsRef.current.mode = geomMode;
    optionsRef.current.wireframe = wireframe;
    optionsRef.current.autoRotate = autoRotate;
  }, [geomMode, wireframe, autoRotate]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 360;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(themeRef.current.threeColorHex, 25, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(themeRef.current.threeSecondaryHex, 20, 50);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // 3. Central Object Hierarchy
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Geometry 1: Cyber Icosahedron
    const icosaGeo = new THREE.IcosahedronGeometry(3.6, 2);
    const icosaMat = new THREE.MeshStandardMaterial({
      color: themeRef.current.threeColorHex,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const icosaMesh = new THREE.Mesh(icosaGeo, icosaMat);

    // Geometry 2: Torus Knot
    const torusGeo = new THREE.TorusKnotGeometry(2.4, 0.75, 128, 32);
    const torusMat = new THREE.MeshStandardMaterial({
      color: themeRef.current.threeColorHex,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.visible = false;

    // Geometry 3: Neural Sphere
    const neuralGeo = new THREE.SphereGeometry(3.2, 28, 28);
    const neuralMat = new THREE.MeshStandardMaterial({
      color: themeRef.current.threeColorHex,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.7,
      transparent: true,
      opacity: 0.85,
    });
    const neuralMesh = new THREE.Mesh(neuralGeo, neuralMat);
    neuralMesh.visible = false;

    mainGroup.add(icosaMesh);
    mainGroup.add(torusMesh);
    mainGroup.add(neuralMesh);

    // Inner Glowing Core Orb
    const coreGeo = new THREE.SphereGeometry(1.4, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: themeRef.current.threeSecondaryHex,
      transparent: true,
      opacity: 0.65,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Orbital Tech Rings (Gyroscopic Rings)
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: themeRef.current.threeSecondaryHex,
      wireframe: false,
      roughness: 0.3,
      metalness: 0.9,
    });
    const ringGeo1 = new THREE.TorusGeometry(4.6, 0.04, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    mainGroup.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: themeRef.current.threeColorHex,
      wireframe: false,
      roughness: 0.3,
      metalness: 0.9,
    });
    const ringGeo2 = new THREE.TorusGeometry(5.2, 0.035, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 3;
    mainGroup.add(ring2);

    // Floating Orbiting Satellites
    const satellites: THREE.Mesh[] = [];
    const satCount = 4;
    for (let i = 0; i < satCount; i++) {
      const satGeo = new THREE.OctahedronGeometry(0.28, 0);
      const satMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? themeRef.current.threeColorHex : themeRef.current.threeSecondaryHex,
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      satellites.push(sat);
      scene.add(sat);
    }

    // Expanding Click Energy Wave
    const waveGeo = new THREE.RingGeometry(0.1, 0.25, 48);
    const waveMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    scene.add(waveMesh);
    let waveScale = 0;
    let waveOpacity = 0;

    // Interactive Drag to Rotate
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };

      // Trigger wave effect on click
      waveScale = 0.5;
      waveOpacity = 0.9;
      waveMesh.position.set(0, 0, 0);
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;

      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onPointerDown);
    domElement.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    domElement.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW && newH) {
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Update lights & materials to match current theme
      pointLight1.color.setHex(themeRef.current.threeColorHex);
      pointLight2.color.setHex(themeRef.current.threeSecondaryHex);
      icosaMat.color.setHex(themeRef.current.threeColorHex);
      torusMat.color.setHex(themeRef.current.threeColorHex);
      neuralMat.color.setHex(themeRef.current.threeColorHex);
      coreMat.color.setHex(themeRef.current.threeSecondaryHex);
      ringMat1.color.setHex(themeRef.current.threeSecondaryHex);
      ringMat2.color.setHex(themeRef.current.threeColorHex);

      // Handle visibility and wireframe
      const activeMode = optionsRef.current.mode;
      icosaMesh.visible = activeMode === 'core';
      torusMesh.visible = activeMode === 'torus';
      neuralMesh.visible = activeMode === 'neural';

      const isWire = optionsRef.current.wireframe;
      icosaMat.wireframe = isWire;
      torusMat.wireframe = isWire;
      neuralMat.wireframe = isWire;

      // Smooth rotation with inertia
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.08;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.08;

      if (optionsRef.current.autoRotate && !isDragging) {
        targetRotationY += 0.007;
        targetRotationX += Math.sin(elapsedTime * 0.4) * 0.001;
      }

      // Gyroscope ring independent rotations
      ring1.rotation.z += 0.015;
      ring1.rotation.y -= 0.008;
      ring2.rotation.z -= 0.012;
      ring2.rotation.x += 0.01;

      // Pulsing inner core orb
      const pulseScale = 1 + Math.sin(elapsedTime * 3) * 0.09;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Orbiting satellites around the core
      satellites.forEach((sat, i) => {
        const angle = elapsedTime * 0.8 + (i * Math.PI * 2) / satCount;
        const radius = 5.6 + Math.sin(elapsedTime * 1.5 + i) * 0.3;
        const yOffset = Math.sin(elapsedTime * 2 + i) * 1.8;
        sat.position.set(
          Math.cos(angle) * radius,
          yOffset,
          Math.sin(angle) * radius
        );
        sat.rotation.x += 0.03;
        sat.rotation.y += 0.04;
      });

      // Energy wave expansion
      if (waveOpacity > 0.01) {
        waveScale += 0.28;
        waveOpacity *= 0.93;
        waveMesh.scale.set(waveScale, waveScale, 1);
        waveMat.opacity = waveOpacity;
        waveMat.color.setHex(themeRef.current.threeColorHex);
      } else {
        waveMat.opacity = 0;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      domElement.removeEventListener('mousedown', onPointerDown);
      domElement.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domElement.removeEventListener('touchstart', onPointerDown);
      domElement.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }

      icosaGeo.dispose();
      icosaMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      neuralGeo.dispose();
      neuralMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      satellites.forEach((sat) => {
        sat.geometry.dispose();
        (sat.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  const handleModeChange = (mode: GeometryMode) => {
    setGeomMode(mode);
    if (mode === 'core') setLiveStats({ vertices: 1240, mode: 'Cyber Icosa-Core' });
    if (mode === 'torus') setLiveStats({ vertices: 4096, mode: 'Quantum Torus-Knot' });
    if (mode === 'neural') setLiveStats({ vertices: 2352, mode: 'Neural Lattice-Sphere' });
  };

  return (
    <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl bg-gradient-to-b from-black/50 via-[#070b16]/70 to-black/80 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl group">
      
      {/* 3D Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Click and drag to rotate the 3D model"
      />

      {/* Floating HUD Badges & Live 3D Specs */}
      <div className="absolute top-3.5 left-4 pointer-events-none flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: config.primaryHex }} />
          <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-white/90">
            THREE.JS 3D ENGINE
          </span>
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/70">
            WebGL
          </span>
        </div>
        <div className="text-[10px] font-mono text-white/50">
          {liveStats.mode} · {liveStats.vertices} Vertices
        </div>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute top-3.5 right-4 flex items-center gap-1.5 z-10">
        
        {/* Geometry Switcher */}
        <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10 backdrop-blur-md">
          <button
            onClick={() => handleModeChange('core')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-lg transition-all cursor-pointer ${
              geomMode === 'core' 
                ? 'bg-white/20 text-white font-semibold shadow-sm' 
                : 'text-white/60 hover:text-white'
            }`}
            title="Icosahedron Cyber Core"
          >
            Core
          </button>
          <button
            onClick={() => handleModeChange('torus')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-lg transition-all cursor-pointer ${
              geomMode === 'torus' 
                ? 'bg-white/20 text-white font-semibold shadow-sm' 
                : 'text-white/60 hover:text-white'
            }`}
            title="Quantum Torus Knot"
          >
            Torus
          </button>
          <button
            onClick={() => handleModeChange('neural')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-lg transition-all cursor-pointer ${
              geomMode === 'neural' 
                ? 'bg-white/20 text-white font-semibold shadow-sm' 
                : 'text-white/60 hover:text-white'
            }`}
            title="Neural Lattice Sphere"
          >
            Neural
          </button>
        </div>

        {/* Wireframe toggle */}
        <button
          onClick={() => setWireframe(!wireframe)}
          className={`p-1.5 rounded-xl border border-white/10 backdrop-blur-md transition-all cursor-pointer ${
            wireframe ? 'bg-white/20 text-white' : 'bg-black/60 text-white/60 hover:text-white'
          }`}
          title={wireframe ? 'Wireframe mode (active)' : 'Solid mode'}
        >
          <Box className="w-4 h-4" />
        </button>

        {/* Auto rotate toggle */}
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-1.5 rounded-xl border border-white/10 backdrop-blur-md transition-all cursor-pointer ${
            autoRotate ? 'bg-white/20 text-white' : 'bg-black/60 text-white/60 hover:text-white'
          }`}
          title={autoRotate ? 'Auto-spin (active)' : 'Manual rotation only'}
        >
          <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
        </button>
      </div>

      {/* Interaction Hint Bottom */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/50 pointer-events-none">
        <span className="flex items-center gap-1.5">
          <Orbit className="w-3.5 h-3.5 text-white/70" />
          <span className="hidden sm:inline">Drag to rotate 3D mesh · Click for energy wave</span>
          <span className="sm:hidden">Touch & drag to rotate</span>
        </span>
        <span className="flex items-center gap-1 text-[10px]" style={{ color: config.primaryHex }}>
          <Sparkles className="w-3 h-3" />
          <span>Interactive Model</span>
        </span>
      </div>

      {/* Interaction Pulse Overlay Indicator */}
      {isInteracting && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-[10px] font-mono text-white/80 pointer-events-none backdrop-blur-md animate-fade-in">
          Orbiting 3D Viewport
        </div>
      )}
    </div>
  );
};
