"use client";

// Talks data
const talksItems = [
  {
    id: "buildings-in-data-la-plata",
    title: "Las edificaciones en datos: Nuevas miradas hacia el entorno construido",
    description: "Una conferencia invitada en la Universidad Nacional de La Plata que cubre aplicaciones emergentes de big data para entender edificios y el entorno construido.",
    date: "15 de octubre, 2025",
    venue: "Universidad Nacional de La Plata",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vR-U2BTy3PC9gm32SAg2AKz_MkCr0aXkLPk6NTqLecXFnP0ERtXo56XdU2U1yPcZ6tQUwBDmfz5--VO/pubembed?start=false&loop=false&delayms=3000",
  },
  {
    id: "uba-open-data-seminar",
    title: "Datos abiertos para ciudades sustentables",
    description: "Una conferencia y taller para una clase de ingeniería civil en la UBA sobre cómo encontrar y aplicar conjuntos de datos abiertos comunes para su uso en planificación urbana sustentable.",
    date: "2 de junio, 2025",
    venue: "Universidad de Buenos Aires",
    url: "https://docs.google.com/presentation/d/1Su-p5k57bC_bg4W4eyeve3FX28N7DHnm4JdHLccUXbc/embed?start=false&loop=false&delayms=5000",
  },
  {
    id: "google-earth-engine-urban-planning",
    title: "Google Earth Engine para Planificación Urbana",
    description: "Una conferencia invitada para la clase de posgrado de Penn sobre 'aplicaciones de aprendizaje profundo para teledetección' sobre la aplicación de Google Earth Engine a áreas relevantes de la planificación urbana.",
    date: "14 de marzo, 2024",
    venue: "Universidad de Pensilvania",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vTHVO8wFNSZRX4MRGYzp5ndfUKddtbQ0K-zGdu1exwOcEYzW1dWmfMJO2ZZVK3Nnooji_pnbxwoPYeA/embed?start=false&loop=false&delayms=5000",
  },
  {
    id: "remote-sensing-urban-planning",
    title: "Teledetección para Planificación Urbana",
    description: "Una conferencia invitada para la clase de posgrado de Penn sobre 'aplicaciones de aprendizaje profundo para teledetección' que cubre los fundamentos de la teledetección, el aprendizaje automático en teledetección y las aplicaciones comunes de la teledetección para la planificación urbana.",
    date: "21 de enero, 2024",
    venue: "Universidad de Pensilvania",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vTy9nX3YYuUdgvWcxo2lKbCqN4fY9XjqlxofVve6Z6i8vL3z2jdxzuWYyR8xG0gTw5kxVXWQRvbS6ZP/embed?start=false&loop=false&delayms=5000",
  },
];

export function TalksSection() {
  return (
    <section id="talks" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-muted mb-4">
          Charlas y Presentaciones
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
              Ver presentación →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
