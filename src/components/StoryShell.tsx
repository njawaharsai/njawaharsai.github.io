import { useState, useEffect, useCallback, useRef } from 'react';
import {
  ArrowRight, ArrowLeft, LayoutGrid, Github, Linkedin, Mail, Download,
  MapPin, GraduationCap, BrainCircuit, Cloud, Code2, Cpu,
  Zap, ChevronRight, Flame, Trophy, Star,
} from 'lucide-react';
import { personal, education, projects, certificates } from '../data/portfolio';
import { storyGroups } from '../data/stories';
import { cardData } from '../data/projectCards';
import ProjectCardSVG from './ProjectCardSVG';
import SectionTracer from './SectionTracer';
import { useTypewriter, useWordReveal } from '../hooks/useTypewriter';

/* ── Chapter metadata ──────────────────────────────────────────────────────── */
const CHAPTERS = [
  { id: 'intro',      n: '——', label: 'Prelude',    phrase: '', emoji: '' },
  { id: 'hero',       n: '01', label: 'Meet Me',    phrase: "20,000+ users are already fans, you should see why.",             emoji: '👋' },
  { id: 'about',      n: '02', label: 'About',      phrase: "Built for scale. Obsessed with speed. Wired for impact.",          emoji: '🧠' },
  { id: 'experience', n: '03', label: 'Experience', phrase: "These aren't job titles, they're war stories.",                   emoji: '⚡' },
  { id: 'education',  n: '04', label: 'Education',  phrase: "IIT Tirupati → Texas A&M. 11,000 km. One perfect GPA.",           emoji: '🎓' },
  { id: 'projects',   n: '05', label: 'Projects',   phrase: "Things I've built when 'impossible' sounded boring.",               emoji: '🚀' },
  { id: 'awards',     n: '06', label: 'Awards',     phrase: "The trophies are real. The humility... I'm working on it.",      emoji: '🏆' },
  { id: 'connect',    n: '07', label: 'Connect',    phrase: "You made it here. Smart. Let's build something great together.",   emoji: '🎯' },
];

const EXPERTISE = [
  { icon: BrainCircuit, title: 'AI & LLMs',      items: ['RAG Pipelines', 'ReAct Agents', 'LLM Fine-tuning', 'OpenAI · Gemini'] },
  { icon: Cloud,        title: 'Cloud & Infra',  items: ['AWS ECS Fargate', 'Docker', 'Kubernetes', 'Azure', 'CI/CD'] },
  { icon: Code2,        title: 'Backend',        items: ['FastAPI', 'ASP.NET', 'Node.js', 'PostgreSQL', 'Redis'] },
  { icon: Cpu,          title: 'Frontend',       items: ['React', 'TypeScript', 'Next.js', 'Angular', 'Swift'] },
];

/* ── Animated helpers ──────────────────────────────────────────────────────── */
function Reveal({ children, delay = 0, className = '', from = 'up' }:
  { children: React.ReactNode; delay?: number; className?: string; from?: 'up'|'right'|'left'|'scale' }) {
  const anim = { up: 'animate-fade-up', right: 'animate-slide-in-right', left: 'animate-slide-in-left', scale: 'animate-scale-in' }[from];
  return (
    <div className={`opacity-0 ${anim} ${className}`}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}>
      {children}
    </div>
  );
}

function FunPhrase({ phrase, emoji, dark = false }: { phrase: string; emoji: string; dark?: boolean }) {
  return (
    <div className={`fun-phrase mb-6 ${dark ? 'dark-bg' : ''}`}>
      <span className="text-lg leading-none">{emoji}</span>
      <span>{phrase}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CHAPTER 00 — INTRO / PRELUDE
══════════════════════════════════════════════════════════════════════════════ */
function ChapterIntro({ onNext, onViewFull }: { onNext: () => void; onViewFull: () => void }) {
  const LINE0 = "Hey, I'm Jawahar.";
  const LINE1 = "This is not a résumé.";
  const LINE2 = "It's a story of what the résumé doesn't show.";

  // Chain: greeting → headline → subtitle → body → CTAs
  const { displayed: d0, done: done0 } = useTypewriter(LINE0, 62, 700);

  const [startL1, setStartL1] = useState(false);
  const [startL2, setStartL2] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showCtas, setShowCtas] = useState(false);

  useEffect(() => {
    if (!done0) return;
    const t = setTimeout(() => setStartL1(true), 550);
    return () => clearTimeout(t);
  }, [done0]);

  const { displayed: d1, done: done1 } = useTypewriter(startL1 ? LINE1 : '', 72, 0);

  useEffect(() => {
    if (!done1 || !startL1) return;
    const t = setTimeout(() => setStartL2(true), 500);
    return () => clearTimeout(t);
  }, [done1, startL1]);

  const { displayed: d2, done: done2 } = useTypewriter(startL2 ? LINE2 : '', 42, 0);

  useEffect(() => {
    if (!done2 || !startL2) return;
    const t1 = setTimeout(() => setShowBody(true),  500);
    const t2 = setTimeout(() => setShowCtas(true), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [done2, startL2]);

  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-start lg:justify-center overflow-x-hidden pt-4 pb-12 sm:pb-16 lg:py-0"
      style={{ background: 'linear-gradient(145deg, #0A0300 0%, #150600 50%, #0A0200 100%)' }}>

      <SectionTracer variant={0} dark />

      {/* Central atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)' }} />

      {/* Fine dot grid */}
      <div className="absolute inset-0 bg-dot-dark bg-dot-lg opacity-20" />

      {/* Scattered ambient particles */}
      {[
        [12,18,1.4],[88,22,1.0],[6,72,0.8],[94,68,1.2],[52,8,0.9],
        [24,88,0.7],[76,82,1.1],[38,14,0.6],[64,92,0.8],[82,40,0.7],
        [18,50,0.5],[90,50,1.0],[50,96,0.6],[8,35,0.9],[96,30,0.7],
      ].map(([x,y,s], i) => (
        <div key={i} className="absolute rounded-full pointer-events-none animate-pulse-slow"
          style={{
            left: `${x}%`, top: `${y}%`,
            width: `${s * 3}px`, height: `${s * 3}px`,
            background: `rgba(249,115,22,${0.15 + (i % 3) * 0.1})`,
            animationDelay: `${i * 0.4}s`,
          }} />
      ))}

      {/* Large faint quote mark decoration */}
      <div className="absolute left-4 top-8 font-archivo font-black select-none pointer-events-none hidden lg:block"
        style={{ fontSize: '22rem', lineHeight: 1, color: 'transparent',
                 WebkitTextStroke: '1px rgba(249,115,22,0.05)' }}>
        "
      </div>

      {/* Main content — centered */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 py-10 sm:py-14 lg:py-12 text-center">

        {/* Pre-label */}
        <div className="opacity-0 animate-fade-in mb-8 inline-flex items-center gap-3"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <span className="w-6 h-px bg-accent/50" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/70 font-semibold">
            My Portfolio
          </span>
          <span className="w-6 h-px bg-accent/50" />
        </div>

        {/* Greeting — medium, warm amber */}
        <div style={{ minHeight: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
          <p className="font-grotesk font-semibold"
            style={{ fontSize: 'clamp(3.2rem, 3vw, 4.5rem)', color: 'rgba(251,191,36,0.75)' }}>
            {d0}
            {!done0 && <span className="cursor-blink" style={{ background: '#FBBF24' }} />}
          </p>
        </div>

        {/* Line 1 — huge */}
        <h1 className="font-archivo font-black text-white leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 10vw, 2.8rem)' }}>
          {startL1 ? (d1 || <span className="opacity-0">N</span>) : <span className="opacity-0">N</span>}
          {startL1 && !done1 && <span className="cursor-blink" />}
        </h1>

        {/* Line 2 — large gradient */}
        <div style={{ minHeight: 'clamp(2.2rem, 6vw, 4rem)', marginBottom: '2rem' }}>
          {startL2 && (
            <h2 className="font-archivo font-black leading-tight tracking-tight gradient-text-light"
              style={{ fontSize: 'clamp(1.6rem, 4.5vw, 3.2rem)' }}>
              {d2}
              {startL2 && !done2 && <span className="cursor-blink" style={{ background: '#FB923C' }} />}
            </h2>
          )}
        </div>

        {/* Body paragraph */}
        <div className={`max-w-2xl mx-auto mb-6 transition-all duration-700 ${showBody ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-orange-200/100 leading-relaxed text-base sm:text-lg">
            This portfolio is not just my resume with better fonts, it's different. I'm walking you
            through the real situations I faced, the decisions I made under pressure, and the lessons
            that actually changed how I build - the kind that don't fit in bullet points.
          </p>
        </div>

        {/* Redirect note */}
        <div className={`mb-10 transition-all duration-500 delay-100 ${showBody ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-orange-200/65 text-sm font-medium">
            Just here for the bullet points?
            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer"
              className="ml-1 text-accent/60 hover:text-accent underline underline-offset-2 transition-colors">
              The résumé is here
            </a>
            {' '}or jump to the{' '}
            <button onClick={onViewFull}
              className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors bg-transparent border-none cursor-pointer">
              full portfolio
            </button>.
          </p>
        </div>

        {/* Thin divider */}
        <div className={`w-16 h-px mx-auto mb-10 transition-all duration-500 delay-200 ${showCtas ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)', transformOrigin: 'center' }} />

        {/* CTAs */}
        <div className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-600 ${showCtas ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a href="./resume.pdf" target="_blank" rel="noopener noreferrer"
            className="snav dark-ghost">
            <Download size={15} />
            View Résumé
          </a>

          <button onClick={onViewFull} className="snav dark-ghost">
            <LayoutGrid size={15} />
            Full Portfolio
          </button>

          <button onClick={onNext}
            className="snav primary text-lg"
            style={{ padding: '16px 40px', fontSize: '16px', gap: '12px',
                     background: 'linear-gradient(135deg, #F97316, #F59E0B)',
                     boxShadow: '0 8px 32px rgba(249,115,22,0.4), 0 2px 8px rgba(0,0,0,0.3)' }}>
            Show me the story
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Keyboard hint */}
        <div className={`mt-10 transition-all duration-500 delay-300 ${showCtas ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-orange-200/55 text-xs tracking-widest font-mono uppercase">
            or press → to begin
          </p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CHAPTER 01 — HERO
══════════════════════════════════════════════════════════════════════════════ */
function ChapterHero() {
  const roles = ['Software Engineer', 'AI Infrastructure Builder', 'Cloud Architect', 'Full-Stack Developer'];
  const [ri, setRi] = useState(0);
  const [txt, setTxt] = useState('');
  const [fwd, setFwd] = useState(true);

  const words = "Building production-grade AI systems and scalable cloud infrastructure. Passionate about LLMs, agentic pipelines, and making complex systems run fast for real users at real scale.".split(' ');
  const { visibleCount } = useWordReveal(words, 52, 700);

  useEffect(() => {
    const role = roles[ri];
    let t: ReturnType<typeof setTimeout>;
    if (fwd) {
      if (txt.length < role.length) t = setTimeout(() => setTxt(role.slice(0, txt.length + 1)), 52);
      else t = setTimeout(() => setFwd(false), 2200);
    } else {
      if (txt.length > 0) t = setTimeout(() => setTxt(txt.slice(0, -1)), 26);
      else { setRi(i => (i + 1) % roles.length); setFwd(true); }
    }
    return () => clearTimeout(t);
  }, [txt, fwd, ri]);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-start lg:justify-center overflow-x-hidden pt-2 pb-10 sm:pt-4 sm:pb-14 lg:py-0"
      style={{ background: 'linear-gradient(145deg, #FFF7ED 0%, #FEFCF8 45%, #FFFBEB 100%)' }}>

      <SectionTracer variant={1} />

      {/* Background blobs */}
      <div className="blob w-[700px] h-[700px] top-[-200px] right-[-150px] opacity-[0.22]"
        style={{ background: 'radial-gradient(circle, #F97316 0%, #FBBF24 40%, transparent 72%)' }} />
      <div className="blob w-[400px] h-[400px] bottom-[-100px] left-[-100px] opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #FB923C 0%, transparent 70%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-warm bg-dot-md opacity-60" />

      {/* Decorative ring */}
      <div className="absolute right-[8%] top-[15%] w-[380px] h-[380px] rounded-full opacity-[0.06]"
        style={{ border: '2px solid #F97316', animation: 'spin 25s linear infinite' }} />
      <div className="absolute right-[12%] top-[20%] w-[260px] h-[260px] rounded-full opacity-[0.09]"
        style={{ border: '1px solid #F59E0B' }} />

      <div className="story-bg-number light">{CHAPTERS[1].n}</div>

      <div className="section-container w-full py-5 sm:py-7 md:py-8 lg:py-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal delay={0.1}>
              <FunPhrase phrase={CHAPTERS[1].phrase} emoji={CHAPTERS[1].emoji} />
            </Reveal>

            {/* Name */}
            <Reveal delay={0.2}>
              <h1 className="font-archivo font-black leading-[0.97] mb-5 tracking-tight"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
                Jawahar Sai<br />
                <span className="gradient-text">Nathani</span>
              </h1>
            </Reveal>

            {/* Role typing */}
            <Reveal delay={0.38}>
              <p className="text-xl font-semibold text-text-secondary mb-5 h-8">
                {txt}<span className="cursor-blink" />
              </p>
            </Reveal>

            {/* Bio */}
            <div className="text-text-secondary leading-relaxed text-[18px] mb-8 max-w-xl"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.28em' }}>
              {words.map((word, i) => (
                <span key={i} className="word-span"
                  style={{ transitionDuration: '0.3s', transitionDelay: `${i * 0.018}s`,
                           ...(i < visibleCount ? { opacity: 1, transform: 'none' } : {}) }}>
                  {word}
                </span>
              ))}
            </div>

            {/* Stats */}
            <Reveal delay={0.62}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {personal.stats.map(s => (
                  <div key={s.label}
                    className="s-card p-4 text-center group hover:border-warm-300">
                    <div className="stat-value text-2xl mb-0.5">{s.value}</div>
                    <div className="text-text-muted text-[11px] font-medium leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.74}>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${personal.email}`} className="btn-primary">
                  <Mail size={15} /> Get In Touch
                </a>
                <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Download size={15} /> Resume
                </a>
                <a href={personal.github} target="_blank" rel="noopener noreferrer"
                  className="btn-ghost" aria-label="GitHub"><Github size={17} /></a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                  className="btn-ghost" aria-label="LinkedIn"><Linkedin size={17} /></a>
              </div>
            </Reveal>
          </div>

          {/* Photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <Reveal delay={0.28} from="left">
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-[2rem] scale-110 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)' }} />
                {/* Rings */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-warm-200 scale-105" />
                <div className="absolute inset-0 rounded-[2rem] border border-amber-100 scale-[1.12] opacity-60" />

                <div className="relative rounded-[2rem] overflow-hidden shadow-story"
                  style={{ width: 'clamp(220px, 22vw, 300px)', height: 'clamp(270px, 28vw, 380px)' }}>
                  <img src="./images/hero.png" alt="Jawahar Sai Nathani"
                    className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 h-24"
                    style={{ background: 'linear-gradient(to top, rgba(255,247,237,0.5), transparent)' }} />
                </div>

                {/* Floating chips */}
                <div className="absolute -bottom-4 -left-6 bg-white border border-warm-200 rounded-2xl
                                px-4 py-2.5 shadow-story animate-float">
                  <div className="stat-value text-2xl">4.0</div>
                  <div className="text-text-muted text-[13px] font-semibold mt-0.5">GPA · TAMU</div>
                </div>
                <div className="absolute -top-4 -right-6 rounded-2xl px-4 py-2.5 shadow-story"
                  style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                  <div className="font-archivo font-black text-white text-2xl leading-none">2+ Years</div>
                  <div className="text-orange-100 text-[13px] font-semibold mt-0.5">Startup Experience</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CHAPTER 02 — ABOUT
══════════════════════════════════════════════════════════════════════════════ */
function ChapterAbout() {
  const words = personal.bio[0].split(' ');
  const { visibleCount } = useWordReveal(words, 52, 700);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-start lg:justify-center overflow-x-hidden pt-2 pb-10 sm:pt-4 sm:pb-14 lg:py-0" style={{ background: '#FFFFFF' }}>
      <SectionTracer variant={2} />
      {/* Concentric decorative rings */}
      <div className="absolute right-0 top-[50%] -translate-y-1/2 pointer-events-none hidden lg:block overflow-hidden">
        {[500, 380, 260, 140].map((s, i) => (
          <div key={s}
            className="absolute rounded-full"
            style={{
              width: s, height: s,
              border: `1px solid rgba(249,115,22,${0.04 + i * 0.03})`,
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
            }} />
        ))}
        <div className="absolute rounded-full w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        flex items-center justify-center"
          style={{ background: 'rgba(249,115,22,0.07)' }}>
          <Flame size={24} className="text-accent" />
        </div>
      </div>

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid-warm bg-grid-md opacity-50" />
      <div className="story-bg-number light">{CHAPTERS[2].n}</div>

      <div className="section-container w-full py-5 sm:py-7 md:py-8 lg:py-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 sm:gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <FunPhrase phrase={CHAPTERS[2].phrase} emoji={CHAPTERS[2].emoji} />
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-archivo font-black leading-[0.95] mb-3 tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
                The engineer's<br /><span className="gradient-text">mind</span>
              </h2>
              <p className="text-text-muted text-lg mb-6 font-medium">
                Software Engineer · AI Infrastructure · Cloud Systems
              </p>
            </Reveal>

            {/* Animated bio */}
            <div className="text-text-secondary leading-relaxed text-[18px] mb-8 max-w-xl"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.28em' }}>
              {words.map((word, i) => (
                <span key={i} className="word-span"
                  style={{ transitionDuration: '0.3s', transitionDelay: `${i * 0.018}s`,
                           ...(i < visibleCount ? { opacity: 1, transform: 'none' } : {}) }}>
                  {word}
                </span>
              ))}
            </div>

            <Reveal delay={0.95}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[{ n: '20,000+', l: 'Users Served' }, { n: '95%', l: 'Latency Cut' }, { n: '150M+', l: 'Docs Migrated' }].map(s => (
                  <div key={s.l} className="s-card p-4 text-center">
                    <div className="stat-value text-2xl mb-0.5">{s.n}</div>
                    <div className="text-text-muted text-[13px] font-semibold">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — expertise */}
          <div className="lg:col-span-5 space-y-3">
            <Reveal delay={0.25}>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent mb-4">
                Core Expertise
              </p>
            </Reveal>
            {EXPERTISE.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.title} delay={0.35 + i * 0.09}>
                  <div className="s-card p-4">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #FFF7ED, #FED7AA)' }}>
                        <Icon size={15} className="text-accent" />
                      </div>
                      <span className="font-bold text-lg text-text-primary">{d.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {d.items.map(item => (
                        <span key={item} className="tag text-[13px] py-0.5">{item}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CHAPTER 03 — EXPERIENCE (dark)
══════════════════════════════════════════════════════════════════════════════ */
function ChapterExperience() {

  const stripStrong = (text: string) => text.replace("<strong>", '').replace("</strong>", '');

  const featuredStories = storyGroups
    .flatMap(group => group.stories.map(story => ({ ...story, role: group.role, company: group.company })))
    .slice(0, 2);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-start lg:justify-center overflow-x-hidden pt-2 pb-10 sm:pt-4 sm:pb-14 lg:py-0"
      style={{ background: 'linear-gradient(145deg, #110500 0%, #1C0A00 50%, #0F0400 100%)' }}>

      <SectionTracer variant={3} dark />

      {/* Glow blobs */}
      <div className="blob w-[600px] h-[600px] top-[-100px] right-[-100px] opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #F97316 0%, #EA580C 30%, transparent 70%)' }} />
      <div className="blob w-[300px] h-[300px] bottom-0 left-0 opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #FBBF24 0%, transparent 70%)' }} />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-dark bg-grid-md opacity-40" />
      <div className="story-bg-number dark">{CHAPTERS[3].n}</div>

      <div className="section-container w-full py-5 sm:py-7 md:py-8 lg:py-6 relative z-10">
        <Reveal delay={0.1}>
          <FunPhrase phrase={CHAPTERS[3].phrase} emoji={CHAPTERS[3].emoji} dark />
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="font-archivo font-black leading-[0.95] mb-2 tracking-tight text-white"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            My <span className="gradient-text-light">growth arc</span>
          </h2>
          <p className="text-orange-200/50 text-md mb-7 font-medium">
            The stories behind the judgment, not just the titles.
          </p>
        </Reveal>

        <div className="space-y-3.5">
          {featuredStories.map((story, i) => (
            <Reveal key={story.id} delay={0.3 + i * 0.12}>
              <div className="s-card-dark p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">{story.tag}</div>
                    <div className="font-archivo font-bold text-[22px] leading-tight text-white/90">{story.title}</div>
                    <div className="mt-1 font-semibold text-base" style={{ color: '#FB923C' }}>{story.role} · {story.company}</div>
                  </div>
                  <span className="shrink-0 rounded-full border border-orange-900/70 bg-orange-950/45 px-2.5 py-1 text-xs font-semibold text-orange-200/70">
                    Current
                  </span>
                </div>
                <ul className="space-y-1.5 mb-3">
                  {[story.situation, story.decision].map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-orange-100/60 text-[16px] leading-snug">
                      <Zap size={10} className="text-accent mt-1 shrink-0" />
                      {stripStrong(d)}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {story.pills.slice(0, 6).map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-[13px] font-medium
                                            bg-orange-900/50 text-orange-300/80 border border-orange-800/40">
                      {t}
                    </span>
                  ))}
                  {story.pills.length > 6 && (
                    <span className="px-2 py-0.5 rounded-md text-[13px] font-medium
                                    bg-orange-900/50 text-orange-300/80 border border-orange-800/40">
                      +{story.pills.length - 6}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {storyGroups.flatMap(group => group.stories).length > featuredStories.length && (
          <Reveal delay={0.75}>
            <p className="text-orange-200/100 text-md mt-4 text-center">
              +{storyGroups.flatMap(group => group.stories).length - featuredStories.length} more decision stories in Full Portfolio View
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CHAPTER 04 — EDUCATION
══════════════════════════════════════════════════════════════════════════════ */
function ChapterEducation() {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-start lg:justify-center overflow-x-hidden pt-2 pb-10 sm:pt-4 sm:pb-14 lg:py-0"
      style={{ background: 'linear-gradient(155deg, #FFFBEB 0%, #FFF7ED 50%, #FEFCF8 100%)' }}>

      <SectionTracer variant={4} />

      {/* Decorative arcs */}
      <div className="blob w-[500px] h-[500px] top-[-50px] left-[-100px] opacity-[0.18]"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #FCD34D 30%, transparent 70%)' }} />
      <div className="blob w-[350px] h-[350px] bottom-0 right-[-50px] opacity-[0.1]"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }} />

      <div className="absolute inset-0 bg-dot-warm bg-dot-lg opacity-50" />

      {/* Scattered graduation icons */}
      {[[15,20,0.05],[80,60,0.04],[70,15,0.06],[20,75,0.04]].map(([x,y,o], i) => (
        <div key={i} className="absolute pointer-events-none"
          style={{ left:`${x}%`, top:`${y}%`, opacity: o }}>
          <GraduationCap size={48} className="text-accent-warm" />
        </div>
      ))}

      <div className="story-bg-number light">{CHAPTERS[4].n}</div>

      <div className="section-container w-full py-5 sm:py-7 md:py-8 lg:py-6 relative z-10">
        <Reveal delay={0.1}>
          <FunPhrase phrase={CHAPTERS[4].phrase} emoji={CHAPTERS[4].emoji} />
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="font-archivo font-black leading-[0.95] mb-2 tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            The <span className="gradient-text">foundation</span>
          </h2>
          <p className="text-text-muted text-lg mb-8 font-medium">
            Two premier institutions. One relentless pursuit of excellence.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={0.32 + i * 0.14} from={i === 0 ? 'right' : 'left'}>
              <div className="s-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #FFF7ED, #FED7AA)' }}>
                    <GraduationCap size={22} className="text-accent" />
                  </div>
                  <span className="tag-accent text-sm font-bold">{edu.title}</span>
                </div>
                <h3 className="font-archivo font-extrabold text-xl text-text-primary mb-1">{edu.college}</h3>
                <div className="flex items-center gap-1 text-text-muted text-md mb-5">
                  <MapPin size={12} className="shrink-0" />{edu.location}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-muted rounded-xl p-3 text-center">
                    <div className="font-bold text-[16px] text-text-primary leading-snug">CSE</div>
                    <div className="text-text-muted text-[13px] mt-0.5 font-medium">Field</div>
                  </div>
                  <div className="bg-muted rounded-xl p-3 text-center">
                    <div className="font-bold text-[16px] text-text-primary">
                      {edu.start}-{edu.end.replace('Aug ', '')}
                    </div>
                    <div className="text-text-muted text-[13px] mt-0.5 font-medium">Years</div>
                  </div>
                  <div className="rounded-xl p-3 text-center"
                    style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                    <div className="font-bold text-[16px] text-white">{edu.score}</div>
                    <div className="text-orange-100 text-[13px] mt-0.5 font-medium">Score</div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {edu.courses.slice(0, 5).map(c => (
                    <span key={c} className="tag text-[13px] py-0.5">{c}</span>
                  ))}
                  <span className="tag text-[13px] py-0.5">+{edu.courses.length - 5}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CHAPTER 05 — PROJECTS
══════════════════════════════════════════════════════════════════════════════ */
function ChapterProjects() {
  const featured = projects.filter(p => p.featured).slice(0, 4);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-start lg:justify-center overflow-x-hidden pt-2 pb-10 sm:pt-4 sm:pb-14 lg:py-0"
      style={{ background: 'linear-gradient(145deg, #0A0500 0%, #0F0700 60%, #070300 100%)' }}>

      <SectionTracer variant={5} dark />

      {/* Ambient glow */}
      <div className="blob w-[500px] h-[500px] top-[-50px] right-[-80px] opacity-[0.15]"
        style={{ background: 'radial-gradient(circle, #F97316 0%, #F59E0B 35%, transparent 70%)' }} />
      <div className="blob w-[350px] h-[350px] bottom-0 left-[-60px] opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, #FB923C 0%, transparent 70%)' }} />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-dark bg-grid-md opacity-30" />
      <div className="story-bg-number dark">{CHAPTERS[5].n}</div>

      <div className="section-container w-full py-5 sm:py-7 md:py-8 lg:py-6 relative z-10">
        <Reveal delay={0.1}>
          <FunPhrase phrase={CHAPTERS[5].phrase} emoji={CHAPTERS[5].emoji} dark />
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="font-archivo font-black leading-[0.95] mb-2 tracking-tight text-white"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            Things I've<br /><span className="gradient-text-light">built</span>
          </h2>
          <p className="text-orange-200/100 text-lg mb-8 font-medium">
            {projects.length} projects shipped. Here are the highlights.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {featured.map((proj, i) => {
            const card = cardData.find(c => c.projectId === proj.id);
            if (!card) return null;
            return (
              <Reveal key={proj.id} delay={0.3 + i * 0.08} from="scale">
                <ProjectCardSVG
                  card={card}
                  title={proj.title}
                  bullets={proj.details}
                  tags={proj.tech}
                  links={{ github: proj.github, paper: proj.paper, web: proj.weblink }}
                />
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.85}>
          <p className="text-orange-200/100 text-md mt-5 text-center">
            +{projects.length - featured.length} more projects in Full Portfolio View
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CHAPTER 06 — AWARDS
══════════════════════════════════════════════════════════════════════════════ */
const ACHIEVEMENTS = [
  { icon: Trophy, text: 'Techathon Winner - 1st Place', sub: 'All-India GEP Interns Competition', color: '#F97316' },
  { icon: Star,   text: 'CATALYST Award',               sub: 'Exemplary Contribution · GEP Worldwide', color: '#F59E0B' },
  { icon: Star,   text: 'Spot Recognition Award',       sub: 'Excellent Commitment · GEP Worldwide', color: '#FB923C' },
  { icon: Trophy, text: 'GPA 4.0 / 4.0',                sub: 'Texas A&M University · Computer Science', color: '#EAB308' },
];

function ChapterAwards() {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-start lg:justify-center overflow-x-hidden pt-2 pb-10 sm:pt-4 sm:pb-14 lg:py-0"
      style={{ background: 'linear-gradient(155deg, #FFFBEB 0%, #FEF3C7 40%, #FFF7ED 100%)' }}>

      <SectionTracer variant={6} />

      {/* Ambient blobs */}
      <div className="blob w-[600px] h-[600px] top-[-120px] right-[-120px] opacity-[0.25]"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #FCD34D 40%, transparent 72%)' }} />
      <div className="blob w-[400px] h-[400px] bottom-[-80px] left-[-80px] opacity-[0.15]"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }} />

      {/* Scattered star icons */}
      {[[8,10],[88,20],[5,85],[92,75],[50,5]].map(([x,y], i) => (
        <div key={i} className="absolute pointer-events-none"
          style={{ left:`${x}%`, top:`${y}%`, opacity: 0.07 }}>
          <Star size={32} className="text-accent-warm" fill="currentColor" />
        </div>
      ))}

      <div className="absolute inset-0 bg-dot-warm bg-dot-md opacity-50" />
      <div className="story-bg-number light">{CHAPTERS[6].n}</div>

      <div className="section-container w-full py-5 sm:py-7 md:py-8 lg:py-6 relative z-10">
        <Reveal delay={0.1}>
          <FunPhrase phrase={CHAPTERS[6].phrase} emoji={CHAPTERS[6].emoji} />
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="font-archivo font-black leading-[0.95] mb-2 tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            The trophy<br /><span className="gradient-text">shelf</span>
          </h2>
          <p className="text-text-muted text-lg mb-8 font-medium">
            Recognition earned through engineering excellence.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.text} delay={0.3 + i * 0.09} from="scale">
                <div className="s-card p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: `${a.color}18` }}>
                    <Icon size={22} style={{ color: a.color }} fill={i % 2 === 0 ? 'currentColor' : 'none'} />
                  </div>
                  <div>
                    <div className="font-archivo font-extrabold text-lg text-text-primary mb-0.5">{a.text}</div>
                    <div className="text-black text-md">{a.sub}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.75}>
          <p className="text-text-muted text-lg mb-3 font-bold tracking-widest uppercase">
            Certificate Gallery
          </p>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {certificates.map((cert, i) => (
              <div key={cert.name}
                className="shrink-0 w-36 h-24 rounded-2xl overflow-hidden border-2 border-warm-200
                           shadow-card hover:shadow-story transition-all duration-300 hover:-translate-y-1
                           opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.8 + i * 0.07}s`, animationFillMode: 'forwards' }}>
                <img src={cert.url} alt={cert.name}
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CHAPTER 07 — CONNECT (dark)
══════════════════════════════════════════════════════════════════════════════ */
function ChapterConnect({ onViewFull }: { onViewFull: () => void }) {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-start lg:justify-center overflow-x-hidden pt-2 pb-10 sm:pt-4 sm:pb-14 lg:py-0"
      style={{ background: 'linear-gradient(145deg, #0F0400 0%, #1C0A00 50%, #0C0300 100%)' }}>

      <SectionTracer variant={7} dark />

      {/* Central orange glow */}
      <div className="blob w-[800px] h-[800px] opacity-[0.18]"
        style={{
          background: 'radial-gradient(circle, #F97316 0%, #EA580C 20%, transparent 60%)',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        }} />
      <div className="blob w-[400px] h-[400px] top-[-50px] right-[10%] opacity-[0.1]"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }} />

      <div className="absolute inset-0 bg-grid-dark bg-grid-md opacity-30" />

      {/* Large quote decoration */}
      <div className="absolute left-4 top-1/4 font-archivo font-black text-[200px] leading-none
                      text-orange-900/20 pointer-events-none select-none hidden lg:block">"</div>

      <div className="story-bg-number dark">{CHAPTERS[7].n}</div>

      <div className="section-container w-full py-5 sm:py-8 md:py-10 lg:py-7 relative z-10">
        <Reveal delay={0.1}>
          <FunPhrase phrase={CHAPTERS[7].phrase} emoji={CHAPTERS[7].emoji} dark />
        </Reveal>

        <Reveal delay={0.22}>
          <h2 className="font-archivo font-black leading-[0.95] mb-5 tracking-tight text-white"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
            Let's build<br />
            <span className="gradient-text-light">something great</span>
          </h2>
        </Reveal>

        <Reveal delay={0.38}>
          <p className="text-orange-200/100 leading-relaxed mb-8 max-w-lg text-[18px]">
            Open to full-time roles in software engineering, AI infrastructure, and cloud systems.
            Fast response, high standards, zero corporate speak.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-white font-bold rounded-xl
                         transition-all duration-200 hover:-translate-y-1 hover:shadow-glow
                         focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
                         focus:ring-offset-dark-bg"
              style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
              <Mail size={16} /> {personal.email}
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              className="snav dark-ghost">
              <Github size={15} /> GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
              className="snav dark-ghost">
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.65}>
          <div className="border-t border-warm-900/60 pt-8">
            <p className="text-orange-200/60 text-sm mb-5 font-medium">
              Seen enough? The full picture is one click away.
            </p>
            <button onClick={onViewFull}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-text-primary font-black
                         text-base rounded-2xl transition-all duration-200 hover:-translate-y-1.5
                         hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white
                         focus:ring-offset-2 focus:ring-offset-dark-bg group">
              <LayoutGrid size={18} className="text-accent" />
              View Full Portfolio
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   STORY SHELL
══════════════════════════════════════════════════════════════════════════════ */
export default function StoryShell({ onViewFull }: { onViewFull: () => void }) {
  const [idx, setIdx] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState<boolean[]>(Array(CHAPTERS.length).fill(false));
  const bodyRef = useRef<HTMLDivElement>(null);
  const onViewFullRef = useRef(onViewFull);
  onViewFullRef.current = onViewFull;

  const goTo = useCallback((next: number) => {
    if (next === idx || exiting || next < 0 || next >= CHAPTERS.length) return;
    setExiting(true);
    setTimeout(() => {
      setDone(p => { const n = [...p]; n[idx] = true; return n; });
      setIdx(next);
      setExiting(false);
      bodyRef.current?.scrollTo(0, 0);
    }, 300);
  }, [idx, exiting]);

  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);
  const finish = () => { setExiting(true); setTimeout(onViewFull, 300); };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prev();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [idx, exiting]);

  /* Last slide: switch to full portfolio after 7s if user doesn’t click */
  useEffect(() => {
    if (idx !== CHAPTERS.length - 1) return;
    const id = window.setTimeout(() => onViewFullRef.current(), 7000);
    return () => window.clearTimeout(id);
  }, [idx]);

  const progress = CHAPTERS.length === 1 ? 100 : (idx / (CHAPTERS.length - 1)) * 100;
  const isLastChapter = idx === CHAPTERS.length - 1;

  const chapter = (() => {
    switch (idx) {
      case 0: return <ChapterIntro onNext={next} onViewFull={onViewFull} />;
      case 1: return <ChapterHero />;
      case 2: return <ChapterAbout />;
      case 3: return <ChapterExperience />;
      case 4: return <ChapterEducation />;
      case 5: return <ChapterProjects />;
      case 6: return <ChapterAwards />;
      case 7: return <ChapterConnect onViewFull={onViewFull} />;
      default: return null;
    }
  })();

  const isDark = idx === 0 || idx === 3 || idx === 7;

  return (
    <div className="story-wrapper">
      {/* Progress bar */}
      <div className="story-progress-bar" style={{ width: `${progress}%` }} />

      {/* Top nav bar */}
      <div className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b shrink-0 transition-colors duration-500
                       ${isDark ? 'bg-dark-surface/90 border-dark-border' : 'bg-white/90 border-warm-100'} backdrop-blur-md`}>
        {/* Dots + label */}
        <div className="flex items-center gap-2">
          {CHAPTERS.map((ch, i) => (
            <button key={ch.id}
              onClick={() => goTo(i)}
              title={ch.label}
              aria-label={`Chapter ${i + 1}: ${ch.label}`}
              className={`ch-dot ${i === idx ? 'active' : ''} ${done[i] && i !== idx ? 'done' : ''}`}
            />
          ))}
          <span className={`ml-2 text-xs font-bold hidden sm:block ${isDark ? 'text-orange-200/50' : 'text-text-muted'}`}>
            {String(idx + 1).padStart(2, '0')} / {CHAPTERS.length}
            <span className={`ml-1.5 font-medium ${isDark ? 'text-orange-200/70' : 'text-text-secondary'}`}>
              - {CHAPTERS[idx].label}
            </span>
          </span>
        </div>

        {/* View Full btn */}
        <button onClick={finish}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold
                      transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
                      ${isDark
                        ? 'border border-dark-border text-orange-200/60 hover:border-accent hover:text-accent bg-transparent'
                        : 'border border-warm-200 text-text-secondary hover:border-accent hover:text-accent bg-white/60 hover:bg-accent-light'}`}>
          <LayoutGrid size={13} /> View Full Portfolio
        </button>
      </div>

      {/* Chapter body */}
      <div ref={bodyRef}
        key={idx}
        className={`story-body-scroll flex-1 min-h-0 flex flex-col overflow-x-hidden overflow-y-auto ${exiting ? 'story-chapter-exit' : 'story-chapter-enter'}`}>
        {chapter}
      </div>

      {/* Bottom nav bar — hidden on intro slide (has its own CTAs) */}
      {idx !== 0 && (
      <div className={`flex items-center justify-between px-4 sm:px-8 py-4 border-t shrink-0 transition-colors duration-500
                       ${isDark ? 'bg-dark-surface/90 border-dark-border' : 'bg-white/95 border-warm-100'} backdrop-blur-md`}>
        {/* Prev */}
        <button onClick={prev} disabled={idx === 0}
          style={{ visibility: idx === 0 ? 'hidden' : 'visible' }}
          className={`snav ${isDark ? 'dark-ghost' : 'secondary'}`}
          aria-label="Previous chapter">
          <ArrowLeft size={16} /> Back
        </button>

        {/* Center label */}
        <div className={`hidden sm:flex items-center gap-2 text-xs font-bold
                         ${isDark ? 'text-orange-200/40' : 'text-text-muted'}`}>
          <span className="text-accent">{CHAPTERS[idx].n}</span>
          <ChevronRight size={11} />
          <span className={isDark ? 'text-orange-200/60' : 'text-text-secondary'}>{CHAPTERS[idx].label}</span>
        </div>

        {/* Next or Finish */}
        <div className="flex items-center gap-2">
          {!isLastChapter && (
            <button onClick={finish}
              className={`snav ${isDark ? 'dark-ghost' : 'ghost'} text-xs hidden sm:inline-flex`}>
              Skip all
            </button>
          )}
          {!isLastChapter ? (
            <button onClick={next} className="snav primary" aria-label="Next chapter">
              Next <ArrowRight size={17} />
            </button>
          ) : (
            <button onClick={onViewFull} className="snav primary">
              <LayoutGrid size={15} /> Full Portfolio
            </button>
          )}
        </div>
      </div>
      )}

      {/* Keyboard hint — above bottom nav, high contrast */}
      <div
        className={`fixed z-40 hidden lg:flex items-center gap-2.5 pointer-events-none select-none
                    bottom-[5.75rem] right-5 sm:right-8 rounded-xl px-3.5 py-2.5 shadow-lg backdrop-blur-md
                    ${isDark
                      ? 'bg-orange-950/55 border border-orange-500/25 text-orange-100/90'
                      : 'bg-white/90 border border-warm-300/70 text-text-primary/90 shadow-story'}`}>
        {[['←', 'ArrowLeft'], ['→', 'ArrowRight']].map(([key]) => (
          <kbd
            key={key}
            className={`inline-flex min-w-[2.125rem] justify-center rounded-md px-2.5 py-1.5 text-xs font-bold font-mono tabular-nums
                        ${isDark
                          ? 'bg-black/35 text-orange-100 border border-orange-400/35 shadow-inner'
                          : 'bg-warm-100 text-text-primary border border-warm-400/60 shadow-sm'}`}>
            {key}
          </kbd>
        ))}
        <span className={`text-xs font-semibold tracking-wide uppercase pl-0.5
                         ${isDark ? 'text-orange-200/85' : 'text-text-secondary'}`}>
          Navigate
        </span>
      </div>
    </div>
  );
}
