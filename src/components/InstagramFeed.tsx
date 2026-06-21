"use client";

export function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-bg-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Follow the Work</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">On the Job.<br /><span className="text-red-400">On Instagram.</span></h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">See real restoration jobs from across Northwest Indiana. Follow @sccsnwi for daily work.</p>
        </div>

        {/* Instagram-style cards — matches All City Janitorial layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Card 1 */}
          <a href="https://instagram.com/sccsnwi" target="_blank" rel="noopener" className="group relative aspect-square rounded overflow-hidden bg-bg-800 border border-border hover:border-red-500/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-tr from-bg-950/60 to-transparent flex items-end p-5">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">Follow on Instagram</span>
              </div>
            </div>
          </a>
          {/* Card 2 */}
          <a href="https://instagram.com/sccsnwi" target="_blank" rel="noopener" className="group relative aspect-square rounded overflow-hidden bg-bg-800 border border-border hover:border-red-500/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-tr from-bg-950/60 to-transparent flex items-end p-5">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">See More Work</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
