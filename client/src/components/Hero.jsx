import { GitHubIcon, LinkedInIcon } from './Icons.jsx';
import { LINKS, PROFILE } from '../data/content.js';

// Botones secundarios: neutros a propósito. El único acento del Hero es el
// CTA primario (ver DESIGN.md #4 y #6 — un elemento dominante por sección).
const secondaryButton =
  'inline-flex min-h-11 items-center gap-2 border border-white/15 bg-panel/70 px-6 font-mono text-xs uppercase tracking-[0.16em] text-ink transition hover:border-white/30 hover:text-white';

function ProfilePhoto() {
  return (
    <div className="avatar-ring mx-auto h-[17.5rem] w-[17.5rem] max-w-full rounded-full border-2 border-accent p-1.5">
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-panel">
        {PROFILE.image ? (
          <img src={PROFILE.image} alt={`Foto de ${PROFILE.name}`} className="h-full w-full rounded-full object-cover" />
        ) : (
          <span className="font-mono text-7xl font-medium tracking-widest text-muted" aria-label="Espacio para foto de perfil">
            TC
          </span>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="flex min-h-screen items-center pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Disponible para oportunidades
          </span>

          <h1 className="mt-4 text-5xl font-extrabold uppercase leading-none tracking-[0.02em] text-white sm:text-7xl">
            {PROFILE.name}
          </h1>

          <p className="mt-6 font-mono text-sm leading-relaxed tracking-wide text-ink/80">{PROFILE.headline}</p>
          <p className="mt-4 max-w-xl text-base text-muted">{PROFILE.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="inline-flex min-h-11 items-center bg-accent px-6 font-mono text-xs font-bold uppercase tracking-[0.16em] text-bg transition hover:-translate-y-0.5"
            >
              Ver proyectos
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
              <GitHubIcon /> GitHub
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>

        <ProfilePhoto />
      </div>
    </section>
  );
}
