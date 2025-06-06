"use client";

import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

// --- Configuration ---
const GRID_SIZE = 50; // The size of each grid cell in pixels
const X_DELAY_FACTOR = 0.15; // Stagger factor for the X-axis
const Y_DELAY_FACTOR = 0.1; // Stagger factor for the Y-axis

// A simple utility to create a range of numbers
const range = (n: number) => Array.from({ length: n }, (_, i) => i);

export const SubtleWaveGrid = () => {
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });
  const [key, setKey] = useState(0); // To handle resizing properly

  useEffect(() => {
    const calculateGrid = () => {
      const cols = Math.ceil(window.innerWidth / GRID_SIZE);
      const rows = Math.ceil(window.innerHeight / GRID_SIZE);
      setGrid({ cols, rows });
      setKey((prevKey) => prevKey + 1);
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  return (
    <div
      key={key}
      className="dots-grid-container pointer-events-none fixed inset-0 z-[-1000]"
    >
      <div
        className="grid h-[100vh] w-[100vw]"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
          gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
        }}
      >
        {range(grid.rows).map((row) =>
          range(grid.cols).map((col) => (
            <div
              key={`${row}-${col}`}
              className="dot-wrapper flex items-center justify-center"
            >
              <div
                className="dot h-[1px] w-[1px] rounded-full"
                style={{
                  animationDelay: `${(col * X_DELAY_FACTOR + row * Y_DELAY_FACTOR) * -1}s`,
                }}
              />
            </div>
          )),
        )}
      </div>
    </div>
  );
};
