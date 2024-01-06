import CancelIcon from "../../../assets/images/svg/Cancel";
import DashboardIcon from "../../../assets/images/svg/Dashboard";
import AssessmentIcon from "../../../assets/images/svg/Assessment";
import LibraryIcon from "../../../assets/images/svg/Library";
import RoundStatusIcon from "../../../assets/images/svg/RoundStatus";

const MainMobileSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      // using isOpen prop to achiv the behaviour of the sidebar
      className={`bg-[#F2F8FE] text-[#1C4980] lg:hidden h-screen fixed left-0 top-0 flex flex-col items-center ${
        isOpen ? "w-[300px]" : "w-0"
      } overflow-hidden transition-width duration-300`}
    >
      <div className="w-[255px]  flex flex-col justify-center items-center mt-5 ml-2">
        <div className="flex justify-between items-start w-full h-[36px]">
          <p className="text-[14px] font-semibold">Menu</p>
          {/* using the onClose prop to handle the sidebar visibility */}
          <button onClick={onClose}>
            <CancelIcon fill="#1C4980" />
          </button>
        </div>
        <div className="flex p-3 justify-start items-center w-full h-[56px] gap-2">
          <DashboardIcon fill="#1C4980" />
          <div className="text-[14px] font-semibold">Dashboard</div>
        </div>
        <div className="flex p-3 justify-start items-center w-full h-[54px] gap-2 bg-[#E5F1FC] border border-[#0073E6] rounded-xl">
          <AssessmentIcon fill="#0073E6" />

          <div className="text-[14px] font-semibold text-[#0073E6]">
            Assessment
          </div>
        </div>
        <div className="flex p-3 justify-start items-center w-full h-[56px] gap-2">
          <LibraryIcon fill="#1C4980" />
          <div className="text-[14px] font-semibold">My Library</div>
        </div>
      </div>
      <div className="w-[255px] ml-2 border-t-2 border-dotted border-[#BACBD5] mt-2"></div>
      <div className="flex p-3 justify-between items-center w-[255px] h-[56px] gap-2">
        <div className="flex justify-center items-center gap-2">
          <RoundStatusIcon fill="#1C4980" />
          <div className="text-[14px] font-semibold">Round</div>
        </div>
        <div>
          <button className="border border-[#D63500] font-semibold text-[#D63500] bg-[#FBEBEA] text-[10px] px-2  rounded-3xl">
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMobileSidebar;
