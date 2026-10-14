import { useState, lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { ValuePropSection } from './sections/ValuePropSection';
import { SectionSkeleton } from './components/SectionSkeleton';
import { TopLoadingBar } from './components/TopLoadingBar';
import { ProjectModal } from './components/ProjectModal';
import type { ProjectCaseStudy } from './types';
import { PROJECTS_DATA } from './data/portfolioData';

// Progressive code-splitting for lightning-fast initial paint on slow mobile networks
const BackgroundCanvas3D = lazy(() =>
  import('./components/BackgroundCanvas3D').then((m) => ({ default: m.BackgroundCanvas3D }))
);

const AboutSection = lazy(() =>
  import('./sections/AboutSection').then((m) => ({ default: m.AboutSection }))
);

const ExperienceSection = lazy(() =>
  import('./sections/ExperienceSection').then((m) => ({ default: m.ExperienceSection }))
);

const ProjectsSection = lazy(() =>
  import('./sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);

const SkillsSection = lazy(() =>
  import('./sections/SkillsSection').then((m) => ({ default: m.SkillsSection }))
);

const EngineeringApproachSection = lazy(() =>
  import('./sections/EngineeringApproachSection').then((m) => ({ default: m.EngineeringApproachSection }))
);

const AiNativeSection = lazy(() =>
  import('./sections/AiNativeSection').then((m) => ({ default: m.AiNativeSection }))
);

const ResumeCtaSection = lazy(() =>
  import('./sections/ResumeCtaSection').then((m) => ({ default: m.ResumeCtaSection }))
);

const ContactSection = lazy(() =>
  import('./sections/ContactSection').then((m) => ({ default: m.ContactSection }))
);

const CommandPalette = lazy(() =>
  import('./components/CommandPalette').then((m) => ({ default: m.CommandPalette }))
);

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const handleSelectProjectById = (projectId: string) => {
    const proj = PROJECTS_DATA.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#04060d] text-slate-100 font-sans antialiased relative selection:bg-cyan-500/30 selection:text-white">
        
        {/* Subtle Top Loading Bar */}
        <TopLoadingBar isLoading={false} />

        {/* Three.js Interactive 3D Background Constellation (Lazy Loaded & Mobile-Throttled) */}
        <Suspense fallback={null}>
          <BackgroundCanvas3D />
        </Suspense>

        {/* Ambient Cyber Grid Overlay */}
        <div className="fixed inset-0 bg-grid-cyber pointer-events-none z-[1] opacity-50" />
        <div className="fixed inset-0 bg-radial-vignette pointer-events-none z-[2]" />

        {/* Navigation Bar with Theme Switcher & IntersectionObserver Active State */}
        <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        {/* Main Content Sections with Progressive Suspense Skeleton Fallbacks */}
        <main className="relative z-10">
          {/* Critical Top Fold: Rendered immediately for fast First Contentful Paint */}
          <HeroSection />
          <ValuePropSection />

          {/* Below-the-fold sections: Lazy loaded with smooth skeletons on slow networks */}
          <Suspense fallback={<SectionSkeleton title="Loading background & stack..." badge="About" cardCount={2} heightClass="min-h-[460px]" />}>
            <AboutSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton title="Loading career timeline..." badge="Experience" cardCount={2} heightClass="min-h-[460px]" />}>
            <ExperienceSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton title="Loading featured projects & live demos..." badge="Projects" cardCount={3} heightClass="min-h-[580px]" />}>
            <ProjectsSection onSelectProject={setSelectedProject} />
          </Suspense>

          <Suspense fallback={<SectionSkeleton title="Loading technical competencies..." badge="Skills" cardCount={3} heightClass="min-h-[420px]" />}>
            <SkillsSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton title="Loading engineering approach..." badge="Methodology" cardCount={3} heightClass="min-h-[400px]" />}>
            <EngineeringApproachSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton title="Loading AI workflows & agents..." badge="AI-Native" cardCount={2} heightClass="min-h-[420px]" />}>
            <AiNativeSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton title="Loading credentials & resume..." badge="Resume" cardCount={1} heightClass="min-h-[260px]" />}>
            <ResumeCtaSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton title="Loading contact channels..." badge="Contact" cardCount={2} heightClass="min-h-[460px]" />}>
            <ContactSection />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Case Study Modal (Portaled directly to document.body) */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Command Palette (Cmd+K / Ctrl+K) */}
        {commandPaletteOpen && (
          <Suspense fallback={null}>
            <CommandPalette
              isOpen={commandPaletteOpen}
              onClose={() => setCommandPaletteOpen(false)}
              onSelectProject={handleSelectProjectById}
            />
          </Suspense>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
