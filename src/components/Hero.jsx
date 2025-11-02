import Spline from '@splinetool/react-spline';
import { ArrowUpRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0B0B10] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(120,119,198,0.25),rgba(30,27,75,0.2)_40%,transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 pt-28 sm:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          Available for freelance projects
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Graphic Designer crafting playful, modern visuals
        </h1>

        <p className="max-w-xl text-base text-white/70 sm:text-lg">
          I blend typography, 3D, and bold color to turn ideas into memorable brands and experiences.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View Work
            <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:hello@designer.studio"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Mail size={18} /> Contact
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Download size={18} /> Resume
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B0B10] to-transparent" />
    </section>
  );
}
