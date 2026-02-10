export type LightDefinition = {
  label: string;
};

export type DisplayPhase = {
  lights: string[];  // Array of light colors that should be on
  duration: number;  // Duration in milliseconds
};

// Tailwind styles for each light state
export const LIGHT_STYLES: Record<string, { on: string; off: string }> = {
  red: {
    on: "bg-red-500 shadow-lg shadow-red-500/50",
    off: "bg-red-950",
  },
  yellow: {
    on: "bg-yellow-400 shadow-lg shadow-yellow-400/50",
    off: "bg-yellow-950",
  },
  green: {
    on: "bg-green-500 shadow-lg shadow-green-500/50",
    off: "bg-green-950",
  },
};

// Light configuration - map of all available lights
export const LIGHT_CONFIG: Record<string, LightDefinition> = {
  red: {
    label: 'Stop',
  },
  yellow: {
    label: 'Slow',
  },
  green: {
    label: 'Go',
  },
};

// Display configuration - ordered sequence of phases with timing
export const DISPLAY_SEQUENCE: DisplayPhase[] = [
  {
    lights: ['green'],
    duration: 5000,
  },
  {
    lights: ['yellow'],
    duration: 1000,
  },
  {
    lights: ['red'],
    duration: 2000,
  },
];

// Visual display order (top to bottom on screen)
export const DISPLAY_ORDER = ['red', 'yellow', 'green'];
