import { TIcon } from "../Icon";

export const MenuBtn = ({ width = 48, height = 48 }: TIcon) => {
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
        <path
          d="M24 29C25.3807 29 26.5 30.1193 26.5 31.5C26.5 32.8807 25.3807 34 24 34C22.6193 34 21.5 32.8807 21.5 31.5C21.5 30.1193 22.6193 29 24 29ZM24 21.5C25.3807 21.5 26.5 22.6193 26.5 24C26.5 25.3807 25.3807 26.5 24 26.5C22.6193 26.5 21.5 25.3807 21.5 24C21.5 22.6193 22.6193 21.5 24 21.5ZM24 14C25.3807 14 26.5 15.1193 26.5 16.5C26.5 17.8807 25.3807 19 24 19C22.6193 19 21.5 17.8807 21.5 16.5C21.5 15.1193 22.6193 14 24 14Z"
          fill="#87858E"
        />
      </g>
      <defs>
        <clipPath
          id="bgblur_0_492_193_clip_path"
          transform="translate(32.6 32.6)"
        >
          <rect width="48" height="48" rx="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
