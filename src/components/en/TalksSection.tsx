"use client";

// Talks data
const talksItems = [
  {
    id: "buildings-in-data-la-plata",
    title: "Buildings in Data: New Perspectives on the Built Environment",
    description: "A guest lecture at the National University of La Plata covering emerging applications of big data to understand buildings and the built environment.",
    date: "October 15, 2025",
    venue: "Universidad Nacional de La Plata",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vR-U2BTy3PC9gm32SAg2AKz_MkCr0aXkLPk6NTqLecXFnP0ERtXo56XdU2U1yPcZ6tQUwBDmfz5--VO/pubembed?start=false&loop=false&delayms=3000",
  },
  {
    id: "uba-open-data-seminar",
    title: "Open Data for Sustainable Cities",
    description: "A lecture and workshop for a civil engineering class at UBA on how to find and apply common open data sets for use in sustainable urban planning.",
    date: "June 2, 2025",
    venue: "Universidad de Buenos Aires",
    url: "https://docs.google.com/presentation/d/1Su-p5k57bC_bg4W4eyeve3FX28N7DHnm4JdHLccUXbc/embed?start=false&loop=false&delayms=5000",
  },
  {
    id: "google-earth-engine-urban-planning",
    title: "Google Earth Engine for Urban Planning",
    description: "A guest lecture for Penn's graduate-level 'deep learning applications for remote sensing' class on applying Google Earth Engine to relevant areas of urban planning.",
    date: "March 14, 2024",
    venue: "University of Pennsylvania",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vTHVO8wFNSZRX4MRGYzp5ndfUKddtbQ0K-zGdu1exwOcEYzW1dWmfMJO2ZZVK3Nnooji_pnbxwoPYeA/embed?start=false&loop=false&delayms=5000",
  },
  {
    id: "remote-sensing-urban-planning",
    title: "Remote Sensing for Urban Planning",
    description: "A guest lecture for Penn's graduate-level 'deep learning applications for remote sensing' class covering the basics of remote sensing, machine learning in remote sensing, and common applications of remote sensing for urban planning.",
    date: "January 21, 2024",
    venue: "University of Pennsylvania",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vTy9nX3YYuUdgvWcxo2lKbCqN4fY9XjqlxofVve6Z6i8vL3z2jdxzuWYyR8xG0gTw5kxVXWQRvbS6ZP/embed?start=false&loop=false&delayms=5000",
  },
];

export function TalksSection() {
  return (
    <section id="talks" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-muted mb-4">
          Talks & Presentations
        </h2>
      </div>

      <div className="space-y-6">
        {talksItems
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((talk) => (
          <a
            key={talk.id}
            href={talk.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-card rounded-lg border border-border hover:border-foreground transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-muted">
                {talk.title}
              </h3>
              <span className="text-sm text-muted whitespace-nowrap ml-4">
                {talk.date}
              </span>
            </div>
            <p className="text-sm text-muted font-medium mb-3">
              {talk.venue}
            </p>
            <p className="text-muted mb-4">
              {talk.description}
            </p>
            <span className="text-muted hover:text-foreground text-base underline transition-colors duration-200 hover:scale-105">
              View presentation →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
