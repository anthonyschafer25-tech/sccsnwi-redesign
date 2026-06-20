export function BeforeAfter() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-navy-900/40 font-medium">
            Before & After
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display tracking-wider text-navy-900">
            Same property. Days apart.
          </h2>
          <p className="mt-4 text-neutral-700 max-w-xl mx-auto">
            Water extraction, structural drying, mold remediation. Complete restoration from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Before */}
          <figure className="group relative overflow-hidden rounded-lg bg-neutral-100 aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/5 to-navy-900/10 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-display text-navy-900/10 tracking-widest">BEFORE</p>
                <p className="text-xs text-navy-900/20 mt-2">Water damage · basement flood</p>
              </div>
            </div>
            <figcaption className="absolute top-4 left-4 px-3 py-1.5 bg-navy-900 text-white text-xs font-semibold rounded-sm tracking-wider">
              Before
            </figcaption>
          </figure>

          {/* After */}
          <figure className="group relative overflow-hidden rounded-lg bg-neutral-100 aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-gold-500/10 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-display text-navy-900/10 tracking-widest">AFTER</p>
                <p className="text-xs text-navy-900/20 mt-2">Fully restored · dry · sanitized</p>
              </div>
            </div>
            <figcaption className="absolute top-4 right-4 px-3 py-1.5 bg-gold-500 text-navy-900 text-xs font-semibold rounded-sm tracking-wider">
              After
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
