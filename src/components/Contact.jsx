import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">Let’s create something playful</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Interested in a project, collaboration, or just want to say hi? I’m always open to new ideas and conversations.
        </p>

        <div className="mt-6">
          <a
            href="mailto:hello@designer.studio"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Mail size={18} /> hello@designer.studio
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a href="#about" className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:bg-white/10">
            About
          </a>
          <a href="#work" className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:bg-white/10">
            Selected Work
          </a>
          <a href="#home" className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:bg-white/10">
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}
