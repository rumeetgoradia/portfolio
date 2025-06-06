"use client";

import { useEffect, useState } from "react";

export const TimeBasedGreeting = () => {
  const [greeting, setGreeting] = useState("Hi");

  useEffect(() => {
    const getGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        return "Good morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "Good afternoon";
      } else {
        return "Good evening";
      }
    };

    setGreeting(getGreeting());
  }, []);

  return <>{greeting}</>;
};
