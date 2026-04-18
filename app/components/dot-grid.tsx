import { useEffect, useRef } from "react";

const BASE_SPACING = 30;
const BASE_DOT_RADIUS_REST = 1;
const BASE_DOT_RADIUS_PEAK = 1.8;
const OPACITY_REST = 0.18;
const OPACITY_PEAK = 0.45;

const WAVE_WIDTH = 0.28;
const WAVE_DURATION = 6000;
// Random delay range between waves (ms)
const WAVE_INTERVAL_MIN = 15000;
const WAVE_INTERVAL_MAX = 20000;

/**
 * Simple pseudo-noise for the wavefront distortion.
 * Uses layered sines at different frequencies to give an organic edge.
 */
function wavefrontNoise(v: number): number {
  return (
    Math.sin(v * 1.0) * 0.45 +
    Math.sin(v * 2.4 + 1.3) * 0.3 +
    Math.sin(v * 4.2 + 4.7) * 0.1
  );
}

function randomInterval(): number {
  return (
    WAVE_INTERVAL_MIN +
    Math.floor(Math.random() * (WAVE_INTERVAL_MAX - WAVE_INTERVAL_MIN + 1000))
  );
}

/**
 * Compute a smooth bump: 1 at center, 0 outside [-1, 1].
 * Uses smoothstep for clean falloff.
 */
function bump(x: number): number {
  const clamped = Math.max(-1, Math.min(1, x));
  const t = 1 - clamped * clamped;
  return t * t;
}

/** Smoothstep ease-in-out: slow start, fast middle, slow end. */
function easeInOut(t: number): number {
  return t * t * (3 - 2 * t);
}

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    let diagSum = 0;
    let spacing = BASE_SPACING;
    let dotRadiusRest = BASE_DOT_RADIUS_REST;
    let dotRadiusPeak = BASE_DOT_RADIUS_PEAK;
    let animationId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    let waveActive = false;
    let waveStartTime = 0;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      diagSum = width + height;

      // Scale dots proportionally to viewport on large screens
      const scale = Math.max(1, Math.min(width, height) / 900);
      spacing = BASE_SPACING * scale;
      dotRadiusRest = BASE_DOT_RADIUS_REST * scale;
      dotRadiusPeak = BASE_DOT_RADIUS_PEAK * scale;

      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function getThemeColor(): string {
      const isDark = document.documentElement.classList.contains("dark");
      return isDark ? "255, 255, 255" : "0, 0, 0";
    }

    function drawDots(timestamp: number) {
      ctx!.clearRect(0, 0, width, height);

      const color = getThemeColor();

      let waveProgress = -1;
      if (waveActive) {
        const linearProgress = (timestamp - waveStartTime) / WAVE_DURATION;
        if (linearProgress > 1) {
          waveActive = false;
          waveProgress = -1;
          scheduleNextWave();
        } else {
          waveProgress = easeInOut(linearProgress);
        }
      }

      // Extend beyond 0..1 so the wave fully enters and exits the viewport
      const waveFrontNorm = waveActive
        ? -WAVE_WIDTH + waveProgress * (1 + 2 * WAVE_WIDTH)
        : -1;

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const offsetX = ((width - (cols - 1) * spacing) / 2);
      const offsetY = ((height - (rows - 1) * spacing) / 2);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = offsetX + col * spacing;
          const y = offsetY + row * spacing;

          let radius = dotRadiusRest;
          let opacity = OPACITY_REST;

          if (waveActive && waveProgress >= 0) {
            const dotDiagNorm = (x + y) / diagSum;

            // Perpendicular position drives the curvy-edge distortion
            const perpendicular = (x - y) / diagSum;
            const noise = wavefrontNoise(perpendicular * 8) * WAVE_WIDTH * 0.5;

            const dist = (dotDiagNorm - waveFrontNorm + noise) / WAVE_WIDTH;
            const intensity = bump(dist);

            radius = dotRadiusRest + (dotRadiusPeak - dotRadiusRest) * intensity;
            opacity = OPACITY_REST + (OPACITY_PEAK - OPACITY_REST) * intensity;
          }

          ctx!.beginPath();
          ctx!.arc(x, y, radius, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${color}, ${opacity})`;
          ctx!.fill();
        }
      }

      animationId = requestAnimationFrame(drawDots);
    }

    function startWave() {
      if (prefersReducedMotion.matches) return;
      waveActive = true;
      waveStartTime = performance.now();
    }

    function scheduleNextWave() {
      if (prefersReducedMotion.matches) return;
      timeoutId = setTimeout(startWave, randomInterval());
    }

    function handleMotionChange() {
      if (prefersReducedMotion.matches) {
        waveActive = false;
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
      } else {
        scheduleNextWave();
      }
    }

    resize();
    window.addEventListener("resize", resize);
    prefersReducedMotion.addEventListener("change", handleMotionChange);

    animationId = requestAnimationFrame(drawDots);

    if (!prefersReducedMotion.matches) {
      timeoutId = setTimeout(startWave, 500);
    }

    return () => {
      window.removeEventListener("resize", resize);
      prefersReducedMotion.removeEventListener("change", handleMotionChange);
      if (animationId !== null) cancelAnimationFrame(animationId);
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
