import { LIGHT_CONFIG, LIGHT_STYLES } from "./config";

type LightProps = {
  color: keyof typeof LIGHT_CONFIG; // 'red' | 'yellow' | 'green'
  isOn: boolean;
};

export const Light = ({ color, isOn }: LightProps) => {
  const styles = LIGHT_STYLES[color];
  const colorClass = isOn ? styles.on : styles.off;
  const textColor = isOn ? "text-white" : "text-black";

  return (
    <div
      className={`
        w-20 h-20 rounded-full transition-all duration-300
        flex items-center justify-center
        ${colorClass}
        ${textColor}
      `}
    >
      {color.toUpperCase()}
    </div>
  );
};
