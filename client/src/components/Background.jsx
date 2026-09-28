// Fondo estático: gradiente + textura de ruido + grilla, mismo formato que cv-js.
export default function Background() {
  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-layer__gradient" />
      <div className="bg-layer__noise" />
      <div className="bg-layer__grid" />
    </div>
  );
}
