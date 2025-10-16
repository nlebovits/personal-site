"use client";

// Writing data
const writingItems = [
  {
    id: "human-scale-data-substack",
    title: "Human Scale Data",
    description: "A Substack page where I share observations and analyses from my Fulbright research.",
    date: "2025-06-15",
    url: "https://datosaescalahumana.substack.com/",
  },
  {
    id: "mayor-parker-housing-plan-missing-data",
    title: "Philadelphia can't be 'safest, cleanest, and greenest' without basic data",
    description: "An op ed in The Philadelphia Inquirer highlighting that the city's failure to publish reliable vacancy data jeopardizes the City's ability to take action against illegal dumping and violent crime, to mitigate public health risks, and to build affordable housing.",
    date: "2025-06-25",
    url: "https://www.inquirer.com/opinion/commentary/mayor-parker-housing-plan-missing-data-20250625.html",
  },
  {
    id: "data-driven-cleaning-greening",
    title: "Clean and Green Philly Where It's Most Needed",
    description: "An op ed in The Philadelphia Citizen calling on Mayor Cherelle Parker to take a more data-driven approach to address vacant properties and improve quality of life.",
    date: "2024-10-22",
    url: "https://thephiladelphiacitizen.org/guest-commentary-clean-and-green-philly-where-its-most-needed/",
  },
];

export function WritingSection() {
  return (
    <section id="writing" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-muted mb-4">
          Writing
        </h2>
      </div>

      <div className="space-y-6">
        {writingItems
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-card rounded-lg border border-border hover:border-foreground transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-muted">
                {item.title}
              </h3>
              <span className="text-sm text-muted whitespace-nowrap ml-4">
                {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <p className="text-muted mb-4">
              {item.description}
            </p>
            <span className="text-muted hover:text-foreground text-base underline transition-colors duration-200 hover:scale-105">
              Read more →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
