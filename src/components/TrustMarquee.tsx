"use client";

import { useRef, useEffect } from "react";
import { Shield, Star, Check } from "@/components/Icons";

const TRUST_ITEMS = [
  { icon: Shield, label: "IICRC Certified" },
  { icon: Check, label: "Licensed & Insured" },
  { icon: Shield, label: "EPA Lead-Safe Certified" },
  { icon: Star, label: "5.0 Google Rating" },
  { icon: Check, label: "Family Owned Since 2012" },
  { icon: Shield, label: "IICRC Certified" },
  { icon: Check, label: "Licensed & Insured" },
  { icon: Shield, label: "EPA Lead-Safe Certified" },
  { icon: Star, label: "5.0 Google Rating" },
  { icon: Check, label: "Family Owned Since 2012" },
];

export function TrustMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let pos = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      pos -= speed;
      // Reset when scrolled half the track
      if (Math.abs(pos) >= track.scrollWidth / 2) {
        pos = 0;
      }
      track.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-navy-900 py-5 overflow-hidden border-b border-white/5">
      <div className="mb-3 text-center">
        <span className="text-xs tracking-[0.2em] uppercase text-white/40">
          Trusted by Northwest Indiana
        </span>
      </div>
      <div className="relative">
        <div ref={trackRef} className="flex gap-12 whitespace-nowrap w-max">
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 shrink-0">
              <item.icon className="w-4 h-4 text-gold-500" />
              <span className="text-sm text-white/70 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
