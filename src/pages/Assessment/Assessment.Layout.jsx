import { useState } from "react";
import MainSidebar from "../../components/organisms/MainSidebar/MainSidebar.Component";
import AssessmentStats from "./views/AssessmentStats.Component";
import SearchIcon from "../../assets/images/svg/Search";
import FilterIcon from "../../assets/images/svg/Filter";
import GraphIcon from "../../assets/images/svg/Graph";
import MyAssessmentsList from "./views/MyAssessmentsList.Component";
import MainMobileSidebar from "../../components/organisms/MainSidebar/MainSidebar.Mobile.Component";
import AssessmentNavbar from "./views/AssessmentNavbar.Component";

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
        className="bg-white w-full rounded-xl flex flex-col"
        style={{ marginRight: "18px" }}
      >
        {/* navbar for assesment page */}
        <AssessmentNavbar handleToggleSidebar={handleToggleSidebar} />
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
