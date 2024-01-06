import HamburgerIcon from "../../../assets/images/svg/Hamburger";

const AssessmentNavbar = ({ handleToggleSidebar }) => {
  return (
    <>
    {/* Navbar for desktop */}
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
       {/* Navbar for Mobile and Tablet */}
      <div className="w-full  h-[50px]  flex-shrink-0  flex lg:hidden  justify-between items-center px-5 ">
        <div className="flex justify-center items-center gap-2">
          {/* using the handleToggleSidebar prop here for sidebar visibility  */}
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

      <div className="w-full h-[50px] flex-shrink-0  border-b border-[#DDE5EA] flex lg:hidden justify-between items-center ">
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
    </>
  );
};

export default AssessmentNavbar;
