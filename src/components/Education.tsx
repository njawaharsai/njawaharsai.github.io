import { useState } from 'react';
import { GraduationCap, ChevronDown, MapPin } from 'lucide-react';
import { education } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import SectionTracer from './SectionTracer';

export default function Education() {
  const { ref, isInView } = useInView();
  const [openCourses, setOpenCourses] = useState<string | null>(null);

  return (
    <section
      id="education"
      className="py-24 lg:py-32 section-warm-bg"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <SectionTracer variant={4} />
      <div className="section-container relative z-10">
        <div className={`mb-16 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="section-label">Academics</p>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle text-md">
            Strong theoretical foundation from premier institutions, applied through years of engineering practice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((edu, idx) => {
            const isOpen = openCourses === edu.id;
            return (
              <div
                key={edu.id}
                className={`card p-0 overflow-hidden transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* Card header */}
                <div className="p-6 lg:p-7">
                  {/* Degree badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFF7ED, #FED7AA)' }}>
                      <GraduationCap size={20} className="text-accent" />
                    </div>
                    <span className="tag-accent text-[13px] font-semibold">{edu.title}</span>
                  </div>

                  {/* College */}
                  <h3 className="font-archivo font-bold text-xl text-text-primary mb-1 leading-snug">
                    {edu.college}
                  </h3>

                  <div className="flex items-center gap-1 text-text-muted text-md mb-4">
                    <MapPin size={13} className="flex-shrink-0" />
                    {edu.location}
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <div className="font-archivo font-bold text-sm text-text-primary">{edu.branch.split('&')[0].trim()}</div>
                      <div className="text-text-muted text-[13px] mt-0.5">Field</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <div className="font-archivo font-bold text-sm text-text-primary">
                        {edu.start}-{edu.end.replace('Aug ', '')}
                      </div>
                      <div className="text-text-muted text-[13px] mt-0.5">Duration</div>
                    </div>
                    <div className="rounded-lg p-3 text-center" style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                      <div className="font-archivo font-bold text-sm text-white">{edu.score}</div>
                      <div className="text-orange-100 text-[13px] mt-0.5">GPA / Score</div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Coursework toggle */}
                <button
                  onClick={() => setOpenCourses(isOpen ? null : edu.id)}
                  className="w-full flex items-center justify-between px-6 lg:px-7 py-4
                    text-sm font-medium text-text-secondary hover:text-text-primary
                    hover:bg-muted/50 transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span>View Coursework ({edu.courses.length} courses)</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Coursework list */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-80' : 'max-h-0'}`}
                >
                  <div className="px-6 lg:px-7 pb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map(course => (
                        <span key={course} className="tag text-[13px] py-0.5">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
