export function BeforeAfter() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.15em] uppercase text-red-500 font-semibold">Before & After</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display tracking-tight text-charcoal-900">Same property. Days apart.</h2>
          <p className="mt-4 text-neutral-700 max-w-xl mx-auto">Water extraction, structural drying, mold remediation. Complete restoration from start to finish.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <figure className="group relative overflow-hidden rounded-2xl bg-surface-100 aspect-[4/3]">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-charcoal-900/3 to-charcoal-900/5"><p className="text-5xl font-display text-charcoal-900/8 tracking-wider">BEFORE</p></div>
            <figcaption className="absolute top-4 left-4 px-3 py-1.5 bg-charcoal-900 text-white text-xs font-semibold rounded-lg">Before</figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-2xl bg-surface-100 aspect-[4/3]">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-500/5 to-red-500/8"><p className="text-5xl font-display text-charcoal-900/8 tracking-wider">AFTER</p></div>
            <figcaption className="absolute top-4 right-4 px-3 py-1.5 bg-red-500 text-white text-xs font-semibold rounded-lg">After</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
