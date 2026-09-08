import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PipelineVisualizer from './components/PipelineVisualizer';
import AiShowcase from './components/AiShowcase';
import TerminalCli from './components/TerminalCli';
import ExperienceSection from './components/ExperienceSection';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSection from './components/ProjectsSection';
import EducationCertifications from './components/EducationCertifications';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#F1F5F9] font-body selection:bg-[#00F5A0] selection:text-[#04120C]">
      <Navbar />
      <main>
        <HeroSection />
        <PipelineVisualizer />
        <AiShowcase />
        <TerminalCli />
        <ExperienceSection />
        <SkillsMatrix />
        <ProjectsSection />
        <EducationCertifications />
      </main>
      <ContactFooter />
    </div>
  );
}
