import { useState } from "react";
import MainSidebar from "../../components/organisms/MainSidebar/MainSidebar.Component";
import AssessmentStats from "./views/AssessmentStats.Component";
import HamburgerIcon from "../../assets/images/svg/Hamburger";
import SearchIcon from "../../assets/images/svg/Search";
import FilterIcon from "../../assets/images/svg/Filter";
import GraphIcon from "../../assets/images/svg/Graph";
import MyAssessmentsList from "./views/MyAssessmentsList.Component";
import MainMobileSidebar from "../../components/organisms/MainSidebar/MainSidebar.Mobile.Component";

function Assessment() {
  // State for sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar function
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // State for section visibility
  const [isSectionVisible, setSectionVisible] = useState(false);

  // Toggle section visibility function
  const toggleSection = () => {
    setSectionVisible(!isSectionVisible);
  };

  return (
    <div className="w-full bg-slate-100 h-[100vh] flex justify-start gap-4">
      <div className="md:flex hidden">
        <MainSidebar />
      </div>

      <div
        className="bg-white w-full rounded-xl flex flex-col "
        style={{ marginRight: "18px" }}
      >
        {/* navbar for assesment page */}
        <div className="w-full h-[70px] border-b  flex-shrink-0 border-[#DDE5EA] lg:flex md:hidden hidden justify-between items-center px-5">
          <div className=" flex justify-between items-center gap-5 h-full ">
            <h1 className="text-[#1C4980] font-semibold text-[22px]">
              Assessment
            </h1>
            <div className="border border-[#DADCE0] h-[45px]"></div>
            <div className="flex flex-col justify-end h-full items-center  gap-4">
              <h1 className="text-[#0073E6] font-semibold text-[16px] ">
                My Assesments
              </h1>
              <div className="border-2 border-[#0073E6] w-full"></div>
            </div>
          </div>
        </div>
        <div className="w-full  h-[50px]  flex-shrink-0  flex lg:hidden  justify-between items-center px-5 ">
          <div className="flex justify-center items-center gap-2">
            <div
              onClick={handleToggleSidebar}
              className="flex justify-center items-center w-[38px] h-[38px] bg-[#F2F8FE] rounded-full cursor-pointer"
            >
              <HamburgerIcon />
            </div>

            <div className="text-[18px]  font-semibold text-[#1C4980]">
              Assessment
            </div>
          </div>
        </div>

        <div className="w-full h-[50px] flex-shrink-0  border-b border-[#DDE5EA] flex md:hidden justify-between items-center ">
          <div className=" flex w-[50%]  border-b-2 border-[#0073E6] justify-center items-center gap-5 h-full ">
            <h1 className=" text-[#0073E6] font-semibold text-[15px]">
              My Assessments
            </h1>
          </div>
          <div className="flex w-[50%] justify-center h-full items-center  gap-4">
            <h1 className="text-[#1C4980] font-semibold text-[15px] ">
              Unstop Assesments
            </h1>
          </div>
        </div>
        <AssessmentStats isSectionVisible={isSectionVisible} />

        {/* second section */}
        <div className="w-full p-5 flex flex-col  items-start gap-3 text-[#1C4980] ">
          <div className="w-full flex justify-between items-center">
            <h1 className=" md:text-[19px] text-[20px] ">My Assesments</h1>
            <div className="md:hidden flex justify-center items-center">
              <div className="flex justify-center items-center w-10 h-10">
                <SearchIcon />
              </div>
              <div className="flex justify-center items-center w-10 h-10">
                <FilterIcon />
              </div>
              <div
                className={`flex justify-center items-center w-10 h-10 rounded-full ${
                  isSectionVisible ? "border border-[#1C4980]" : ""
                }`}
                onClick={toggleSection}
              >
                <GraphIcon />
              </div>
            </div>
          </div>

          <MyAssessmentsList />
        </div>
        <MainMobileSidebar
          isOpen={isSidebarOpen}
          onClose={handleToggleSidebar}
        />
      </div>
    </div>
  );
}

export default Assessment;
