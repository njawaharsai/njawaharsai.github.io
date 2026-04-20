import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personal } from '../data/portfolio';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      id="contact"
      className="relative border-t overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #110500 0%, #1C0A00 50%, #0C0300 100%)', borderColor: '#2D1500' }}
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center top, rgba(249,115,22,0.1) 0%, transparent 70%)' }} />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-dark bg-grid-md opacity-25" />

      <div className="section-container py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

          {/* Left */}
          <div>
            <a href="#home"
              className="font-archivo font-black text-3xl text-white mb-4 block
                         hover:text-accent transition-colors duration-200">
              {personal.initials}
            </a>
            <p className="text-orange-200/100 leading-relaxed mb-6 max-w-sm text-[15px]">
              Software engineer focused on AI infrastructure, scalable cloud systems, and
              production-grade full-stack products.
            </p>
            <div className="flex gap-3">
              {[
                { href: personal.github,          icon: <Github size={17} />,   label: 'GitHub'   },
                { href: personal.linkedin,         icon: <Linkedin size={17} />, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, icon: <Mail size={17} />,    label: 'Email'    },
              ].map(item => (
                <a key={item.label} href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={item.label}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center
                             text-orange-200/100 transition-all duration-200
                             hover:border-accent hover:text-accent hover:bg-orange-950/50"
                  style={{ borderColor: '#584D47' }}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="font-archivo font-bold text-white text-xl mb-2">Get In Touch</h3>
            <p className="text-orange-200/100 text-sm mb-6 leading-relaxed">
              Open to full-time roles in software engineering, AI infrastructure, and cloud systems.
              Fast response. High standards. No corporate speak.
            </p>
            <a href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold rounded-xl
                         transition-all duration-200 hover:-translate-y-1 hover:shadow-glow
                         focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
              <Mail size={15} />
              {personal.email}
            </a>

            <div className="mt-8 pt-8" style={{ borderTop: '1px solid #2D1500' }}>
              <p className="text-orange-200/100 text-xs mb-3 font-bold tracking-widest uppercase">Quick links</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['About', 'Experience', 'Education', 'Projects', 'Awards'].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`}
                    className="text-orange-200/75 text-sm hover:text-orange-300 transition-colors font-medium">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solidrgb(65, 33, 5)' }}>
          <p className="text-orange-200/100 text-sm">
            Built with ♥︎ by JSN
          </p>
          <button onClick={scrollTop}
            className="flex items-center gap-2 text-orange-200/30 text-sm hover:text-orange-300
                       transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
            aria-label="Scroll to top">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
