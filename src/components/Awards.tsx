import { useState } from 'react';
import { X, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { certificates } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import SectionTracer from './SectionTracer';

export default function Awards() {
  const { ref, isInView } = useInView();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => (i === null ? null : (i - 1 + certificates.length) % certificates.length));
  const next = () => setLightbox(i => (i === null ? null : (i + 1) % certificates.length));

  return (
    <section
      id="awards"
      className="py-24 lg:py-32 section-alt-bg relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <SectionTracer variant={6} />
      <div className="section-container relative z-10">
        {/* Header */}
        <div className={`mb-16 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Awards & Certificates</h2>
          <p className="section-subtitle">
            Recognitions received for engineering excellence and competitive performance.
          </p>
        </div>

        {/* Achievement chips */}
        <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-500 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {[
            { icon: '🏆', text: 'Techathon Winner - 1st Place (GEP, All-India Interns)' },
            { icon: '⭐', text: 'CATALYST Award - Exemplary Contribution (GEP)' },
            { icon: '🎖️', text: 'Spot Recognition - Excellent Commitment (GEP)' },
            { icon: '🎓', text: 'GPA 4.0/4.0 - Texas A&M University' },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-border
                rounded-full shadow-card text-sm text-text-secondary font-medium"
            >
              <span role="img" aria-label={item.text}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* Certificate grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, idx) => (
            <div
              key={cert.name}
              className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 80 + 150}ms` }}
            >
              <button
                onClick={() => setLightbox(idx)}
                className="group block w-full text-left card p-0 overflow-hidden focus:outline-none
                  focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label={`View certificate: ${cert.name}`}
              >
                {/* Image */}
                <div className="overflow-hidden bg-muted aspect-[4/3]">
                  <img
                    src={cert.url}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Label */}
                <div className="p-4">
                  <div className="flex items-start gap-2">
                    <Award size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-text-secondary text-xs leading-snug font-medium">{cert.name}</p>
                  </div>
                  <p className="text-text-muted text-[11px] mt-2">Click to view</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate lightbox"
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white
              flex items-center justify-center hover:bg-white/20 transition-colors
              focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
              bg-white/10 text-white flex items-center justify-center hover:bg-white/20
              transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-3xl w-full mx-12"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={certificates[lightbox].url}
              alt={certificates[lightbox].name}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <p className="text-white/70 text-sm text-center mt-4">
              {certificates[lightbox].name}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
              bg-white/10 text-white flex items-center justify-center hover:bg-white/20
              transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
