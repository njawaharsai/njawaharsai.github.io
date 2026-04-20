import { useEffect, useRef, useState } from 'react';
import { Download, Menu, X, Play } from 'lucide-react';
import { personal } from '../data/portfolio';

interface NavbarProps {
  onStoryMode?: () => void;
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
];

export default function Navbar({ onStoryMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setVisible(currentY < 80 || currentY < prevScrollY.current);
      prevScrollY.current = currentY;

      // Determine active section
      const sections = navItems.map(i => i.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-warm-100 shadow-sm shadow-warm-100/50'
          : 'bg-transparent'
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a
            href="#home"
            className="font-archivo font-bold text-xl text-text-primary tracking-tight hover:text-accent transition-colors"
          >
            {personal.initials}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'text-accent active'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            {onStoryMode && (
              <button
                onClick={onStoryMode}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-warm-200
                           text-accent text-sm font-semibold bg-accent-light hover:bg-warm-200
                           transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                <Play size={13} />
                Story Mode
              </button>
            )}
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden btn-ghost"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-border px-6 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-accent bg-accent-light'
                    : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 btn-primary justify-center text-sm py-2.5"
            >
              <Download size={15} />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
