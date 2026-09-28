import { PROFILE } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-accent/10 py-8 text-center font-mono text-xs tracking-[0.18em] text-muted">
      © {new Date().getFullYear()} {PROFILE.name} — {PROFILE.location}
    </footer>
  );
}
