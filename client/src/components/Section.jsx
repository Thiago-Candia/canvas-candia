export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// {eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
