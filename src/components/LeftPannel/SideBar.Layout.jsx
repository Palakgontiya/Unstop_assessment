import { useState } from "react";
import Button from "../buttons/Button";

const SideBar = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  return (
    <div className="flex flex-col justify-start items-center gap-2 py-4 px-8 bg-white tracking-wide ">
      <Button
        icon={"dashboard"}
        btnText={"Dashboard"}
        id={"dashboard"}
        onClick={() => handleButtonClick("dashboard")}
        isClicked={clickedButton === "dashboard"}
      />
      <Button
        icon={"notes"}
        btnText={"Assessment"}
        id={"assessment"}
        onClick={() => handleButtonClick("assessment")}
        isClicked={clickedButton === "assessment"}
      />
      <Button
        icon={"quiz"}
        btnText={"My Library"}
        id={"library"}
        onClick={() => handleButtonClick("library")}
        isClicked={clickedButton === "library"}
      />
      <div className="flex flex-col justify-center items-center  py-4 gap-3 cursor-pointer border-t-2 border-dotted border-[#BACBD5] mt-3">
        <button className="border border-[#D63500] font-semibold text-[#D63500] bg-[#FBEBEA] text-[11px] px-3 py-1 rounded-3xl">
          Admin
        </button>
        <Button
          icon={"admin"}
          btnText={"Round Status"}
          id={"admin"}
          onClick={() => handleButtonClick("admin")}
          isClicked={clickedButton === "admin"}
        />
      </div>
    </div>
  );
};

export default SideBar;
