import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B0B10] text-white selection:bg-fuchsia-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="relative bg-[#0B0B10] py-20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid items-center gap-10 sm:grid-cols-5">
              <div className="sm:col-span-2">
                <div className="h-44 w-full rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 ring-1 ring-inset ring-white/10" />
              </div>
              <div className="sm:col-span-3">
                <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
                <p className="mt-3 text-white/70">
                  I’m a graphic designer focused on tech-forward, interactive visuals. My work combines clean systems with playful moments—resulting in brands that feel modern, expressive, and unmistakably you.
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70 sm:grid-cols-3">
                  <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Brand Identity</li>
                  <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">3D & Motion</li>
                  <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Art Direction</li>
                  <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Editorial</li>
                  <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Digital Products</li>
                  <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Social Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/30 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Designer Studio — Built with love and gradients.
      </footer>
    </div>
  );
}
