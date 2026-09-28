import { useState } from 'react';
import useActiveSection from '../hooks/useActiveSection.js';
import { NAV, PROFILE } from '../data/content.js';

const SECTION_IDS = NAV.map((item) => item.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  const linkClass = (id) =>
    `font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
      active === id ? 'text-accent' : 'text-muted hover:text-ink'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6 lg:grid lg:grid-cols-[auto_1fr_auto]">
        <a href="#inicio" className="whitespace-nowrap font-sans text-sm font-extrabold uppercase tracking-[0.22em] text-white">
          {PROFILE.name}
        </a>

        <nav className="hidden items-center justify-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={`${linkClass(id)} whitespace-nowrap`}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-2 border-t border-white/10 bg-bg/95 px-6 py-4 lg:hidden" aria-label="Principal">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={`${linkClass(id)} block py-2`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
