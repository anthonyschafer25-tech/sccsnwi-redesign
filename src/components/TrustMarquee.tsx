"use client";
import { useRef, useEffect } from "react";
import { Shield, Star, Check } from "@/components/Icons";

const ITEMS = [
  { icon: Shield, label: "IICRC Certified" }, { icon: Check, label: "Licensed & Insured" }, { icon: Shield, label: "EPA Lead-Safe Certified" }, { icon: Star, label: "5.0 Google Rating" }, { icon: Check, label: "Family Owned Since 2012" },
  { icon: Shield, label: "IICRC Certified" }, { icon: Check, label: "Licensed & Insured" }, { icon: Shield, label: "EPA Lead-Safe Certified" }, { icon: Star, label: "5.0 Google Rating" }, { icon: Check, label: "Family Owned Since 2012" },
];

export function TrustMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current; if (!track) return;
    let pos = 0; let id: number;
    const animate = () => { pos -= 0.4; if (Math.abs(pos) >= track.scrollWidth/2) pos = 0; track.style.transform = `translateX(${pos}px)`; id = requestAnimationFrame(animate); };
    id = requestAnimationFrame(animate); return () => cancelAnimationFrame(id);
  }, []);
  return (
    <section className="bg-bg-900 border-b border-border py-5 overflow-hidden">
      <div className="mb-3 text-center"><span className="text-xs tracking-[0.15em] uppercase text-text-tertiary font-medium">Trusted by Northwest Indiana</span></div>
      <div ref={trackRef} className="flex gap-12 whitespace-nowrap w-max">{ITEMS.map((item,i) => <div key={i} className="flex items-center gap-2.5 shrink-0"><item.icon className="w-4 h-4 text-red-500" /><span className="text-sm text-text-secondary font-medium">{item.label}</span></div>)}</div>
    </section>
  );
}
