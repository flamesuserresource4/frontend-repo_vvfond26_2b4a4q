import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all ${
    scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
  }`;

  const LinkItem = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 text-sm text-white/90 hover:text-white transition"
    >
      {children}
    </a>
  );

  return (
    <header className={navClasses}>
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400" />
          <span className="font-semibold tracking-wide text-white">Designer</span>
        </a>

        <div className="hidden md:flex items-center">
          <LinkItem href="#work">Work</LinkItem>
          <LinkItem href="#about">About</LinkItem>
          <LinkItem href="#contact">Contact</LinkItem>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            <LinkItem href="#work">Work</LinkItem>
            <LinkItem href="#about">About</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
          </div>
        </div>
      )}
    </header>
  );
}
