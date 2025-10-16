"use client";

import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  url?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const CardContent = () => (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-muted">
        {project.title}
      </h3>
      <span className="text-base text-muted block">
        {project.date}
      </span>
      <p className="text-muted text-base pt-1">
        {project.description}
      </p>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground text-base underline transition-colors duration-200 hover:scale-105"
          onClick={(e) => e.stopPropagation()}
        >
          View Project →
        </a>
      )}
    </div>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 bg-card rounded-lg border border-border hover:border-foreground transition-colors"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className="block p-6 bg-card rounded-lg border border-border hover:border-foreground transition-colors">
      <CardContent />
    </div>
  );
}
