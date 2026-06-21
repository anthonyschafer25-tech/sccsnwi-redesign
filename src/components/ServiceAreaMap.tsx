"use client";

export function ServiceAreaMap() {
  return (
    <section className="py-24 md:py-32 bg-bg-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Service Area</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">Porter, Lake &amp; La Porte Counties</h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">Over 30 cities across Northwest Indiana. If you are in NWI, we are nearby.</p>
        </div>

        {/* Google Maps satellite embed — centered on Valparaiso, showing 3-county region */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-elevated">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d384992.50529862513!2d-87.25!3d41.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1!6m8!1m7!1sChIJC1cWcp3PEYgR9Vq2sF5C4pU!2zM!3b1!8m2!3d41.473!4d-87.061!10e3!"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SCCS NWI Service Area"
            className="w-full"
          />
        </div>

        {/* City links */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["Valparaiso","Portage","Chesterton","Michigan City","Crown Point","Merrillville","Hobart","Gary","La Porte","Hammond","Munster","Schererville","Saint John","Lowell","Cedar Lake"].map(city => (
            <a key={city} href={`/${city.toLowerCase().replace(/\s+/g,"-")}`} className="px-3 py-1.5 rounded-lg border border-border text-xs text-text-secondary hover:text-white hover:border-white/20 hover:bg-white/5 transition-all">
              {city}
            </a>
          ))}
          <a href="/service-area" className="px-3 py-1.5 rounded-lg bg-white/10 text-xs text-white font-medium hover:bg-white/15 transition-all">+ 15 more</a>
        </div>
      </div>
    </section>
  );
}
