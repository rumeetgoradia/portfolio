"use client";

import React, { useState } from "react";
import { cn } from "~/lib/utils";
import { Code, Dumbbell, BookOpen, Mic } from "lucide-react";

const hobbies = [
  {
    icon: <Code />,
    title: "Web Development",
    description:
      "Building interactive and beautiful digital experiences with modern tools like Next.js and TypeScript.",
  },
  {
    icon: <Dumbbell />,
    title: "Exercise",
    description:
      "Pushing my limits with calisthenics and strength training to stay sharp, focused, and healthy.",
  },
  {
    icon: <BookOpen />,
    title: "Reading",
    description:
      "Diving into fantasy worlds or exploring mind-bending sci-fi. Currently reading the Wheel of Time series.",
  },
  {
    icon: <Mic />,
    title: "Podcasts",
    description:
      "Learning something new from history podcasts or unwinding with a good comedy show.",
  },
];

export const HobbiesSection = () => {
  return (
    <div className="w-full">
      {/*<h2 className="mb-4 text-3xl font-medium">In My Free Time...</h2>*/}

      <div className="grid grid-cols-2 gap-4">
        {hobbies.map((hobby) => (
          <HobbyCard
            key={hobby.title}
            icon={hobby.icon}
            title={hobby.title}
            description={hobby.description}
          />
        ))}
      </div>
    </div>
  );
};

interface HobbyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const HobbyCard: React.FC<HobbyCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleInteraction = () => {
    setIsRevealed(!isRevealed);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Prevent page from scrolling on spacebar press
      handleInteraction();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleInteraction}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative aspect-square cursor-pointer rounded-lg p-6 shadow-md transition-colors duration-500 ease-in-out backdrop-blur-sm",
        {
          "bg-gray-700/80 dark:bg-gray-800/70": !isRevealed,
          "bg-primary/90": isRevealed,
        },
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
      )}
    >
      {/* Background Icon */}
      <div
        className={cn(
          "absolute inset-0 z-0 flex items-center justify-center transition-[opacity,color,transform] duration-300",
          "text-primary",
          {
            "opacity-20 dark:opacity-10": !isRevealed,
            "opacity-0 scale-175": isRevealed,
          },
        )}
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "h-3/4 w-3/4",
        })}
      </div>

      {/* Front Content (Title) */}
      <div
        className={cn(
          "relative z-10 flex h-full items-center justify-center transition-opacity duration-300",
          {
            "pointer-events-none opacity-0": isRevealed,
            "opacity-100": !isRevealed,
          },
        )}
      >
        <h3 className="text-center text-2xl font-semibold text-gray-50">{title}</h3>
      </div>

      {/* Back Content (Description) */}
      <div
        className={cn(
          "absolute inset-0 z-10 flex items-center justify-center p-6 text-center transition-opacity duration-300",
          {
            "pointer-events-none opacity-0": !isRevealed,
            "opacity-100": isRevealed,
          },
        )}
      >
        <p className="text-sm font-medium text-gray-50 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
