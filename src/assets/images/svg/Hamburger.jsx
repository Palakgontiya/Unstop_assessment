const HamburgerIcon = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={20} fill="#F2F8FE" />
    <g clipPath="url(#clip0_0_955)">
      <path
        d="M23.75 27.5H8.75V25H23.75V27.5ZM31.25 12.5V15H8.75V12.5H31.25ZM23.75 21.25H8.75V18.75H23.75V21.25Z"
        fill="#1C4980"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_955">
        <rect
          width={30}
          height={30}
          fill="white"
          transform="matrix(-1 0 0 1 35 5)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default HamburgerIcon;
