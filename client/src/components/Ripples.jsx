import { useEffect, useState } from 'react';

const RIPPLE_DURATION = 750;

export default function Ripples() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    let nextId = 0;
    const timers = new Set();

    const onClick = (e) => {
      const id = nextId++;
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      const t = setTimeout(() => {
        timers.delete(t);
        setRipples((r) => r.filter((rp) => rp.id !== id));
      }, RIPPLE_DURATION);
      timers.add(t);
    };

    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('click', onClick);
      timers.forEach(clearTimeout);
    };
  }, []);

  return ripples.map(({ id, x, y }) => (
    <div key={id} className="ripple" style={{ left: x, top: y }} />
  ));
}
