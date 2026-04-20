import { useEffect, useRef } from 'react';

interface Point { x: number; y: number; }

interface SectionTracerProps {
  variant?: number;   // 0-7, one per section type
  dark?: boolean;     // adjust opacity for dark vs light backgrounds
  count?: number;     // simultaneous tracers (default 2)
}

class Tracer {
  pts: Point[] = [];
  prog = 0;
  fade = 1;
  phase: 'draw' | 'hold' | 'fade' = 'draw';
  hold = 0;
  speed: number;

  constructor(
    private W: number,
    private H: number,
    private variant: number,
    private index: number,
    private isDark: boolean,
    init = false,
  ) {
    this.speed = this.baseSpeed() + Math.random() * 0.00015;
    this.reset(init);
  }

  private baseSpeed(): number {
    return [0.00045, 0.00035, 0.00028, 0.00038, 0.00033, 0.00052, 0.00028, 0.00042][this.variant % 8];
  }

  reset(init = false) {
    this.pts = this.waypoints();
    this.prog = init ? Math.random() * 0.7 : 0;
    this.fade = 1;
    this.phase = 'draw';
    this.hold = 0;
  }

  private waypoints(): Point[] {
    const { W, H } = this;
    const i = this.index;
    switch (this.variant % 8) {

      case 0: { // Intro (dark): two diagonals crossing
        const up = i % 2 === 0;
        const pts: Point[] = [{ x: -30, y: up ? H * 0.1 + Math.random() * H * 0.3 : H * 0.6 + Math.random() * H * 0.3 }];
        let [x, y] = [-30, pts[0].y];
        for (let s = 0; s < 5; s++) {
          x += W * 0.21 + Math.random() * W * 0.07;
          y += (up ? 1 : -1) * (H * 0.11 + Math.random() * H * 0.09);
          pts.push({ x: Math.min(W + 40, x), y: Math.max(-40, Math.min(H + 40, y)) });
        }
        return pts;
      }

      case 1: { // Hero (warm-light): S-curve sweeping right-to-left
        const yStart = (i === 0 ? 0.15 : 0.6) * H + (Math.random() - 0.5) * H * 0.08;
        const pts: Point[] = [{ x: W + 30, y: yStart }];
        let [x, y] = [W + 30, yStart];
        for (let s = 0; s < 5; s++) {
          x -= W * 0.19 + Math.random() * W * 0.06;
          y += (s % 2 === 0 ? 1 : -1) * (H * 0.09 + Math.random() * H * 0.06) * (i === 0 ? 1 : -1);
          pts.push({ x: Math.max(-40, x), y: Math.max(-40, Math.min(H + 40, y)) });
        }
        return pts;
      }

      case 2: { // About (white): gentle left-to-right arcs at different heights
        const yBase = ((i + 1) / 3) * H * 0.85;
        const pts: Point[] = [{ x: -30, y: yBase + (Math.random() - 0.5) * H * 0.08 }];
        let [x, y] = [-30, pts[0].y];
        for (let s = 0; s < 5; s++) {
          x += W * 0.21 + Math.random() * W * 0.05;
          y += (Math.random() - 0.5) * H * 0.2;
          pts.push({ x: Math.min(W + 40, x), y: Math.max(-40, Math.min(H + 40, y)) });
        }
        return pts;
      }

      case 3: { // Experience (any): diagonal random sweep
        const fromSide = Math.random() < 0.5;
        const sx = fromSide ? -30 : Math.random() * W;
        const sy = fromSide ? Math.random() * H : -30;
        const pts: Point[] = [{ x: sx, y: sy }];
        let [x, y] = [sx, sy];
        for (let s = 0; s < 5; s++) {
          x += W * 0.12 + Math.random() * W * 0.18;
          y += (Math.random() - 0.45) * H * 0.3;
          pts.push({ x: Math.min(W + 40, x), y: Math.max(-40, Math.min(H + 40, y)) });
        }
        return pts;
      }

      case 4: { // Education (warm-light): ascending from bottom
        const xStart = (i * 0.5 + 0.08) * W + Math.random() * W * 0.12;
        const pts: Point[] = [{ x: xStart, y: H + 30 }];
        let [x, y] = [xStart, H + 30];
        for (let s = 0; s < 5; s++) {
          x += (Math.random() - 0.25) * W * 0.28;
          y -= H * 0.17 + Math.random() * H * 0.08;
          pts.push({ x: Math.max(-40, Math.min(W + 40, x)), y: Math.max(-40, y) });
        }
        return pts;
      }

      case 5: { // Projects (dark): angular zigzag
        const left = i % 2 === 0;
        const sx = left ? -30 : W + 30;
        const sy = (i * 0.38 + 0.12) * H + Math.random() * H * 0.12;
        const pts: Point[] = [{ x: sx, y: sy }];
        let [x, y] = [sx, sy];
        const dx = left ? 1 : -1;
        for (let s = 0; s < 6; s++) {
          x += dx * (W * 0.17 + Math.random() * W * 0.07);
          y += (s % 2 === 0 ? 1 : -1) * (H * 0.21 + Math.random() * H * 0.09);
          pts.push({ x: Math.max(-40, Math.min(W + 40, x)), y: Math.max(-40, Math.min(H + 40, y)) });
        }
        return pts;
      }

      case 6: { // Awards (warm-amber): wide sinusoidal sweep
        const yBase = (i === 0 ? 0.28 : 0.68) * H;
        const pts: Point[] = [{ x: -30, y: yBase }];
        let [x, y] = [-30, yBase];
        const amp = H * 0.2;
        for (let s = 0; s < 5; s++) {
          x += W * 0.22 + Math.random() * W * 0.04;
          y = yBase + Math.sin((s + 1) * 0.95) * amp * (i === 0 ? 1 : -1) + (Math.random() - 0.5) * H * 0.04;
          pts.push({ x: Math.min(W + 40, x), y: Math.max(-40, Math.min(H + 40, y)) });
        }
        return pts;
      }

      case 7: { // Connect (dark): paths converging inward from edges
        const angle = (i / 2) * Math.PI + Math.random() * 0.5;
        const sx = W * 0.5 + Math.cos(angle) * W * 0.72;
        const sy = H * 0.5 + Math.sin(angle) * H * 0.72;
        const pts: Point[] = [{ x: sx, y: sy }];
        let [x, y] = [sx, sy];
        for (let s = 0; s < 5; s++) {
          const t = (s + 1) / 5;
          x = sx * (1 - t * 0.82) + W * 0.55 * t * 0.82 + (Math.random() - 0.5) * W * 0.07;
          y = sy * (1 - t * 0.82) + H * 0.5 * t * 0.82 + (Math.random() - 0.5) * H * 0.07;
          pts.push({ x: Math.max(-40, Math.min(W + 40, x)), y: Math.max(-40, Math.min(H + 40, y)) });
        }
        return pts;
      }

      default:
        return [{ x: -30, y: H / 2 }, { x: W + 30, y: H / 2 }];
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.phase === 'draw') {
      this.prog = Math.min(1, this.prog + this.speed);
      if (this.prog >= 1) this.phase = 'hold';
    } else if (this.phase === 'hold') {
      if (++this.hold > 150) this.phase = 'fade';
    } else {
      this.fade -= 0.006;
      if (this.fade <= 0) { this.reset(); return; }
    }

    const total = this.pts.length - 1;
    const cur = this.prog * total;
    const seg = Math.floor(cur);
    const segP = cur - seg;
    const lastIdx = Math.min(seg, total);

    let tx = this.pts[lastIdx].x;
    let ty = this.pts[lastIdx].y;
    if (seg < total) {
      const s = this.pts[seg], e = this.pts[seg + 1];
      tx = s.x + (e.x - s.x) * segP;
      ty = s.y + (e.y - s.y) * segP;
    }

    // Dashed trail
    ctx.beginPath();
    ctx.moveTo(this.pts[0].x, this.pts[0].y);
    for (let ii = 0; ii < Math.min(seg, total); ii++) ctx.lineTo(this.pts[ii + 1].x, this.pts[ii + 1].y);
    if (seg < total) ctx.lineTo(tx, ty);

    const lineAlpha = this.isDark ? this.fade * 0.22 : this.fade * 0.30;
    ctx.strokeStyle = `rgba(249,115,22,${lineAlpha})`;
    ctx.lineWidth = this.isDark ? 0.75 : 0.85;
    ctx.setLineDash([4, 8]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Leading dot
    const dotAlpha = this.isDark ? this.fade * 0.58 : this.fade * 0.75;
    ctx.beginPath();
    ctx.arc(tx, ty, 2.2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(249,115,22,${dotAlpha})`;
    ctx.fill();
  }
}

export default function SectionTracer({ variant = 0, dark = false, count = 2 }: SectionTracerProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, rafId = 0, active = false;
    let tracers: Tracer[] = [];
    const c = canvas;
    const cx = ctx;

    function resize() {
      const parent = c.parentElement;
      const rect = parent?.getBoundingClientRect();
      W = c.width  = rect?.width  ?? window.innerWidth;
      H = c.height = rect?.height ?? window.innerHeight;
      tracers = Array.from({ length: count }, (_, i) => new Tracer(W, H, variant, i, dark, true));
    }

    function loop() {
      cx.clearRect(0, 0, W, H);
      tracers.forEach(t => t.draw(cx));
      rafId = requestAnimationFrame(loop);
    }

    function start() { if (!active) { active = true; loop(); } }
    function stop()  { active = false; cancelAnimationFrame(rafId); }

    resize();
    const ro = new ResizeObserver(resize);
    if (c.parentElement) ro.observe(c.parentElement);

    const io = new IntersectionObserver(
      entries => entries.forEach(e => (e.isIntersecting ? start : stop)()),
      { threshold: 0.01 },
    );
    io.observe(canvas);

    return () => { stop(); ro.disconnect(); io.disconnect(); };
  }, [variant, dark, count]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
