export default function Section({ id, eyebrow, title, children, wide = false }) {
  // `wide`: el contenido rompe el max-w-6xl (ver DESIGN.md #8). Renderiza
  // como hijo directo de <section> — que ya ocupa el 100% del body — en vez
  // de usar `100vw`/`calc()`: esas unidades no siguen a `%`/`px` bajo zoom
  // del navegador y rompían el layout (ver DESIGN.md #9).
  return (
    <section id={id} className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// {eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{title}</h2>
        {!wide && <div className="mt-8">{children}</div>}
      </div>
      {wide && <div className="mt-8">{children}</div>}
    </section>
  );
}
