import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SummarySection from './components/SummarySection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsMatrix from './components/SkillsMatrix';
import PipelineVisualizer from './components/PipelineVisualizer';
import AiShowcase from './components/AiShowcase';
import EducationCertifications from './components/EducationCertifications';
import TerminalCli from './components/TerminalCli';
import ContactFooter from './components/ContactFooter';

export default function App() {
  useEffect(() => {
    // Ensure window opens cleanly at the top of the page on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#F1F5F9] font-body selection:bg-[#00F5A0] selection:text-[#04120C]">
      <Navbar />
      <main>
        <HeroSection />
        <SummarySection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsMatrix />
        <PipelineVisualizer />
        <AiShowcase />
        <EducationCertifications />
        <TerminalCli />
      </main>
      <ContactFooter />
    </div>
  );
}
