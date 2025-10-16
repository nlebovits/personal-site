"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-96 h-96 rounded-full bg-border flex items-center justify-center overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Foto de perfil"
              width={384}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-muted">
            Acerca de
          </h2>
          
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              Soy becario Fulbright en La Plata, Argentina, donde investigo cómo la IA, los datos abiertos y la computación geoespacial nativa en la nube pueden ayudar a las ciudades con recursos limitados a gestionar mejor los riesgos climáticos. Tengo una maestría en planificación urbana de la{" "}
              <a href="https://www.design.upenn.edu/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground underline transition-colors duration-200 hover:scale-105">
                Escuela de Diseño Weitzman
              </a> de la Universidad de Pensilvania, con especialización en planificación ambiental y ciencia de datos geoespaciales.
            </p>
            <p>
              Trabajé como asistente de investigación de{" "}
              <a href="https://www.design.upenn.edu/people/allison-lassiter" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground underline transition-colors duration-200 hover:scale-105">
                la Profesora Allison Lassiter
              </a>. Desarrollamos un modelo de clustering para identificar sistemas públicos de agua potable vulnerables en Estados Unidos y una simulación multiagente sobre cómo la intrusión salina afecta las redes costeras de abastecimiento de agua potable. Con el{" "}
              <a href="https://www.design.upenn.edu/people/matthijs-bouw" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground underline transition-colors duration-200 hover:scale-105">
                Profesor Matthijs Bouw
              </a>, desarrollé modelos de peligros de inundación y calor para un{" "}
              <a href="https://www.design.upenn.edu/sites/default/files/uploads/news/Hotspot%20Stoplight%20Brochure%202024.pdf" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground underline transition-colors duration-200 hover:scale-105">
                proyecto de ONU-Hábitat
              </a>{" "}
              que ayudará a planificadores urbanos del Sur Global a mitigar conflictos entre expansión urbana y amenazas climáticas y pérdida de biodiversidad.
            </p>
            <p>
              Fui fundador y líder técnico de{" "}
              <a href="https://www.cleanandgreenphilly.org/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground underline transition-colors duration-200 hover:scale-105">
                Clean & Green Philly
              </a>, una plataforma tecnológica sin fines de lucro y de código abierto que promueve intervenciones basadas en datos en propiedades vacantes para mejorar la calidad de vida en Filadelfia.
            </p>
            <p>
              Me interesa usar datos y tecnología para fomentar la participación ciudadana y construir ciudades más resilientes e inclusivas. Creo en la tecnología de código abierto y el trabajo comunitario.
            </p>
          </div>

          {/* Social Links and Resume */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-center pt-4 space-y-6 sm:space-y-0">
            <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/nlebovits/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/nlebovits/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="mailto:nissimlebovits@proton.me"
              className="text-muted hover:text-foreground transition-colors duration-200 hover:scale-110"
              aria-label="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            </div>
            
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="inline-flex items-center px-4 py-2 border border-border text-sm font-medium rounded-md text-muted bg-transparent hover:text-foreground hover:border-foreground transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar Currículum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
