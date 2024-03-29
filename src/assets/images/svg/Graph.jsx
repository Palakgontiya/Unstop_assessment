const GraphIcon = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={20} fill="white" />
    <path
      d="M12 28V17H16V28H12ZM18 28V12H22V28H18ZM24 28V21H28V28H24Z"
      fill="#1C4980"
    />
  </svg>
);
export default GraphIcon;
