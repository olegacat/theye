import { icons, TypeIcon } from "./icons";

type IconProps = {
  name: TypeIcon;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
  cursor?: string;
};

export type TIcon = {
  width?: number | string;
  height?: number | string;
};

const Icon: React.FC<IconProps> = ({
  name,
  className,
  onClick,
  style,
  width,
  height,
  cursor = "default",
}) => {
  const SvgIcon = icons[name as keyof typeof icons];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor,
        ...style,
      }}
    >
      {/* Render the SVG icon */}
      <SvgIcon width={width} height={height} />
    </div>
  );
};

export default Icon;
