import Section from './Section.jsx';
import { EXPERIENCE } from '../data/content.js';

export default function Experience() {
  return (
    <Section id="experiencia" eyebrow="Experiencia" title="Trayectoria">
      <ol className="relative ml-2 border-l border-accent/25">
        {EXPERIENCE.map(({ role, place, description }) => (
          <li key={role} className="relative pb-10 pl-8 last:pb-0">
            <span
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]"
              aria-hidden="true"
            />
            <h3 className="text-lg font-bold text-white">{role}</h3>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{place}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
