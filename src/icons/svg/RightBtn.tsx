import { TIcon } from "../Icon";

export const RightBtn = ({ width = 48, height = 48 }: TIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      overflow="visible"
      viewBox="0 0 48 48"
      fill="none"
    >
      <foreignObject x="-32.6" y="-32.6" width="48" height="48">
        <div
          style={{
            backdropFilter: "blur(16.3px)",
            clipPath: "url(#bgblur_0_492_193_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g data-figma-bg-blur-radius="32.6">
        <rect width="48" height="48" rx="24" fill="white" fillOpacity="0.08" />
        <g clipPath="url(#clip1_492_198)">
          <rect
            x="15.25"
            y="15.25"
            width="17.5"
            height="17.5"
            rx="4.75"
            stroke="#87858E"
            strokeWidth="2.5"
          />
          <path d="M26 18V29.5" stroke="#87858E" strokeWidth="2.5" />
        </g>
      </g>
      <defs>
        <clipPath
          id="bgblur_0_492_198_clip_path"
          transform="translate(32.6 32.6)"
        >
          <rect width="48" height="48" rx="24" />
        </clipPath>
        <clipPath id="clip1_492_198">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(14 14)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
