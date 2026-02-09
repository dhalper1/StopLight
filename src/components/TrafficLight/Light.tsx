import { LIGHT_CONFIG, type LightProps } from './types';


export const Light = ({ color, isOn, onClick }: LightProps) => {
  const config = LIGHT_CONFIG[color];

  let colorClass;
  if (isOn) {
    colorClass = config.styling.on;
  } else {
    colorClass = config.styling.off;
  }

  return (
    <div
      className={`
        w-20 h-20 rounded-full transition-all duration-300
        ${colorClass}
        ${onClick ? 'cursor-pointer hover:scale-105' : ''}
      `}
      onClick={onClick}
    />
  );
};
