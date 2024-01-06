import { useState } from "react";
import DashboardIcon from "../../../assets/images/svg/Dashboard";
import AssessmentIcon from "../../../assets/images/svg/Assessment";
import LibraryIcon from "../../../assets/images/svg/Library";
import RoundStatusIcon from "../../../assets/images/svg/RoundStatus";
import SidebarButton from "./SidebarButton";

const buttonData = [
  {
    id: "dashboard",
    icon: DashboardIcon,
    btnText: "Dashboard",
  },
  {
    id: "assessment",
    icon: AssessmentIcon,
    btnText: "Assessment",
  },
  {
    id: "library",
    icon: LibraryIcon,
    btnText: "My Library",
  },
  {
    id: "admin",
    icon: RoundStatusIcon,
    btnText: "Round Status",
  },
];

const MainSidebar = () => {
  const [clickedButton, setClickedButton] = useState("assessment");

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  return (
    <div className="flex flex-col justify-start items-center gap-2 py-4 px-8 bg-white tracking-wide ">
      {buttonData.map((button) => (
        <SidebarButton
          key={button.id}
          icon={button.icon}
          btnText={button.btnText}
          id={button.id}
          onClick={() => handleButtonClick(button.id)}
          isClicked={clickedButton === button.id}
        />
      ))}
    </div>
  );
};

export default MainSidebar;
