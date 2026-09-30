import Section from './Section.jsx';
import Tag from './Tag.jsx';
import { SKILLS } from '../data/content.js';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tecnologías">
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILLS.map(({ group, items }) => (
          <div key={group} className="border border-white/10 bg-panel/60 p-6 backdrop-blur">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
