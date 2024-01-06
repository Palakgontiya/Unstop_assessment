import PropTypes from "prop-types";

const SidebarButton = ({ icon: Icon, btnText, id, onClick, isClicked }) => {
  // Define default props
  SidebarButton.defaultProps = {
    isClicked: false,
  };

  // Selected color based on isClicked prop
  const selectedColor = isClicked ? "#0073E6" : "#1C4980";

  // Handle click event
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the provided onClick function if exists
    }
  };

  return (
    <div
      id={id}
      className={`flex flex-col justify-center items-center gap-2 rounded-lg py-3 w-[98px] cursor-pointer text-[#0073E6] border ${
        isClicked
          ? `border-${selectedColor} text-${selectedColor} bg-[#E5F1FC]`
          : `border-transparent text-[${selectedColor}] bg-transparent`
      }`}
      onClick={handleClick} // Use the defined handleClick function for click event
    >
      <div className="w-[20px] h-[20px] flex justify-center items-center pointer-events-none">
        <Icon fill={selectedColor} />
      </div>
      <div className="text-[12px] font-semibold flex justify-center items-center pointer-events-none p-1">
        {btnText}
      </div>
    </div>
  );
};

// Define prop types for the SidebarButton component
SidebarButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  btnText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isClicked: PropTypes.bool,
};

export default SidebarButton;
