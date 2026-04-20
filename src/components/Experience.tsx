import { useState, type ReactNode } from 'react';
import { ExternalLink, ChevronDown, Award, Plus } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { storyGroups } from '../data/stories';
import { useInView } from '../hooks/useInView';
import SectionTracer from './SectionTracer';

const typeBadgeStyle: Record<string, string> = {
  'Full-time': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Part-time': 'bg-amber-50 text-amber-700 border-amber-100',
  'Research': 'bg-purple-50 text-purple-700 border-purple-100',
  'Internship': 'bg-sky-50 text-sky-700 border-sky-100',
};

export default function Experience() {
  const { ref, isInView } = useInView();
  const [activeTab, setActiveTab] = useState<'narratives' | 'roadmap'>('narratives');
  const [openId, setOpenId] = useState<string | null>('encando-founding');
  const [openStoryId, setOpenStoryId] = useState<string | null>(storyGroups[0]?.stories[0]?.id ?? null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id));
  const toggleStory = (id: string) => setOpenStoryId(prev => (prev === id ? null : id));
  const renderStrongText = (text: string): ReactNode[] =>
    text
      .split(/(<strong>.*?<\/strong>)/g)
      .filter(Boolean)
      .map((part, idx) => {
        const match = part.match(/^<strong>(.*?)<\/strong>$/);
        if (match) {
          return (
            <strong key={`strong-${idx}`} className="font-semibold text-text-primary">
              {match[1]}
            </strong>
          );
        }
        return <span key={`text-${idx}`}>{part}</span>;
      });

  return (
    <section
      id="experience"
      className="portfolio-decor-section py-24 lg:py-32 section-alt-bg relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <SectionTracer variant={3} />
      <div className="section-container relative z-10">
        {/* Header */}
        <div className={`mb-16 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="section-label">Career</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle text-md">
            Explore my growth in two lenses: decision-making narratives and execution roadmap.
          </p>
        </div>

        <div className="mb-8">
          <div className="inline-flex rounded-2xl border border-border bg-white/70 p-1 shadow-card">
            <button
              onClick={() => setActiveTab('narratives')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === 'narratives' ? 'bg-accent text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Impact Narratives
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === 'roadmap' ? 'bg-accent text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Career Roadmap
            </button>
          </div>
        </div>

        {activeTab === 'narratives' ? (
          <div className="space-y-8">
            {storyGroups.map((group, groupIdx) => (
              <div
                key={`${group.company}-${group.role}`}
                className={`rounded-2xl border border-border bg-white/80 p-6 shadow-card transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${groupIdx * 80}ms` }}
              >
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                  <div>
                    <p className="font-archivo text-lg font-bold text-text-primary">{group.role}</p>
                    <p className="text-md text-text-muted">{group.company} · {group.duration}</p>
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                    group.isCurrent
                      ? 'border-orange-200 bg-orange-50 text-orange-600'
                      : 'border-stone-200 bg-stone-50 text-stone-600'
                  }`}>
                    {group.isCurrent ? 'Current' : 'Previous'}
                  </span>
                </div>

                <div className="space-y-3">
                  {group.stories.map(story => {
                    const isStoryOpen = openStoryId === story.id;
                    return (
                      <div
                        key={story.id}
                        className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                          isStoryOpen ? 'border-warm-200 bg-orange-50/25 shadow-card-hover' : 'border-border bg-white hover:border-warm-200'
                        }`}
                      >
                        <button
                          className="w-full cursor-pointer p-5 text-left"
                          onClick={() => toggleStory(story.id)}
                          aria-expanded={isStoryOpen}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0 flex-1">
                              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{story.tag}</p>
                              <p className="font-archivo text-lg font-semibold leading-tight text-text-primary">{story.title}</p>
                              {story.subtitle && <p className="mt-1 text-sm italic text-text-muted">{story.subtitle}</p>}
                            </div>
                            <div className={`mt-0.5 rounded-full border p-1.5 transition-transform duration-300 ${
                              isStoryOpen ? 'rotate-45 border-accent bg-accent text-white' : 'border-border text-text-muted'
                            }`}>
                              <Plus size={14} />
                            </div>
                          </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-400 ${isStoryOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                          <div className="border-t border-border px-5 pb-5 pt-4">
                            <div className="grid gap-3 md:grid-cols-2">
                              {[
                                { label: 'Situation', value: story.situation },
                                { label: 'Decision', value: story.decision },
                                { label: 'Outcome', value: story.outcome },
                                { label: 'Lesson', value: story.lesson },
                              ].map(item => (
                                <div key={item.label} className="rounded-lg border border-border bg-white p-3.5">
                                  <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-accent">{item.label}</p>
                                  <p className="text-md leading-relaxed text-text-secondary">{renderStrongText(item.value)}</p>
                                </div>
                              ))}
                            </div>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {story.pills.map(pill => (
                                <span key={pill} className="tag text-[13px] py-0.5">{pill}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative pl-8 lg:pl-10">
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-6">
              {experiences.map((exp, idx) => {
                const isOpen = openId === exp.id;
                return (
                  <div
                    key={exp.id}
                    className={`relative transition-all duration-500 ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <div
                      className={`absolute -left-8 lg:-left-10 top-6 h-[10px] w-[10px] rounded-full border-2 border-white transition-colors duration-300 ${
                        isOpen ? 'bg-accent shadow-accent' : 'bg-zinc-300'
                      }`}
                    />
                    <div
                      className={`overflow-hidden rounded-2xl border bg-surface transition-all duration-300 ${
                        isOpen ? 'border-warm-200 shadow-card-hover' : 'border-border shadow-card hover:border-warm-100 hover:shadow-card-hover'
                      }`}
                    >
                      <button
                        className="w-full cursor-pointer rounded-2xl p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                        onClick={() => toggle(exp.id)}
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <div className="mb-1.5 flex flex-wrap items-center gap-2">
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="inline-flex items-center gap-1 font-archivo text-xl font-bold text-text-primary transition-colors hover:text-accent"
                              >
                                {exp.company}
                                <ExternalLink size={12} className="opacity-40" />
                              </a>
                              <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[12px] font-semibold ${typeBadgeStyle[exp.type]}`}>
                                {exp.type}
                              </span>
                            </div>
                            <div className="mb-1 text-[18px] font-medium text-accent">{exp.role}</div>
                            <div className="text-sm text-black">{exp.duration}</div>
                          </div>
                          <ChevronDown size={18} className={`mt-1 shrink-0 text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {exp.tech.slice(0, 6).map(t => (
                            <span key={t} className="tag py-0.5 text-[13px]">{t}</span>
                          ))}
                          {exp.tech.length > 6 && (
                            <span className="tag py-0.5 text-[13px] text-text-muted">+{exp.tech.length - 6}</span>
                          )}
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        <div className="border-t border-border px-6 pb-6 pt-5">
                          {exp.tech.length > 6 && (
                            <div className="mb-5 flex flex-wrap gap-1.5">
                              {exp.tech.map(t => (
                                <span key={t} className="tag-accent py-0.5 text-[13px]">{t}</span>
                              ))}
                            </div>
                          )}
                          <ul className="space-y-3">
                            {exp.description.map((point, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                <span className="text-md leading-relaxed text-text-secondary">{point}</span>
                              </li>
                            ))}
                          </ul>
                          {exp.certificates && exp.certificates.length > 0 && (
                            <div className="mt-5 border-t border-border pt-5">
                              <p className="mb-3 text-md font-semibold uppercase tracking-wider text-text-muted">Awards & Certificates</p>
                              <div className="flex flex-wrap gap-2">
                                {exp.certificates.map(cert => (
                                  <button
                                    key={cert.name}
                                    onClick={() => setLightboxSrc(cert.url)}
                                    className="inline-flex items-center gap-1.5 rounded-lg border border-amber-100 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700 transition-colors hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                  >
                                    <Award size={12} />
                                    {cert.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Certificate Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightboxSrc}
              alt="Certificate"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white
                text-text-primary flex items-center justify-center shadow-lg
                hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Close preview"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
