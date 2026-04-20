import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { personal } from '../data/portfolio';
import SectionTracer from './SectionTracer';

const roles = ['Software Engineer', 'AI Infrastructure Builder', 'Cloud Systems Architect', 'Full-Stack Developer'];

export default function Hero() {
  const [ri, setRi] = useState(0);
  const [txt, setTxt] = useState('');
  const [fwd, setFwd] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const role = roles[ri];
    let t: ReturnType<typeof setTimeout>;
    if (fwd) {
      if (txt.length < role.length) t = setTimeout(() => setTxt(role.slice(0, txt.length + 1)), 52);
      else t = setTimeout(() => setFwd(false), 2000);
    } else {
      if (txt.length > 0) t = setTimeout(() => setTxt(txt.slice(0, -1)), 26);
      else { setRi(i => (i + 1) % roles.length); setFwd(true); }
    }
    return () => clearTimeout(t);
  }, [txt, fwd, ri]);

  const show = (d: number) => `transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} delay-[${d}ms]`;

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #FFF7ED 0%, #FEFCF8 40%, #FFFBEB 100%)' }}>

      <SectionTracer variant={1} />

      {/* Gradient blobs */}
      <div className="absolute top-[-100px] right-[-150px] w-[650px] h-[650px] rounded-full pointer-events-none opacity-[0.22]"
        style={{ background: 'radial-gradient(circle, #F97316 0%, #FBBF24 40%, transparent 72%)', filter: 'blur(1px)' }} />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.1]"
        style={{ background: 'radial-gradient(circle, #FB923C 0%, transparent 70%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-warm bg-dot-md opacity-60" />

      {/* Decorative rings */}
      <div className="absolute right-[6%] top-[12%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(249,115,22,0.08)', animation: 'spin 30s linear infinite' }} />
      <div className="absolute right-[11%] top-[18%] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(245,158,11,0.1)' }} />

      <div className="section-container relative z-10 py-28 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

          {/* Text */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-warm-200
                             bg-warm-100 text-md font-bold text-accent mb-6 ${show(0)}`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              Open to new opportunities
            </div>

            <h1 className={`font-archivo font-black text-text-primary leading-[0.97] mb-5 tracking-tight ${show(100)}`}
              style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}>
              Jawahar Sai<br />
              <span className="gradient-text">Nathani</span>
            </h1>

            <p className={`text-xl font-semibold text-text-secondary mb-5 h-8 ${show(220)}`}>
              {txt}<span className="cursor-blink" />
            </p>

            <p className={`text-text-secondary leading-relaxed max-w-xl text-[18px] mb-8 ${show(320)}`}>
              Building production-grade AI systems and scalable cloud infrastructure.
              Passionate about LLMs, agentic pipelines, and making complex systems run fast
              for real users at real scale.
            </p>

            {/* Stats */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 ${show(420)}`}>
              {personal.stats.map(s => (
                <div key={s.label}
                  className="bg-surface border-2 border-warm-100 rounded-2xl p-4 text-center shadow-card
                             hover:shadow-card-hover hover:border-warm-300 transition-all duration-300 group">
                  <div className="stat-value text-2xl mb-0.5">{s.value}</div>
                  <div className="text-text-muted text-[13px] leading-tight font-semibold">{s.label}</div>
                </div>
              ))}
            </div>

            <div className={`flex flex-wrap gap-3 ${show(520)}`}>
              <a href="#experience" className="btn-primary">View My Work <ArrowRight size={16} /></a>
              <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Download size={16} /> Resume
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="btn-ghost" aria-label="GitHub"><Github size={17} /></a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="btn-ghost" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href={`mailto:${personal.email}`}
                className="btn-ghost" aria-label="Email"><Mail size={17} /></a>
            </div>
          </div>

          {/* Photo */}
          <div className={`lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end ${show(200)}`}>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] scale-110 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)' }} />
              <div className="absolute inset-0 rounded-[2rem] border-2 border-warm-200 scale-105" />
              <div className="absolute inset-0 rounded-[2rem] border border-amber-100 scale-[1.12] opacity-60" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-story"
                style={{ width: 'clamp(220px, 20vw, 300px)', height: 'clamp(270px, 26vw, 380px)' }}>
                <img src="./images/hero.png" alt="Jawahar Sai Nathani"
                  className="w-full h-full object-cover object-top" />
                <div className="absolute inset-x-0 bottom-0 h-24"
                  style={{ background: 'linear-gradient(to top, rgba(255,247,237,0.5), transparent)' }} />
              </div>
              <div className="absolute -bottom-4 -left-5 bg-white border-2 border-warm-100 rounded-2xl
                              px-4 py-2.5 shadow-story animate-float">
                <div className="stat-value text-2xl">4.0</div>
                <div className="text-text-muted text-[13px] font-bold mt-0.5">GPA · TAMU</div>
              </div>
              <div className="absolute -top-4 -right-5 rounded-2xl px-4 py-2.5 shadow-story"
                style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                <div className="font-archivo font-black text-white text-2xl leading-none">2+ Years</div>
                <div className="text-orange-100 text-[13px] font-bold mt-0.5">Startup Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${show(700)}`}>
        <span className="text-text-muted text-[10px] tracking-[0.2em] uppercase font-bold">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
      </div>
    </section>
  );
}
