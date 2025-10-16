import { Header } from "@/components/Header";
import { Footer } from "@/components/es/Footer";
import { AboutSection } from "@/components/es/AboutSection";
import { ProjectsSection } from "@/components/es/ProjectsSection";
import { WritingSection } from "@/components/es/WritingSection";
import { TalksSection } from "@/components/es/TalksSection";

export default function SpanishHome() {
  return (
    <div className="min-h-screen bg-background text-muted">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSection />
        <ProjectsSection />
        <WritingSection />
        <TalksSection />
      </main>
      <Footer />
    </div>
  );
}
