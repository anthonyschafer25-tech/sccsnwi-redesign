"use client";

import { useState } from "react";

interface City {
  name: string;
  x: number;
  y: number;
  major?: boolean;
}

const CITIES: City[] = [
  { name: "Valparaiso", x: 57, y: 55, major: true },
  { name: "Portage", x: 48, y: 32, major: true },
  { name: "Chesterton", x: 55, y: 22, major: true },
  { name: "Michigan City", x: 68, y: 18, major: true },
  { name: "Crown Point", x: 35, y: 62, major: true },
  { name: "Merrillville", x: 42, y: 52, major: true },
  { name: "Hobart", x: 50, y: 42 },
  { name: "Gary", x: 38, y: 38 },
  { name: "Hammond", x: 28, y: 42 },
  { name: "La Porte", x: 72, y: 35 },
  { name: "Munster", x: 25, y: 48 },
  { name: "Highland", x: 30, y: 50 },
  { name: "Schererville", x: 33, y: 55 },
  { name: "Saint John", x: 35, y: 58 },
  { name: "Cedar Lake", x: 38, y: 65 },
  { name: "Lowell", x: 42, y: 72 },
  { name: "Hebron", x: 52, y: 68 },
  { name: "Kouts", x: 60, y: 65 },
  { name: "Whiting", x: 30, y: 35 },
  { name: "East Chicago", x: 32, y: 38 },
  { name: "Griffith", x: 40, y: 48 },
  { name: "Dyer", x: 33, y: 52 },
  { name: "Winfield", x: 45, y: 58 },
  { name: "Lakes of the Four Seasons", x: 48, y: 62 },
  { name: "Wheeler", x: 55, y: 48 },
  { name: "South Haven", x: 52, y: 30 },
  { name: "Westville", x: 65, y: 42 },
  { name: "Miller Beach", x: 45, y: 28 },
];

export function ServiceAreaMap() {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-charcoal-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Service Area</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display tracking-tight text-white">
            Porter, Lake &amp; La Porte Counties
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto">
            We serve all of Northwest Indiana — over 30 cities across three counties. Hover or tap to explore.
          </p>
        </div>

        {/* SVG Map */}
        <div className="relative max-w-2xl mx-auto aspect-[4/3] bg-charcoal-800/50 rounded-3xl overflow-hidden border border-white/5">
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="map-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#map-grid)" />
          </svg>

          {/* County labels */}
          <div className="absolute top-4 left-4 text-[10px] text-white/20 uppercase tracking-widest font-semibold">
            Lake Co.
          </div>
          <div className="absolute top-12 right-8 text-[10px] text-white/20 uppercase tracking-widest font-semibold">
            La Porte Co.
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-white/20 uppercase tracking-widest font-semibold">
            Porter Co.
          </div>

          {/* City dots */}
          <div className="absolute inset-0">
            {CITIES.map((city) => (
              <button
                key={city.name}
                onClick={() => setActiveCity(activeCity === city.name ? null : city.name)}
                className="absolute group"
                style={{ left: `${city.x}%`, top: `${city.y}%` }}
                aria-label={city.name}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    city.major
                      ? "w-3 h-3 bg-red-500 shadow-[0_0_12px_rgba(196,30,58,0.6)]"
                      : "w-2 h-2 bg-white/50 group-hover:bg-white/80"
                  } ${activeCity === city.name ? "scale-150" : ""}`}
                />
                {/* Label on hover/active */}
                <span
                  className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-medium transition-all duration-200 ${
                    activeCity === city.name
                      ? "text-white opacity-100"
                      : "text-white/0 opacity-0 group-hover:text-white/60 group-hover:opacity-100"
                  }`}
                >
                  {city.name}
                </span>
              </button>
            ))}
          </div>

          {/* Lake Michigan label */}
          <div className="absolute top-1 right-4 text-[8px] text-white/10 uppercase tracking-[0.2em]">
            Lake Michigan
          </div>
        </div>

        {/* Active city info */}
        {activeCity && (
          <div className="mt-6 text-center">
            <p className="text-sm text-white/60">
              <span className="text-white font-semibold">{activeCity}</span> — SCCS NWI provides full restoration services here
            </p>
          </div>
        )}

        {/* City links */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {["Valparaiso","Portage","Chesterton","Michigan City","Crown Point","Merrillville","Hobart","Gary","La Porte","Hammond"].map(city => (
            <a key={city} href={`/${city.toLowerCase().replace(/\s+/g,"-")}`} className="px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all">
              {city}
            </a>
          ))}
          <a href="/service-area" className="px-3 py-1.5 rounded-lg bg-white/10 text-xs text-white font-medium hover:bg-white/15 transition-all">+ 20 more</a>
        </div>
      </div>
    </section>
  );
}
