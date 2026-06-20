"use client";
import { useRef, useEffect } from "react";

const PLACEHOLDER_ITEMS = ["Water Extraction","Structural Drying","Mold Containment","Fire Cleanup","Roof Tarping","Content Cleaning","Flood Response","Smoke Removal"];

export function ProjectGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current; if (!track) return;
    let pos = 0; let id: number;
    const animate = () => { pos -= 0.25; if (Math.abs(pos) >= track.scrollWidth/2) pos = 0; track.style.transform = `translateX(${pos}px)`; id = requestAnimationFrame(animate); };
    id = requestAnimationFrame(animate); return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Recent Work</span>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">Restoration projects across NWI.</h2>
      </div>
      <div ref={trackRef} className="flex gap-4 w-max px-6">
        {[...PLACEHOLDER_ITEMS,...PLACEHOLDER_ITEMS].map((label,i) => (
          <div key={i} className="w-72 h-48 shrink-0 rounded-2xl bg-bg-800 border border-border flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            <span className="text-xs text-text-tertiary/40 font-medium tracking-wider uppercase">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center"><a href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-red-400 transition-colors">See All Services</a></div>
    </section>
  );
}
