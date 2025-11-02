import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Neon Type Explorations',
    desc: 'Custom wordmarks and letterforms with a futuristic glow.',
    tags: ['Typography', 'Brand'],
    color: 'from-fuchsia-500/20 to-cyan-400/20',
    link: '#',
  },
  {
    title: 'Playful App Icons',
    desc: 'A cohesive set of app icons with a soft 3D feel.',
    tags: ['Iconography', '3D'],
    color: 'from-indigo-500/20 to-teal-400/20',
    link: '#',
  },
  {
    title: 'Vibrant Poster Series',
    desc: 'Bold color, flowing gradients, and kinetic type layouts.',
    tags: ['Poster', 'Print'],
    color: 'from-violet-500/20 to-rose-400/20',
    link: '#',
  },
  {
    title: 'Brand Motion Kit',
    desc: 'Micro-animations and social loops for a startup launch.',
    tags: ['Motion', 'Social'],
    color: 'from-emerald-500/20 to-sky-400/20',
    link: '#',
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-white/60">
              A snapshot of recent projects across branding, motion, and product visuals.
            </p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            Full portfolio <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className={`group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${p.color} p-5 transition hover:border-white/20`}
            >
              <div className="mb-4 h-40 rounded-lg bg-black/30 ring-1 ring-inset ring-white/10 backdrop-blur-sm" />
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-white/70 group-hover:text-white">
                View project <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
