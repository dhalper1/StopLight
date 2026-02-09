import { useState, useEffect } from 'react';
import { LIGHT_CONFIG, DISPLAY_SEQUENCE, DISPLAY_ORDER } from './types';
import { Light } from './Light';

export const TrafficLight = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentPhase = DISPLAY_SEQUENCE[activeIndex];

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % DISPLAY_SEQUENCE.length);
    }, currentPhase.duration);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const currentPhase = DISPLAY_SEQUENCE[activeIndex];
  const activeLights = new Set(currentPhase.lights);
  const labels = currentPhase?.lights.map(color => LIGHT_CONFIG[color].label).join(', ');

  return (
    <div
      role="status"
      aria-label={`Traffic light - ${labels}`}
      className="bg-black p-4 rounded-lg w-24 flex flex-col gap-4 items-center"
    >
      {DISPLAY_ORDER.map((color) => (
        <Light
          key={color}
          color={color}
          isOn={activeLights.has(color)}
        />
      ))}
    </div>
  );
};