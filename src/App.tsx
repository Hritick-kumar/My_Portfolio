import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundCanvas3D } from './components/BackgroundCanvas3D';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { HeroSection } from './sections/HeroSection';
import { ValuePropSection } from './sections/ValuePropSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { EngineeringApproachSection } from './sections/EngineeringApproachSection';
import { AiNativeSection } from './sections/AiNativeSection';
import { ResumeCtaSection } from './sections/ResumeCtaSection';
import { ContactSection } from './sections/ContactSection';
import type { ProjectCaseStudy } from './types';
import { PROJECTS_DATA } from './data/portfolioData';

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
        
        {/* Three.js Interactive 3D Background Constellation */}
        <BackgroundCanvas3D />

        {/* Ambient Subtle Cyber Grid Overlay */}
        <div className="fixed inset-0 bg-grid-cyber pointer-events-none z-[1] opacity-50" />
        <div className="fixed inset-0 bg-radial-vignette pointer-events-none z-[2]" />

        {/* Navigation Bar with Theme Switcher */}
        <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <ValuePropSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection 
            selectedProject={selectedProject} 
            setSelectedProject={setSelectedProject} 
          />
          <SkillsSection />
          <EngineeringApproachSection />
          <AiNativeSection />
          <ResumeCtaSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Command Palette (Cmd+K / Ctrl+K) */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          onSelectProject={handleSelectProjectById}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
