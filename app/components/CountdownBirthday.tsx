"use client";

import { useEffect, useState } from "react";

function getNextBirthday(): Date {
  const now = new Date();
  const thisYear = now.getFullYear();
  const birthday = new Date(thisYear, 3, 3, 0, 0, 0); // April 3 (month is 0-indexed)
  if (birthday <= now) {
    birthday.setFullYear(thisYear + 1);
  }
  return birthday;
}

function calcTimeLeft() {
  const diff = getNextBirthday().getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownBirthday() {
  // Initialize with zeros to avoid SSR/client hydration mismatch
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTime(calcTimeLeft());
    const timer = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Dias", value: time.days },
    { label: "Horas", value: time.hours },
    { label: "Minutos", value: time.minutes },
    { label: "Segundos", value: time.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
      {units.map(({ label, value }) => (
        <div key={label} className="love-card flex flex-col items-center min-w-[100px] px-6 py-5">
          <span
            className="text-5xl md:text-6xl font-bold gradient-text tabular-nums"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            {String(value).padStart(2, "0")}
          </span>
          <span
            className="text-pink-300 text-sm mt-2 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
