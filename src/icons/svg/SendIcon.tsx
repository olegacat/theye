import { TIcon } from "../Icon";

export const SendIcon = ({ width = 49, height = 49 }: TIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
    >
      <rect width="48" height="48" rx="24" fill="#CDCBF2" />

      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="#CDCBF2"
        strokeWidth="2"
        fill="none"
        shapeRendering="crispEdges"
      />

      <path
        d="M24 31V17M24 17L17 24M24 17L31 24"
        stroke="#1A1A1A"
        strokeWidth="2.41667"
        strokeLinecap="round"
      />
    </svg>
  );
};
