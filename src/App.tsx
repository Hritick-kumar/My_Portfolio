import { useState } from 'react';
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
    <div className="min-h-screen bg-[#08090d] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased relative">
      
      {/* Background Subtle Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Sections */}
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

      {/* Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={handleSelectProjectById}
      />
    </div>
  );
}

export default App;
