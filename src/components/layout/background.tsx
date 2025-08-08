"use client";

import { useEffect, useRef } from "react";

export const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    // --- Resize handler ---
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // --- Theme color fetcher ---
    const getDotColor = () => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue("--dot")
        .trim();
    };

    let dotColor = getDotColor();

    // --- Theme change observer ---
    const observer = new MutationObserver(() => {
      dotColor = getDotColor();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"], // listens for .dark toggle
    });

    // --- Animation settings ---
    const gridSize = 50; // px between dots
    const dotRadius = 1;
    const dotSizing = 0.5;        // How much bigger the dots get
    const waveSpeed = 0.001;     // How fast the overall animation runs
    const waveFrequencyX = 0.08; // How dense the waves are on the X-axis
    const waveFrequencyY = 0.05; // How dense the waves are on the Y-axis

    // --- Animation loop ---
    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `hsl(${dotColor} / 0.4)`;

      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;
      const timeOffset = time * waveSpeed;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Calculate the x and y position of the dot
          const x = col * gridSize;
          const y = row * gridSize;

          const waveX = Math.sin(x * waveFrequencyX + timeOffset);
          const waveY = Math.cos(y * waveFrequencyY + timeOffset);

          // Combine the two waves and normalize the result (-1 to 1)
          const combinedWave = (waveX + waveY) * 0.5;

          // Use the combined wave to calculate the final dot size
          const scale = 1 + combinedWave * dotSizing;

          ctx.beginPath();
          ctx.arc(
            x,
            y,
            dotRadius * scale,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
};
