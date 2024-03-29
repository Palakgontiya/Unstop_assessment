const FilterIcon = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={20} fill="white" />
    <g clipPath="url(#clip0_38868_130)">
      <path
        d="M12.25 13.66C12.35 13.79 17.99 20.99 17.99 20.99V27C17.99 27.55 18.44 28 19 28H21.01C21.56 28 22.02 27.55 22.02 27V20.98C22.02 20.98 27.51 13.96 27.77 13.64C28.03 13.32 28 13 28 13C28 12.45 27.55 12 26.99 12H13.01C12.4 12 12 12.48 12 13C12 13.2 12.06 13.44 12.25 13.66Z"
        fill="#1C4980"
      />
    </g>
    <defs>
      <clipPath id="clip0_38868_130">
        <rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </clipPath>
    </defs>
  </svg>
);
export default FilterIcon;
