import { useState } from "react";
import AssesmentCard from "../cards/AssesmentCrad.layout";
import NewAssesmentCard from "../cards/NewAssesmentCard";
import MobileSideBar from "../LeftPannel/MobileSideBar";



const Assesment = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="bg-white   w-full rounded-xl flex flex-col"
      style={{ border: "1px solid silver", marginRight: "18px" }}
    >
      {/* navbar for assesment page */}
      <div className="w-full h-[70px] border-b border-[#DDE5EA] lg:flex md:hidden hidden justify-between items-center px-5">
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
      <div className="w-full  h-[50px] border-b border-[#DDE5EA] flex lg:hidden  justify-between items-center px-5 ">
        <div className="flex justify-center items-center gap-2">
          <div
            onClick={handleToggleSidebar}
            className="flex justify-center items-center w-[38px] h-[38px] bg-[#F2F8FE] rounded-full cursor-pointer"
          >
            <img
              src="images/menuBar.png"
              alt=""
              className="w-[22px] h-[16px] object-cover pointer-events-none"
            />
          </div>
          
          <div className="text-[18px] font-semibold text-[#1C4980]">
            Assessment
          </div>
        </div>
      </div>

      <div className="w-full  h-[50px] border-b border-[#DDE5EA] flex md:hidden justify-between items-center ">
        <div className=" flex w-[50%] border-b-2 border-[#0073E6] justify-center items-center gap-5 h-full ">
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
      {/* first section of main container of the assesment page */}
      <div className="w-full p-5 md:flex md:flex-col hidden items-start  gap-5 text-[#1C4980] ">
        <h1 className=" text-[21px]  ">Assessments Overview</h1>
        <div className=" w-full flex justify-start  flex-1 flex-wrap">
          {/* one */}
          <div
            style={{ border: "1px solid silver", flex: 15 }}
            className=" border-r-2 py-4 px-5 flex flex-col items-start gap-4 "
          >
            <h2 className="font-semibold text-[16px]">Total Assesments</h2>
            <div className="flex justify-center items-center gap-[10px]">
              <div className="flex justify-center items-center rounded-xl bg-[#EBE8FD] h-[40px] w-[40px]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#EBE8FD" />
                  <g clipPath="url(#clip0_0_482)">
                    <path
                      d="M25.8333 14.1667V17.5H13.3333V14.1667H25.8333ZM25.8333 22.5V25.8333H13.3333V22.5H25.8333ZM26.6667 12.5H12.5C12.0417 12.5 11.6667 12.875 11.6667 13.3333V18.3333C11.6667 18.7917 12.0417 19.1667 12.5 19.1667H26.6667C27.125 19.1667 27.5 18.7917 27.5 18.3333V13.3333C27.5 12.875 27.125 12.5 26.6667 12.5ZM26.6667 20.8333H12.5C12.0417 20.8333 11.6667 21.2083 11.6667 21.6667V26.6667C11.6667 27.125 12.0417 27.5 12.5 27.5H26.6667C27.125 27.5 27.5 27.125 27.5 26.6667V21.6667C27.5 21.2083 27.125 20.8333 26.6667 20.8333Z"
                      fill="#6548EE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_482">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(10 10)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="text-[22px] font-bold flex justify-center items-center">
                <div>34</div>
              </div>
            </div>
          </div>
          {/* two */}
          <div
            style={{ border: "1px solid silver", flex: 35 }}
            className="  w-[369px] border-r-2 py-4 px-5 flex flex-col items-start gap-3"
          >
            <h2 className="font-semibold text-[16px]">Candidates</h2>
            <div className="flex justify-center items-center gap-4 ">
              <div className="flex justify-center items-center rounded-xl bg-[#EBE8FD] h-[40px] w-[40px]">
                <img
                  className="h-[50%] w-[50%]"
                  src="/images/group.png"
                  alt="view"
                />
              </div>
              <div className="flex flex-col items-start ">
                <div className="text-[22px] font-bold flex items-center gap-1 ">
                  <div>11,145</div>
                  <div className="text-[#05C165] font-bold text-[14px]">
                    +89
                  </div>
                </div>
                <div className="text-[12px] font-semibold">Total Candidate</div>
              </div>
              <div className="border border-[#DADCE0] h-[45px]"></div>
              <div className="flex flex-col items-start">
                <div className="text-[22px] font-bold flex justify-center items-center gap-1">
                  <div>1,14</div>
                  <div className="text-[#05C165] font-bold text-[14px]">
                    +89
                  </div>
                </div>
                <div className="text-[12px] font-semibold">Who Attempted</div>
              </div>
            </div>
          </div>
          {/* three */}
          <div
            style={{ border: "1px solid silver", flex: 50 }}
            className=" border-r-2 py-4 px-5 flex flex-col items-start gap-3"
          >
            <h2 className="font-semibold text-[16px]">Candidates Source</h2>
            <div className="flex justify-center items-center gap-6 ">
              <div className="flex justify-center items-center rounded-xl bg-[#FCE8EF] h-[40px] w-[40px]">
                <img
                  className="h-[50%] w-[50%]"
                  src="/images/captive_portal.png"
                  alt="view"
                />
              </div>
              <div className="flex flex-col items-start ">
                <div className="text-[22px] font-bold flex items-center gap-1 ">
                  <div>11,000</div>
                  <div className="text-[#05C165] font-bold text-[14px]">
                    +89
                  </div>
                </div>
                <div className="text-[12px] font-semibold">E-mail</div>
              </div>
              <div className="border border-[#DADCE0] h-[45px]"></div>
              <div className="flex flex-col items-start">
                <div className="text-[22px] font-bold flex justify-center items-center gap-1">
                  <div>145</div>
                  <div className="text-[#05C165] font-bold text-[14px]">
                    +89
                  </div>
                </div>
                <div className="text-[12px] font-semibold">Social Share</div>
              </div>
              <div className="border border-[#DADCE0] h-[45px]"></div>
              <div className="flex flex-col items-start">
                <div className="text-[22px] font-bold flex justify-center items-center gap-1">
                  <div>145</div>
                  <div className="text-[#05C165] font-bold text-[14px]">
                    +89
                  </div>
                </div>
                <div className="text-[12px] font-semibold">Unique Link</div>
              </div>
            </div>
          </div>
          {/* four */}
          <div
            style={{ border: "1px solid silver", flex: 15 }}
            className="py-4 px-5 flex flex-col items-start gap-4"
          >
            <h2 className="font-semibold text-[14px]">Total Purpose</h2>
            <div className="flex justify-center items-center gap-[10px]">
              <div className="flex justify-center items-center rounded-xl bg-[#EBE8FD] h-[40px] w-[40px]">
                <img
                  className="h-[50%] w-[50%]"
                  src="/images/link.png"
                  alt="view"
                />
              </div>
              <div className="text-[20px] font-bold flex justify-center items-center">
                <div>11</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full p-5 flex flex-col  items-start gap-3 text-[#1C4980] ">
        <div className="w-full flex justify-between items-center">
          <h1 className=" md:text-[19px] text-[20px] ">My Assesments</h1>
          <div className="md:hidden flex justify-center items-center">
            <div className="flex justify-center items-center w-10 h-10">
              <img src="images/search.png" alt="" className="w-4 h-4" />
            </div>
            <div className="flex justify-center items-center w-10 h-10">
              <img src="images/filter.png" alt="" className="w-4 h-4" />
            </div>
            <div className="flex justify-center items-center w-10 h-10">
              <img src="images/bar_chart.png" alt="" className="w-4 h-4" />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row w-full justify-between items-center gap-5 "> */}
        <div className="flex flex-col md:flex-row w-full gap-5 flex-wrap">
          <div className="md:flex-1 lg:flex-1/3">
            <NewAssesmentCard
              icon1={"vector"}
              icon2={"3 dot"}
              icon3={"cal"}
              icon4={"attach"}
              title={"Math Assessment"}
              date={"20 Apr 2023"}
              duration={"00"}
              questions={"00"}
            />
          </div>
          <div className="md:flex-1 lg:flex-1/3">
            <AssesmentCard
              icon1={"vector"}
              icon2={"3 dot"}
              icon3={"cal"}
              icon4={"attach"}
              title={"Math Assessment"}
              date={"20 Apr 2023"}
              duration={"00"}
              questions={"00"}
            />
          </div>
          <div className="md:flex-1 lg:flex-1/3">
            <AssesmentCard
              icon1={"vector"}
              icon2={"3 dot"}
              icon3={"cal"}
              icon4={"attach"}
              title={"Math Assessment"}
              date={"20 Apr 2023"}
              duration={"00"}
              questions={"00"}
            />
          </div>
        </div>
      </div>
      <MobileSideBar isOpen={isSidebarOpen} onClose={handleToggleSidebar} />
    </div>
  );
};

export default Assesment;
