"use client";

export function ContactForm() {
  return (
    <div className="bg-bg-800 border border-border rounded-2xl p-8">
      <h2 className="text-xl font-bold text-white">Request a call back</h2>
      <p className="mt-2 text-sm text-text-tertiary">Fill out the form and we will call you back.</p>
      <form className="mt-6 space-y-4" onSubmit={e => e.preventDefault()}>
        <div><label className="block text-xs text-text-tertiary font-semibold uppercase tracking-[0.1em] mb-1.5">Name</label><input type="text" required className="w-full px-4 py-3 rounded-xl bg-bg-900 border border-border text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition-all" placeholder="John Smith" /></div>
        <div><label className="block text-xs text-text-tertiary font-semibold uppercase tracking-[0.1em] mb-1.5">Phone</label><input type="tel" required className="w-full px-4 py-3 rounded-xl bg-bg-900 border border-border text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition-all" placeholder="(219) 555-0123" /></div>
        <div><label className="block text-xs text-text-tertiary font-semibold uppercase tracking-[0.1em] mb-1.5">Service Needed</label><select className="w-full px-4 py-3 rounded-xl bg-bg-900 border border-border text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition-all"><option value="">Select</option><option>Water Damage</option><option>Fire Damage</option><option>Mold</option><option>Other</option></select></div>
        <div><label className="block text-xs text-text-tertiary font-semibold uppercase tracking-[0.1em] mb-1.5">Message</label><textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-bg-900 border border-border text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 resize-none transition-all" placeholder="Tell us about the situation..." /></div>
        <button type="submit" className="w-full py-3.5 bg-red-500 text-white font-bold rounded-xl hover:bg-red-400 transition-all active:scale-[0.98]">Send</button>
      </form>
    </div>
  );
}
