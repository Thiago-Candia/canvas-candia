import { useEffect, useRef } from 'react';

const COLOR_PRIMARY = '#44aaff';
const COLOR_BRIGHT = '#88ccff';
const COLOR_LINE = 'rgba(30, 90, 200, ';

const STAR_COUNT = 130;
const NODE_COUNT = 60;

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let W = 0;
    let H = 0;
    let stars = [];
    let nodes = [];
    let frameId;
    const mouse = { x: -999, y: -999 };

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 0.8 + 0.2;
        this.a = Math.random();
        this.da = (Math.random() - 0.5) * 0.006;
        this.vx = (Math.random() - 0.5) * 0.06;
        this.vy = (Math.random() - 0.5) * 0.06;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.a += this.da;
        if (this.a < 0 || this.a > 1) this.da *= -1;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 190, 255, ${this.a * 0.55})`;
        ctx.fill();
      }
    }

    class Node {
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.r = Math.random() * 2 + 1.5;
        this.pulse = Math.random() * Math.PI * 2;
        this.color = Math.random() < 0.18 ? COLOR_BRIGHT : COLOR_PRIMARY;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (dist < 110) {
          const force = 0.18 * (1 - dist / 110);
          this.vx -= (dx / dist) * force;
          this.vy -= (dy / dist) * force;
        }

        this.vx *= 0.978;
        this.vy *= 0.978;

        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.03;

        // Rebote en bordes
        if (this.x < 0 || this.x > W) {
          this.vx *= -1;
          this.x = Math.max(0, Math.min(W, this.x));
        }
        if (this.y < 0 || this.y > H) {
          this.vy *= -1;
          this.y = Math.max(0, Math.min(H, this.y));
        }
      }

      draw() {
        const pr = this.r + Math.sin(this.pulse) * 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pr, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function initScene() {
      stars = Array.from({ length: STAR_COUNT }, () => new Star());
      nodes = Array.from({ length: NODE_COUNT }, () => new Node());
    }

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initScene();
    }

    function drawConnections() {
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const dx = nodes[a].x - nodes[b].x;
          const dy = nodes[a].y - nodes[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.38;
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.strokeStyle = COLOR_LINE + alpha + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    }

    // Línea de scanline (efecto CRT sutil)
    function drawScanline() {
      const y = (Date.now() / 18) % H;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.strokeStyle = 'rgba(68, 170, 255, 0.035)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    function animate() {
      ctx.fillStyle = 'rgba(5, 5, 16, 0.18)';
      ctx.fillRect(0, 0, W, H);

      drawScanline();
      stars.forEach((s) => { s.update(); s.draw(); });
      drawConnections();
      nodes.forEach((n) => { n.update(); n.draw(); });

      frameId = requestAnimationFrame(animate);
    }

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const clearPointer = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    const onTouchMove = (e) => {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    };

    // Empujar nodos cercanos
    const onClick = (e) => {
      const mx = e.clientX;
      const my = e.clientY;
      nodes.forEach((n) => {
        const dx = n.x - mx;
        const dy = n.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 160) {
          const force = (1 - dist / 160) * 5;
          n.vx += (dx / dist) * force;
          n.vy += (dy / dist) * force;
        }
      });
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', clearPointer);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', clearPointer);
    window.addEventListener('click', onClick);

    resize();
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', clearPointer);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', clearPointer);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return <canvas id="canvas" ref={canvasRef} />;
}
