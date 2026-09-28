import Tag from './Tag.jsx';

const linkClass = 'font-mono text-xs uppercase tracking-[0.16em] text-accent hover:underline';

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

// Mientras un proyecto no tenga `video` (ver public/videos/README.md), se
// muestra un placeholder con las iniciales, en el mismo formato que el de
// la foto del Hero.
function ProjectMedia({ name, video, videoWebm, poster }) {
  if (video) {
    return (
      <video
        className="aspect-video w-full bg-panel object-cover"
        poster={poster || undefined}
        muted
        loop
        playsInline
        preload="metadata"
        controls
      >
        {videoWebm && <source src={videoWebm} type="video/webm" />}
        <source src={video} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
    );
  }

  return (
    <div className="flex aspect-video w-full items-center justify-center border-b border-white/10 bg-panel">
      <span className="font-mono text-5xl font-medium tracking-widest text-muted" aria-hidden="true">
        {initials(name)}
      </span>
    </div>
  );
}

export default function ProjectCard({ name, summary, stack, features, video, videoWebm, poster, repo, demo }) {
  return (
    <article className="flex h-full flex-col border border-white/10 bg-panel/60 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50">
      <ProjectMedia name={name} video={video} videoWebm={videoWebm} poster={poster} />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold text-white">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>

        <ul className="mt-4 space-y-2 text-sm text-ink/85">
          {features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="font-mono text-accent" aria-hidden="true">
                &gt;
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        {(repo || demo) && (
          <div className="mt-6 flex gap-6 border-t border-white/10 pt-4">
            {repo && (
              <a href={repo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Código
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
