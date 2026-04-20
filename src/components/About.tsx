import { Cpu, Cloud, Code2, BrainCircuit } from 'lucide-react';
import { personal } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import SectionTracer from './SectionTracer';

const expertise = [
  {
    icon: BrainCircuit,
    title: 'AI & LLMs',
    items: ['RAG Pipelines', 'ReAct Agents', 'LLM Fine-tuning', 'RAGAS Evaluation', 'OpenAI / Gemini / Claude'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    items: ['AWS ECS Fargate', 'Docker', 'Kubernetes', 'Azure', 'CI/CD (GitHub Actions)'],
  },
  {
    icon: Code2,
    title: 'Backend & APIs',
    items: ['FastAPI', 'ASP.NET', 'Node.js', 'PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    icon: Cpu,
    title: 'Frontend & Systems',
    items: ['React', 'TypeScript', 'Next.js', 'Angular', 'Swift / iOS'],
  },
];

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 lg:py-32 section-warm-bg" ref={ref as React.RefObject<HTMLElement>}>
      <SectionTracer variant={2} />
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ── Left: Bio ── */}
          <div className="lg:col-span-7">
            <p className={`section-label transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              About Me
            </p>
            <h2 className={`section-title mb-8 transition-all duration-500 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Building systems that<br />
              <span className="gradient-text">scale and perform</span>
            </h2>

            <div className={`space-y-5 transition-all duration-500 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {personal.bio.map((para, i) => (
                <p key={i} className="text-text-secondary leading-relaxed text-[18px]">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights strip */}
            <div className={`mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 transition-all duration-500 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {[
                { n: '20,000+', l: 'Users Served' },
                { n: '95%', l: 'Latency Reduced' },
                { n: '29%', l: 'User Time Saved' },
                { n: '150M+', l: 'Docs Migrated' },
                { n: '5', l: 'Engineers Led' },
                { n: '4.0', l: 'GPA at TAMU' },
              ].map(stat => (
                <div key={stat.l} className="bg-surface border border-border rounded-xl p-4 text-center shadow-card">
                  <div className="font-archivo font-bold text-2xl text-text-primary">{stat.n}</div>
                  <div className="text-text-muted text-md mt-0.5">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Expertise ── */}
          <div className={`lg:col-span-5 transition-all duration-500 delay-150 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="font-archivo font-semibold text-2xl text-text-primary mb-6">Core Expertise</h3>
            <div className="space-y-4">
              {expertise.map((domain, idx) => {
                const Icon = domain.icon;
                return (
                  <div
                    key={domain.title}
                    className="bg-surface border border-border rounded-xl p-5 shadow-card
                      hover:shadow-card-hover hover:border-warm-300 transition-all duration-300"
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #FFF7ED, #FED7AA)' }}>
                        <Icon size={16} className="text-accent" />
                      </div>
                      <h4 className="font-semibold text-lg text-text-primary">{domain.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.items.map(item => (
                        <span key={item} className="tag text-[13px] py-0.5">{item}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
