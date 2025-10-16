import { Header } from "@/components/Header";
import { Footer } from "@/components/en/Footer";
import { AboutSection } from "@/components/en/AboutSection";
import { ProjectsSection } from "@/components/en/ProjectsSection";
import { WritingSection } from "@/components/en/WritingSection";
import { TalksSection } from "@/components/en/TalksSection";

export default function EnglishHome() {
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
