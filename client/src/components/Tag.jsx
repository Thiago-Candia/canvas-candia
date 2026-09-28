import TechIcon from './TechIcon.jsx';

export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 border border-white/15 bg-panel/40 px-4 py-2 font-mono text-xs text-ink/85 transition hover:border-white/30">
      <TechIcon name={children} />
      {children}
    </span>
  );
}
