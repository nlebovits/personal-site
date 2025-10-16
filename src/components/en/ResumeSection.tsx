"use client";

export function ResumeSection() {
  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-muted mb-8">
          Resume
        </h2>
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="inline-flex items-center px-6 py-3 border border-border text-base font-medium rounded-md text-muted bg-transparent hover:bg-border transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  );
}
