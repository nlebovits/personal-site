"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Pagination } from "../Pagination";

// Projects data
const projectsData = [
  {
    id: "hotspot-stoplight",
    title: "Hotspot Stoplight",
    description: "An end-to-end GEE pipeline for a UN-Habitat project to assess national-scale flood and heat hazards derived from open-source remote sensing data.",
    date: "Nov 2023 - Mar 2024",
    url: "https://www.design.upenn.edu/sites/default/files/uploads/news/Hotspot%20Stoplight%20Brochure%202024.pdf",
  },
  {
    id: "identifying-upzoning-opportunities",
    title: "Identifying Upzoning Opportunities",
    description: "An analysis of conflicts between current zoning and projected residential growth in Philadelphia.",
    date: "Dec 2023",
    url: "https://nlebovits.github.io/musa-508-2023-final/",
  },
  {
    id: "wetland-change-argentina",
    title: "Wetland Change in Argentina",
    description: "Using a random forest model in GEE to assess wetlands change in Iberá, Argentina between 2000 and 2020.",
    date: "Dec 2023",
    url: "https://gist.github.com/nlebovits/51cab9ed4c6f08575ecee29e705247f3",
  },
  {
    id: "predicting-illegal-dumping",
    title: "Predicting Illegal Dumping",
    description: "Geospatial ML models to predict likely illegal dumping across Philadelphia.",
    date: "Oct 2023",
    url: "https://rpubs.com/nlebovits/musa-508-hw-3",
  },
  {
    id: "clean-green-philly",
    title: "Clean & Green Philly",
    description: "A civic tech project that sought to use open data to help reduce gun violence and improve quality of life in Philadelphia through strategic interventions in vacant properties.",
    date: "Jul 2023 - Jul 2025",
    url: "https://www.cleanandgreenphilly.org/",
  },
];

const ITEMS_PER_PAGE_DESKTOP = 9;
const ITEMS_PER_PAGE_MOBILE = 6;

export function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useState(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    checkMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  });

  const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP;
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sortedProjects = projectsData.sort((a, b) => {
    // Extract the end date from the range for sorting (e.g., "Jul 2023 - Jul 2025" -> "Jul 2025")
    const getEndDate = (dateRange: string) => {
      const parts = dateRange.split(' - ');
      return parts[parts.length - 1]; // Get the last part (end date)
    };
    return new Date(getEndDate(b.date)).getTime() - new Date(getEndDate(a.date)).getTime();
  });
  const currentProjects = sortedProjects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of projects section
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-muted mb-4">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
}
