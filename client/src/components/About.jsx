import Section from './Section.jsx';
import { ABOUT } from '../data/content.js';

const panel = 'border border-accent/15 bg-panel/60 p-6 backdrop-blur';

export default function About() {
  return (
    <Section id="sobre-mi" eyebrow="Sobre mí" title="Quién soy">
      <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
        <p className={`${panel} leading-relaxed text-ink/85`}>{ABOUT.text}</p>

        <div className={`${panel} space-y-6`}>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Formación</h3>
            <ul className="mt-3 space-y-3">
              {ABOUT.education.map((e) => (
                <li key={e.title}>
                  <p className="font-semibold text-white">{e.title}</p>
                  <p className="text-sm text-muted">
                    {e.place} · {e.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Idiomas</h3>
            <ul className="mt-3 space-y-1 text-sm">
              {ABOUT.languages.map((l) => (
                <li key={l.name}>
                  <span className="text-white">{l.name}</span> <span className="text-muted">— {l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
