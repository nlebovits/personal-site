"use client";

// Writing data
const writingItems = [
  {
    id: "human-scale-data-substack",
    title: "Datos a escala humana",
    description: "Una página de Substack donde comparto observaciones y análisis de mi investigación Fulbright.",
    date: "2025-06-15",
    url: "https://datosaescalahumana.substack.com/",
  },
  {
    id: "mayor-parker-housing-plan-missing-data",
    title: "Filadelfia no puede ser la 'más segura, limpia y verde' sin datos básicos",
    description: "Un artículo de opinión en The Philadelphia Inquirer destacando que el fracaso de la ciudad en publicar datos confiables de vacantes pone en peligro la capacidad de la Ciudad para tomar medidas contra el vertido ilegal y el crimen violento, mitigar los riesgos de salud pública y construir viviendas asequibles.",
    date: "2025-06-25",
    url: "https://www.inquirer.com/opinion/commentary/mayor-parker-housing-plan-missing-data-20250625.html",
  },
  {
    id: "data-driven-cleaning-greening",
    title: "Limpiar y Reverdecer Filadelfia Donde Más se Necesita",
    description: "Un artículo de opinión en The Philadelphia Citizen pidiendo a la Alcaldesa Cherelle Parker que adopte un enfoque más basado en datos para abordar las propiedades vacantes y mejorar la calidad de vida.",
    date: "2024-10-22",
    url: "https://thephiladelphiacitizen.org/guest-commentary-clean-and-green-philly-where-its-most-needed/",
  },
];

export function WritingSection() {
  return (
    <section id="writing" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-muted mb-4">
          Escritura
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
                {new Date(item.date).toLocaleDateString('es-ES', {
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
              Leer más →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
