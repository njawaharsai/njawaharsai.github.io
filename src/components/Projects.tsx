import { useState } from 'react';
import { projects, type ProjectTag } from '../data/portfolio';
import { cardData } from '../data/projectCards';
import ProjectCardSVG from './ProjectCardSVG';
import { useInView } from '../hooks/useInView';
import SectionTracer from './SectionTracer';

const FILTERS: { label: string; value: ProjectTag }[] = [
  { label: 'All',      value: 'all'      },
  { label: 'ML / AI',  value: 'ml-ai'    },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Systems',  value: 'systems'  },
  { label: 'iOS',      value: 'ios'      },
];

export default function Projects() {
  const { ref, isInView } = useInView();
  const [filter, setFilter] = useState<ProjectTag>('all');

  const visible = filter === 'all' ? projects : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="projects-dark-section py-24 lg:py-32"
      ref={ref as React.RefObject<HTMLElement>}>
      <SectionTracer variant={5} dark />
      <div className="section-container relative z-10">

        {/* Header */}
        <div className={`mb-12 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#FB923C' }}>
            Side Quests
          </p>
          <h2 className="font-archivo font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FEF3C7' }}>
            Things I've{' '}
            <span style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>built</span>
          </h2>
          <p className="text-orange-200/100 text-[15px] leading-relaxed max-w-xl">
            {projects.length} projects across AI/ML, full-stack, systems, and iOS — from real users to research papers.
          </p>
        </div>

        {/* Filter pills */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-500 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {FILTERS.map(f => (
            <button key={f.value} onClick={() => setFilter(f.value)}
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase
                         transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
              style={{
                background: filter === f.value ? 'linear-gradient(135deg,#F97316,#F59E0B)' : 'rgba(249,115,22,0.07)',
                color:       filter === f.value ? 'white' : 'rgba(253,186,116,0.7)',
                border:      filter === f.value ? '1.5px solid transparent' : '1.5px solid rgba(249,115,22,0.2)',
              }}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 transition-all duration-500 delay-150 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {visible.map((proj, i) => {
            const card = cardData.find(c => c.projectId === proj.id);
            if (!card) return null;
            return (
              <div key={proj.id}
                className="opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.05 + (i % 8) * 0.055}s`, animationFillMode: 'forwards' }}>
                <ProjectCardSVG
                  card={card}
                  title={proj.title}
                  bullets={proj.details}
                  tags={proj.tech}
                  links={{ github: proj.github, paper: proj.paper, web: proj.weblink }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
