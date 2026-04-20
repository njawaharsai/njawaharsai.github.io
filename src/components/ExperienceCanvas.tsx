import { useEffect, useRef } from 'react';

// Colors matching our warm orange palette
const CL = (a: number) => `rgba(194,140,78,${a})`;   // warm golden
const CO = (a: number) => `rgba(249,115,22,${a})`;   // accent orange
const CW = (a: number) => `rgba(245,215,175,${a})`;  // cream diagonal

interface Point { x: number; y: number; }

class TopoIsland {
  cx: number; cy: number; maxR: number; rings: number; isAccent: boolean;
  t: number; speed: number; rot = 0; rs: number;
  N = 9;
  pf: number[]; pp: number[];

  constructor(cx: number, cy: number, maxR: number, rings: number, isAccent = false) {
    this.cx = cx; this.cy = cy; this.maxR = maxR; this.rings = rings; this.isAccent = isAccent;
    this.t = Math.random() * Math.PI * 2;
    this.speed = 0.00022 + Math.random() * 0.00012;
    this.rs = (Math.random() - 0.5) * 0.0002;
    this.pf = Array.from({ length: this.N }, () => 0.62 + Math.random() * 0.72);
    this.pp = Array.from({ length: this.N }, () => Math.random() * Math.PI * 2);
  }

  pts(frac: number): Point[] {
    const r = this.maxR * frac;
    return Array.from({ length: this.N }, (_, i) => {
      const angle = (i / this.N) * Math.PI * 2 + this.rot;
      const n1 = Math.sin(this.t + this.pp[i]) * 0.13;
      const n2 = Math.cos(this.t * 0.68 + this.pp[i] * 1.4) * 0.08;
      const d = r * this.pf[i] * (1 + n1 + n2);
      return { x: this.cx + Math.cos(angle) * d, y: this.cy + Math.sin(angle) * d * 0.6 };
    });
  }

  drawPath(ctx: CanvasRenderingContext2D, pts: Point[]) {
    const n = pts.length;
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      if (i === 0) ctx.moveTo(p1.x, p1.y);
      const T = 0.38;
      ctx.bezierCurveTo(
        p1.x + (p2.x - p0.x) * T, p1.y + (p2.y - p0.y) * T,
        p2.x - (p3.x - p1.x) * T, p2.y - (p3.y - p1.y) * T,
        p2.x, p2.y,
      );
    }
    ctx.closePath();
  }

  update() { this.t += this.speed; this.rot += this.rs; }

  draw(ctx: CanvasRenderingContext2D) {
    for (let r = 0; r < this.rings; r++) {
      const f = (r + 1) / this.rings;
      const base = 0.09 * (1 - f * 0.5);
      const isO = this.isAccent && r === Math.floor(this.rings * 0.38);
      this.drawPath(ctx, this.pts(f));
      if (isO) { ctx.strokeStyle = CO(base * 1.5); ctx.lineWidth = 0.85; }
      else      { ctx.strokeStyle = CL(base);       ctx.lineWidth = 0.5;  }
      ctx.stroke();
    }
  }
}

class PathTracer {
  pts: Point[] = [];
  prog = 0; fade = 1; speed = 0; phase: 'draw'|'hold'|'fade' = 'draw'; hold = 0;

  constructor(private W: number, private H: number) { this.reset(true); }

  reset(init = false) {
    const side = Math.random() < 0.5;
    const sx = side ? -30 : Math.random() * this.W;
    const sy = side ? Math.random() * this.H : -30;
    this.pts = [{ x: sx, y: sy }];
    let x = sx, y = sy;
    for (let i = 0; i < 5; i++) {
      x += this.W * 0.1 + Math.random() * this.W * 0.2;
      y += (Math.random() - 0.45) * this.H * 0.3;
      this.pts.push({ x: Math.min(this.W + 40, x), y: Math.max(-40, Math.min(this.H + 40, y)) });
    }
    this.prog = init ? Math.random() : 0;
    this.fade = 1; this.speed = 0.0003 + Math.random() * 0.0003;
    this.phase = 'draw'; this.hold = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.phase === 'draw') {
      this.prog = Math.min(1, this.prog + this.speed);
      if (this.prog >= 1) this.phase = 'hold';
    } else if (this.phase === 'hold') {
      this.hold++;
      if (this.hold > 160) this.phase = 'fade';
    } else {
      this.fade -= 0.005;
      if (this.fade <= 0) { this.reset(); return; }
    }
    const total = this.pts.length - 1;
    const cur = this.prog * total;
    const seg = Math.floor(cur);
    const segP = cur - seg;

    ctx.beginPath();
    ctx.moveTo(this.pts[0].x, this.pts[0].y);
    for (let i = 0; i < Math.min(seg, total); i++) ctx.lineTo(this.pts[i + 1].x, this.pts[i + 1].y);
    if (seg < total) {
      const s = this.pts[seg], e = this.pts[seg + 1];
      ctx.lineTo(s.x + (e.x - s.x) * segP, s.y + (e.y - s.y) * segP);
    }
    ctx.strokeStyle = CO(this.fade * 0.22);
    ctx.lineWidth = 0.7;
    ctx.setLineDash([4, 8]);
    ctx.stroke();
    ctx.setLineDash([]);

    let tx = this.pts[Math.min(seg, total)].x;
    let ty = this.pts[Math.min(seg, total)].y;
    if (seg < total) {
      const s = this.pts[seg], e = this.pts[seg + 1];
      tx = s.x + (e.x - s.x) * segP; ty = s.y + (e.y - s.y) * segP;
    }
    ctx.beginPath(); ctx.arc(tx, ty, 2, 0, Math.PI * 2);
    ctx.fillStyle = CO(this.fade * 0.5); ctx.fill();
  }
}

export default function ExperienceCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const canvasEl = canvas;
    const drawCtx = ctx;

    let W = 0, H = 0, frame = 0, rafId = 0;
    let islands: TopoIsland[] = [];
    let tracers: PathTracer[] = [];

    const markers = [
      { rx: 0.82, ry: 0.08 }, { rx: 0.05, ry: 0.65 }, { rx: 0.48, ry: 0.02 },
      { rx: 0.92, ry: 0.5  }, { rx: 0.18, ry: 0.45 }, { rx: 0.65, ry: 0.88 },
    ];

    function resize() {
      const rect = canvasEl.parentElement?.getBoundingClientRect();
      W = canvasEl.width  = rect?.width  ?? window.innerWidth;
      H = canvasEl.height = rect?.height ?? window.innerHeight;
      islands = [
        new TopoIsland(W * 0.80, H * 0.18, Math.min(W, H) * 0.28, 10, true),
        new TopoIsland(W * 0.14, H * 0.78, Math.min(W, H) * 0.22, 8,  false),
        new TopoIsland(W * 0.55, H * 0.60, Math.min(W, H) * 0.16, 7,  true),
        new TopoIsland(W * 0.08, H * 0.20, Math.min(W, H) * 0.12, 6,  false),
        new TopoIsland(W * 0.88, H * 0.72, Math.min(W, H) * 0.10, 5,  false),
      ];
      tracers = [new PathTracer(W, H), new PathTracer(W, H)];
    }

    function drawGrid() {
      const sp = 52;
      drawCtx.lineWidth = 0.3; drawCtx.strokeStyle = CL(0.045);
      for (let y = 0; y < H; y += sp) { drawCtx.beginPath(); drawCtx.moveTo(0, y); drawCtx.lineTo(W, y); drawCtx.stroke(); }
      for (let x = 0; x < W; x += sp) { drawCtx.beginPath(); drawCtx.moveTo(x, 0); drawCtx.lineTo(x, H); drawCtx.stroke(); }
      drawCtx.fillStyle = CL(0.12);
      for (let x = 0; x < W; x += sp * 3) {
        for (let y = 0; y < H; y += sp * 3) {
          drawCtx.beginPath(); drawCtx.arc(x, y, 1, 0, Math.PI * 2); drawCtx.fill();
        }
      }
    }

    function drawDiagonals() {
      drawCtx.lineWidth = 0.35; drawCtx.strokeStyle = CW(0.035);
      for (let x = -H; x < W + H; x += 120) {
        drawCtx.beginPath(); drawCtx.moveTo(x, 0); drawCtx.lineTo(x + H, H); drawCtx.stroke();
      }
      drawCtx.strokeStyle = CO(0.02); drawCtx.lineWidth = 0.5;
      drawCtx.beginPath(); drawCtx.moveTo(W * 0.6, -20); drawCtx.lineTo(W + 20, H * 0.45); drawCtx.stroke();
      drawCtx.beginPath(); drawCtx.moveTo(-20, H * 0.35); drawCtx.lineTo(W * 0.5, H + 20); drawCtx.stroke();
    }

    function drawMarkers(t: number) {
      markers.forEach((m, i) => {
        const x = m.rx * W, y = m.ry * H;
        const pulse = (Math.sin(t * 0.0008 + i * 1.1) + 1) * 0.5;
        const s = 7 + pulse * 3, a = 0.05 + pulse * 0.08;
        drawCtx.strokeStyle = CO(a); drawCtx.lineWidth = 0.6;
        drawCtx.beginPath(); drawCtx.moveTo(x - s, y); drawCtx.lineTo(x + s, y); drawCtx.stroke();
        drawCtx.beginPath(); drawCtx.moveTo(x, y - s); drawCtx.lineTo(x, y + s); drawCtx.stroke();
        const sq = 5; drawCtx.strokeStyle = CO(a * 0.4); drawCtx.lineWidth = 0.4;
        drawCtx.strokeRect(x - sq, y - sq, sq * 2, sq * 2);
      });
    }

    function loop() {
      drawCtx.clearRect(0, 0, W, H);
      drawGrid();
      drawDiagonals();
      islands.forEach(il => { il.update(); il.draw(drawCtx); });
      tracers.forEach(tr => tr.draw(drawCtx));
      drawMarkers(frame);
      frame++;
      rafId = requestAnimationFrame(loop);
    }

    resize();
    const ro = new ResizeObserver(resize);
    if (canvasEl.parentElement) ro.observe(canvasEl.parentElement);
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
