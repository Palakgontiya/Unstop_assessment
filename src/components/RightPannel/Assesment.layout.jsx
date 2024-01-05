import { useState } from "react";
import AssesmentCard from "../cards/AssesmentCrad.layout";
import NewAssesmentCard from "../cards/NewAssesmentCard";
import MobileSideBar from "../LeftPannel/MobileSideBar";
import HamburgerIcon from "../../assets/images/svg/Hamburger";
import SearchIcon from "../../assets/images/svg/Search";
import FilterIcon from "../../assets/images/svg/Filter";
import GraphIcon from "../../assets/images/svg/Graph";
import GroupUsersIcon from "../../assets/images/svg/GroupUsers";
import UsersIcon from "../../assets/images/svg/User";

const Assesment = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isSectionVisible, setSectionVisible] = useState(false);

  const toggleSection = () => {
    setSectionVisible(!isSectionVisible);
  };

  return (
    <div
      className="bg-white w-full rounded-xl flex flex-col h-[80vh]"
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
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={40} height={40} rx={8} fill="#EBE8FD" />
                  <mask
                    id="mask0_0_489"
                    style={{
                      maskType: "alpha",
                    }}
                    maskUnits="userSpaceOnUse"
                    x={10}
                    y={10}
                    width={20}
                    height={20}
                  >
                    <rect x={10} y={10} width={20} height={20} fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_0_489)">
                    <path
                      d="M10.6787 26.9209V24.4082C10.6787 23.9051 10.8089 23.4427 11.0692 23.0209C11.3295 22.5992 11.6753 22.2774 12.1067 22.0554C12.9778 21.6215 13.8643 21.2953 14.7664 21.0767C15.6684 20.8581 16.5845 20.7488 17.5148 20.7488C18.4514 20.7488 19.3707 20.8573 20.2729 21.0742C21.1751 21.2911 22.0584 21.6166 22.9228 22.0504C23.3542 22.2719 23.7 22.5931 23.9604 23.0139C24.2207 23.4347 24.3508 23.8994 24.3508 24.4079V26.9209H10.6787ZM26.0922 26.9209V24.2565C26.0922 23.6321 25.9237 23.0304 25.5868 22.4512C25.2498 21.8721 24.7639 21.3563 24.1289 20.9037C24.8007 20.9937 25.4358 21.1369 26.0342 21.3333C26.6327 21.5297 27.1961 21.7687 27.7245 22.0504C28.2377 22.3282 28.6321 22.656 28.9076 23.0338C29.1832 23.4117 29.3209 23.8242 29.3209 24.2714V26.9209H26.0922ZM17.5148 19.9155C16.5715 19.9155 15.766 19.5816 15.0983 18.9139C14.4306 18.2462 14.0967 17.4407 14.0967 16.4974C14.0967 15.5542 14.4306 14.7487 15.0983 14.081C15.766 13.4133 16.5715 13.0794 17.5148 13.0794C18.458 13.0794 19.2635 13.4133 19.9312 14.081C20.5989 14.7487 20.9328 15.5542 20.9328 16.4974C20.9328 17.4407 20.5989 18.2462 19.9312 18.9139C19.2635 19.5816 18.458 19.9155 17.5148 19.9155ZM26.0922 16.4974C26.0922 17.4373 25.7576 18.242 25.0884 18.9114C24.4192 19.5808 23.6147 19.9155 22.675 19.9155C22.5184 19.9155 22.3236 19.8973 22.0909 19.8609C21.8581 19.8245 21.6586 19.7822 21.4926 19.7338C21.8742 19.2828 22.1666 18.78 22.3696 18.2255C22.5727 17.6711 22.6742 17.0953 22.6742 16.4982C22.6742 15.9011 22.5727 15.325 22.3696 14.7701C22.1666 14.2151 21.8742 13.7121 21.4926 13.261C21.6903 13.1882 21.8864 13.1398 22.0809 13.1156C22.2753 13.0915 22.4723 13.0794 22.6718 13.0794C23.6124 13.0794 24.4176 13.4141 25.0875 14.0834C25.7573 14.7528 26.0922 15.5574 26.0922 16.4974ZM12.5745 25.0251H22.455V24.4331C22.455 24.2836 22.4168 24.1476 22.3404 24.0253C22.264 23.9029 22.1633 23.8077 22.0383 23.7397C21.3082 23.378 20.5662 23.1051 19.8123 22.9209C19.0584 22.7367 18.2925 22.6446 17.5148 22.6446C16.7436 22.6446 15.9778 22.7367 15.2172 22.9209C14.4566 23.1051 13.7146 23.378 12.9912 23.7397C12.8662 23.8077 12.7655 23.9029 12.6891 24.0253C12.6127 24.1476 12.5745 24.2836 12.5745 24.4331V25.0251ZM17.514 18.0943C17.9529 18.0943 18.3289 17.9381 18.642 17.6255C18.9551 17.3129 19.1117 16.9372 19.1117 16.4982C19.1117 16.0593 18.9554 15.6833 18.6428 15.3702C18.3302 15.0571 17.9545 14.9005 17.5155 14.9005C17.0766 14.9005 16.7006 15.0568 16.3875 15.3694C16.0744 15.682 15.9178 16.0577 15.9178 16.4966C15.9178 16.9356 16.0741 17.3116 16.3867 17.6247C16.6993 17.9378 17.075 18.0943 17.514 18.0943Z"
                      fill="#6548EE"
                    />
                  </g>
                </svg>
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
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={40} height={40} rx={8} fill="#FCE8EF" />
                  <mask
                    id="mask0_0_508"
                    style={{
                      maskType: "alpha",
                    }}
                    maskUnits="userSpaceOnUse"
                    x={10}
                    y={10}
                    width={20}
                    height={20}
                  >
                    <rect x={10} y={10} width={20} height={20} fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_0_508)">
                    <path
                      d="M17.8333 26.2917C17.5833 25.8334 17.3645 25.3577 17.177 24.8646C16.9895 24.3715 16.8333 23.8611 16.7083 23.3334H14.25C14.6527 24.0278 15.1562 24.632 15.7604 25.1459C16.3645 25.6597 17.0555 26.0417 17.8333 26.2917ZM13.5416 21.6667H16.375C16.3333 21.3889 16.302 21.1146 16.2812 20.8438C16.2604 20.5729 16.25 20.2917 16.25 20C16.25 19.7084 16.2604 19.4271 16.2812 19.1563C16.302 18.8854 16.3333 18.6111 16.375 18.3334H13.5416C13.4722 18.6111 13.4201 18.8854 13.3854 19.1563C13.3507 19.4271 13.3333 19.7084 13.3333 20C13.3333 20.2917 13.3507 20.5729 13.3854 20.8438C13.4201 21.1146 13.4722 21.3889 13.5416 21.6667ZM14.25 16.6667H16.7083C16.8333 16.1389 16.9895 15.6285 17.177 15.1354C17.3645 14.6424 17.5833 14.1667 17.8333 13.7084C17.0555 13.9584 16.3645 14.3403 15.7604 14.8542C15.1562 15.3681 14.6527 15.9722 14.25 16.6667ZM18.4166 16.6667H21.5833C21.4166 16.0556 21.2013 15.4792 20.9375 14.9375C20.6736 14.3959 20.3611 13.875 20 13.375C19.6388 13.875 19.3263 14.3959 19.0625 14.9375C18.7986 15.4792 18.5833 16.0556 18.4166 16.6667ZM23.2916 16.6667H25.75C25.3472 15.9722 24.8437 15.3681 24.2395 14.8542C23.6354 14.3403 22.9444 13.9584 22.1666 13.7084C22.4166 14.1667 22.6354 14.6424 22.8229 15.1354C23.0104 15.6285 23.1666 16.1389 23.2916 16.6667ZM20 28.3334C18.8611 28.3334 17.7847 28.1146 16.7708 27.6771C15.7569 27.2396 14.8715 26.6424 14.1145 25.8854C13.3576 25.1285 12.7604 24.2431 12.3229 23.2292C11.8854 22.2153 11.6666 21.1389 11.6666 20C11.6666 18.8472 11.8854 17.7674 12.3229 16.7604C12.7604 15.7535 13.3576 14.8715 14.1145 14.1146C14.8715 13.3577 15.7569 12.7604 16.7708 12.3229C17.7847 11.8854 18.8611 11.6667 20 11.6667C21.1527 11.6667 22.2326 11.8854 23.2395 12.3229C24.2465 12.7604 25.1284 13.3577 25.8854 14.1146C26.6423 14.8715 27.2395 15.7535 27.677 16.7604C28.1145 17.7674 28.3333 18.8472 28.3333 20C28.3333 20.1389 28.3298 20.2778 28.3229 20.4167C28.3159 20.5556 28.3055 20.6945 28.2916 20.8334H26.6041C26.6319 20.6945 26.6493 20.559 26.6562 20.4271C26.6632 20.2952 26.6666 20.1528 26.6666 20C26.6666 19.7084 26.6493 19.4271 26.6145 19.1563C26.5798 18.8854 26.5277 18.6111 26.4583 18.3334H23.625C23.6666 18.6111 23.6979 18.8854 23.7187 19.1563C23.7395 19.4271 23.75 19.7084 23.75 20V20.4271C23.75 20.559 23.743 20.6945 23.7291 20.8334H22.0625C22.0763 20.6945 22.0833 20.559 22.0833 20.4271V20C22.0833 19.7084 22.0729 19.4271 22.052 19.1563C22.0312 18.8854 22 18.6111 21.9583 18.3334H18.0416C18 18.6111 17.9687 18.8854 17.9479 19.1563C17.927 19.4271 17.9166 19.7084 17.9166 20C17.9166 20.2917 17.927 20.5729 17.9479 20.8438C17.9687 21.1146 18 21.3889 18.0416 21.6667H20.8333V23.3334H18.4166C18.5833 23.9445 18.7986 24.5209 19.0625 25.0625C19.3263 25.6042 19.6388 26.125 20 26.625C20.1527 26.4028 20.2986 26.1771 20.4375 25.9479C20.5763 25.7188 20.7083 25.4861 20.8333 25.25V28.2917C20.6944 28.3056 20.559 28.316 20.427 28.3229C20.2951 28.3299 20.1527 28.3334 20 28.3334ZM26.625 27.8125L24.1666 25.3542V27.2084H22.5V22.5H27.2083V24.1667H25.3333L27.7916 26.625L26.625 27.8125Z"
                      fill="#E9407A"
                    />
                  </g>
                </svg>
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
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={40} height={40} rx={8} fill="#E5F1FC" />
                  <mask
                    id="mask0_0_533"
                    style={{
                      maskType: "alpha",
                    }}
                    maskUnits="userSpaceOnUse"
                    x={10}
                    y={10}
                    width={20}
                    height={20}
                  >
                    <rect x={10} y={10} width={20} height={20} fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_0_533)">
                    <path
                      d="M19.0921 24.3362H15.8335C14.6339 24.3362 13.6113 23.9135 12.7657 23.068C11.9202 22.2225 11.4974 21.2 11.4974 20.0005C11.4974 18.801 11.9202 17.7784 12.7657 16.9326C13.6113 16.0869 14.6339 15.6641 15.8335 15.6641H19.0921V17.5599H15.8356C15.1572 17.5599 14.5805 17.7972 14.1056 18.2716C13.6307 18.7461 13.3933 19.3223 13.3933 20.0001C13.3933 20.678 13.6307 21.2541 14.1056 21.7286C14.5805 22.2031 15.1572 22.4403 15.8356 22.4403H19.0921V24.3362ZM16.5522 20.8733V19.1269H23.4481V20.8733H16.5522ZM20.9082 24.3362V22.4403H24.1647C24.8431 22.4403 25.4198 22.2031 25.8947 21.7286C26.3696 21.2541 26.607 20.678 26.607 20.0001C26.607 19.3223 26.3696 18.7461 25.8947 18.2716C25.4198 17.7972 24.8431 17.5599 24.1647 17.5599H20.9082V15.6641H24.1668C25.3665 15.6641 26.3891 16.0868 27.2346 16.9322C28.0801 17.7777 28.5029 18.8002 28.5029 19.9997C28.5029 21.1993 28.0801 22.2219 27.2346 23.0676C26.3891 23.9133 25.3665 24.3362 24.1668 24.3362H20.9082Z"
                      fill="#0073E6"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-[20px] font-bold flex justify-center items-center">
                <div>11</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section for mobile view */}
      {isSectionVisible && (
        <div
          className={`w-full  p-5 md:hidden flex items-start text-[#1C4980] transition-height duration-300   ${
            isSectionVisible ? "h-[400px]" : "h-0 "
          }`}
        >
          <div className=" lg:hidden w-full flex flex-col justify-start border  rounded-xl">
            <div className="flex justify-center items-center">
              {/* one */}
              <div
                style={{ flex: 15 }}
                className=" border-r-2 py-4 px-5 flex flex-col items-start gap-4 "
              >
                <h2 className="font-semibold text-[14px]">Total Assesments</h2>
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
                  <div className="text-[16px] font-bold flex justify-center items-center">
                    <div>34</div>
                  </div>
                </div>
              </div>
              {/* tow */}
              <div
                style={{ flex: 15 }}
                className="py-4 px-5 flex flex-col items-start gap-4"
              >
                <h2 className="font-semibold text-[14px]">Total Purpose</h2>
                <div className="flex justify-center items-center gap-[10px]">
                  <div className="flex justify-center items-center rounded-xl bg-[#EBE8FD] h-[40px] w-[40px]">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={40} height={40} rx={8} fill="#E5F1FC" />
                      <mask
                        id="mask0_0_533"
                        style={{
                          maskType: "alpha",
                        }}
                        maskUnits="userSpaceOnUse"
                        x={10}
                        y={10}
                        width={20}
                        height={20}
                      >
                        <rect
                          x={10}
                          y={10}
                          width={20}
                          height={20}
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_0_533)">
                        <path
                          d="M19.0921 24.3362H15.8335C14.6339 24.3362 13.6113 23.9135 12.7657 23.068C11.9202 22.2225 11.4974 21.2 11.4974 20.0005C11.4974 18.801 11.9202 17.7784 12.7657 16.9326C13.6113 16.0869 14.6339 15.6641 15.8335 15.6641H19.0921V17.5599H15.8356C15.1572 17.5599 14.5805 17.7972 14.1056 18.2716C13.6307 18.7461 13.3933 19.3223 13.3933 20.0001C13.3933 20.678 13.6307 21.2541 14.1056 21.7286C14.5805 22.2031 15.1572 22.4403 15.8356 22.4403H19.0921V24.3362ZM16.5522 20.8733V19.1269H23.4481V20.8733H16.5522ZM20.9082 24.3362V22.4403H24.1647C24.8431 22.4403 25.4198 22.2031 25.8947 21.7286C26.3696 21.2541 26.607 20.678 26.607 20.0001C26.607 19.3223 26.3696 18.7461 25.8947 18.2716C25.4198 17.7972 24.8431 17.5599 24.1647 17.5599H20.9082V15.6641H24.1668C25.3665 15.6641 26.3891 16.0868 27.2346 16.9322C28.0801 17.7777 28.5029 18.8002 28.5029 19.9997C28.5029 21.1993 28.0801 22.2219 27.2346 23.0676C26.3891 23.9133 25.3665 24.3362 24.1668 24.3362H20.9082Z"
                          fill="#0073E6"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text-[16px] font-bold flex justify-center items-center">
                    <div>11</div>
                  </div>
                </div>
              </div>
            </div>

            {/* three */}
            <div
              style={{ flex: 35 }}
              className=" border-t  w-full  py-4 px-5 flex flex-col items-start gap-3"
            >
              <h2 className="font-semibold text-[14px]">Candidates</h2>
              <div className="flex justify-center items-center gap-3 ">
                <div className="flex justify-center items-center rounded-xl bg-[#EBE8FD] h-[40px] w-[40px]">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={40} height={40} rx={8} fill="#EBE8FD" />
                    <mask
                      id="mask0_0_489"
                      style={{
                        maskType: "alpha",
                      }}
                      maskUnits="userSpaceOnUse"
                      x={10}
                      y={10}
                      width={20}
                      height={20}
                    >
                      <rect
                        x={10}
                        y={10}
                        width={20}
                        height={20}
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_0_489)">
                      <path
                        d="M10.6787 26.9209V24.4082C10.6787 23.9051 10.8089 23.4427 11.0692 23.0209C11.3295 22.5992 11.6753 22.2774 12.1067 22.0554C12.9778 21.6215 13.8643 21.2953 14.7664 21.0767C15.6684 20.8581 16.5845 20.7488 17.5148 20.7488C18.4514 20.7488 19.3707 20.8573 20.2729 21.0742C21.1751 21.2911 22.0584 21.6166 22.9228 22.0504C23.3542 22.2719 23.7 22.5931 23.9604 23.0139C24.2207 23.4347 24.3508 23.8994 24.3508 24.4079V26.9209H10.6787ZM26.0922 26.9209V24.2565C26.0922 23.6321 25.9237 23.0304 25.5868 22.4512C25.2498 21.8721 24.7639 21.3563 24.1289 20.9037C24.8007 20.9937 25.4358 21.1369 26.0342 21.3333C26.6327 21.5297 27.1961 21.7687 27.7245 22.0504C28.2377 22.3282 28.6321 22.656 28.9076 23.0338C29.1832 23.4117 29.3209 23.8242 29.3209 24.2714V26.9209H26.0922ZM17.5148 19.9155C16.5715 19.9155 15.766 19.5816 15.0983 18.9139C14.4306 18.2462 14.0967 17.4407 14.0967 16.4974C14.0967 15.5542 14.4306 14.7487 15.0983 14.081C15.766 13.4133 16.5715 13.0794 17.5148 13.0794C18.458 13.0794 19.2635 13.4133 19.9312 14.081C20.5989 14.7487 20.9328 15.5542 20.9328 16.4974C20.9328 17.4407 20.5989 18.2462 19.9312 18.9139C19.2635 19.5816 18.458 19.9155 17.5148 19.9155ZM26.0922 16.4974C26.0922 17.4373 25.7576 18.242 25.0884 18.9114C24.4192 19.5808 23.6147 19.9155 22.675 19.9155C22.5184 19.9155 22.3236 19.8973 22.0909 19.8609C21.8581 19.8245 21.6586 19.7822 21.4926 19.7338C21.8742 19.2828 22.1666 18.78 22.3696 18.2255C22.5727 17.6711 22.6742 17.0953 22.6742 16.4982C22.6742 15.9011 22.5727 15.325 22.3696 14.7701C22.1666 14.2151 21.8742 13.7121 21.4926 13.261C21.6903 13.1882 21.8864 13.1398 22.0809 13.1156C22.2753 13.0915 22.4723 13.0794 22.6718 13.0794C23.6124 13.0794 24.4176 13.4141 25.0875 14.0834C25.7573 14.7528 26.0922 15.5574 26.0922 16.4974ZM12.5745 25.0251H22.455V24.4331C22.455 24.2836 22.4168 24.1476 22.3404 24.0253C22.264 23.9029 22.1633 23.8077 22.0383 23.7397C21.3082 23.378 20.5662 23.1051 19.8123 22.9209C19.0584 22.7367 18.2925 22.6446 17.5148 22.6446C16.7436 22.6446 15.9778 22.7367 15.2172 22.9209C14.4566 23.1051 13.7146 23.378 12.9912 23.7397C12.8662 23.8077 12.7655 23.9029 12.6891 24.0253C12.6127 24.1476 12.5745 24.2836 12.5745 24.4331V25.0251ZM17.514 18.0943C17.9529 18.0943 18.3289 17.9381 18.642 17.6255C18.9551 17.3129 19.1117 16.9372 19.1117 16.4982C19.1117 16.0593 18.9554 15.6833 18.6428 15.3702C18.3302 15.0571 17.9545 14.9005 17.5155 14.9005C17.0766 14.9005 16.7006 15.0568 16.3875 15.3694C16.0744 15.682 15.9178 16.0577 15.9178 16.4966C15.9178 16.9356 16.0741 17.3116 16.3867 17.6247C16.6993 17.9378 17.075 18.0943 17.514 18.0943Z"
                        fill="#6548EE"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="text-[16px] font-bold flex items-center gap-1 ">
                    <div>11,145</div>
                    <div className="text-[#05C165] font-bold text-[10px]">
                      +89
                    </div>
                  </div>
                  <div className="text-[12px] font-semibold">
                    Total Candidate
                  </div>
                </div>
                <div className="border border-[#DADCE0] h-[45px]"></div>
                <div className="flex flex-col items-start">
                  <div className="text-[16px] font-bold flex justify-center items-center gap-1">
                    <div>1,14</div>
                    <div className="text-[#05C165] font-bold text-[10px]">
                      +89
                    </div>
                  </div>
                  <div className="text-[12px] font-semibold">Who Attempted</div>
                </div>
              </div>
            </div>
            {/* four */}
            <div
              style={{ flex: 50 }}
              className=" border-t py-4 px-5 flex flex-col items-start gap-3"
            >
              <h2 className="font-semibold text-[14px]">Candidates Source</h2>
              <div className="flex justify-center items-center gap-3 ">
                <div className="flex justify-center items-center rounded-xl bg-[#FCE8EF] h-[40px] w-[40px]">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={40} height={40} rx={8} fill="#FCE8EF" />
                    <mask
                      id="mask0_0_508"
                      style={{
                        maskType: "alpha",
                      }}
                      maskUnits="userSpaceOnUse"
                      x={10}
                      y={10}
                      width={20}
                      height={20}
                    >
                      <rect
                        x={10}
                        y={10}
                        width={20}
                        height={20}
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_0_508)">
                      <path
                        d="M17.8333 26.2917C17.5833 25.8334 17.3645 25.3577 17.177 24.8646C16.9895 24.3715 16.8333 23.8611 16.7083 23.3334H14.25C14.6527 24.0278 15.1562 24.632 15.7604 25.1459C16.3645 25.6597 17.0555 26.0417 17.8333 26.2917ZM13.5416 21.6667H16.375C16.3333 21.3889 16.302 21.1146 16.2812 20.8438C16.2604 20.5729 16.25 20.2917 16.25 20C16.25 19.7084 16.2604 19.4271 16.2812 19.1563C16.302 18.8854 16.3333 18.6111 16.375 18.3334H13.5416C13.4722 18.6111 13.4201 18.8854 13.3854 19.1563C13.3507 19.4271 13.3333 19.7084 13.3333 20C13.3333 20.2917 13.3507 20.5729 13.3854 20.8438C13.4201 21.1146 13.4722 21.3889 13.5416 21.6667ZM14.25 16.6667H16.7083C16.8333 16.1389 16.9895 15.6285 17.177 15.1354C17.3645 14.6424 17.5833 14.1667 17.8333 13.7084C17.0555 13.9584 16.3645 14.3403 15.7604 14.8542C15.1562 15.3681 14.6527 15.9722 14.25 16.6667ZM18.4166 16.6667H21.5833C21.4166 16.0556 21.2013 15.4792 20.9375 14.9375C20.6736 14.3959 20.3611 13.875 20 13.375C19.6388 13.875 19.3263 14.3959 19.0625 14.9375C18.7986 15.4792 18.5833 16.0556 18.4166 16.6667ZM23.2916 16.6667H25.75C25.3472 15.9722 24.8437 15.3681 24.2395 14.8542C23.6354 14.3403 22.9444 13.9584 22.1666 13.7084C22.4166 14.1667 22.6354 14.6424 22.8229 15.1354C23.0104 15.6285 23.1666 16.1389 23.2916 16.6667ZM20 28.3334C18.8611 28.3334 17.7847 28.1146 16.7708 27.6771C15.7569 27.2396 14.8715 26.6424 14.1145 25.8854C13.3576 25.1285 12.7604 24.2431 12.3229 23.2292C11.8854 22.2153 11.6666 21.1389 11.6666 20C11.6666 18.8472 11.8854 17.7674 12.3229 16.7604C12.7604 15.7535 13.3576 14.8715 14.1145 14.1146C14.8715 13.3577 15.7569 12.7604 16.7708 12.3229C17.7847 11.8854 18.8611 11.6667 20 11.6667C21.1527 11.6667 22.2326 11.8854 23.2395 12.3229C24.2465 12.7604 25.1284 13.3577 25.8854 14.1146C26.6423 14.8715 27.2395 15.7535 27.677 16.7604C28.1145 17.7674 28.3333 18.8472 28.3333 20C28.3333 20.1389 28.3298 20.2778 28.3229 20.4167C28.3159 20.5556 28.3055 20.6945 28.2916 20.8334H26.6041C26.6319 20.6945 26.6493 20.559 26.6562 20.4271C26.6632 20.2952 26.6666 20.1528 26.6666 20C26.6666 19.7084 26.6493 19.4271 26.6145 19.1563C26.5798 18.8854 26.5277 18.6111 26.4583 18.3334H23.625C23.6666 18.6111 23.6979 18.8854 23.7187 19.1563C23.7395 19.4271 23.75 19.7084 23.75 20V20.4271C23.75 20.559 23.743 20.6945 23.7291 20.8334H22.0625C22.0763 20.6945 22.0833 20.559 22.0833 20.4271V20C22.0833 19.7084 22.0729 19.4271 22.052 19.1563C22.0312 18.8854 22 18.6111 21.9583 18.3334H18.0416C18 18.6111 17.9687 18.8854 17.9479 19.1563C17.927 19.4271 17.9166 19.7084 17.9166 20C17.9166 20.2917 17.927 20.5729 17.9479 20.8438C17.9687 21.1146 18 21.3889 18.0416 21.6667H20.8333V23.3334H18.4166C18.5833 23.9445 18.7986 24.5209 19.0625 25.0625C19.3263 25.6042 19.6388 26.125 20 26.625C20.1527 26.4028 20.2986 26.1771 20.4375 25.9479C20.5763 25.7188 20.7083 25.4861 20.8333 25.25V28.2917C20.6944 28.3056 20.559 28.316 20.427 28.3229C20.2951 28.3299 20.1527 28.3334 20 28.3334ZM26.625 27.8125L24.1666 25.3542V27.2084H22.5V22.5H27.2083V24.1667H25.3333L27.7916 26.625L26.625 27.8125Z"
                        fill="#E9407A"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="text-[16px] font-bold flex items-center gap-1 ">
                    <div>11,000</div>
                    <div className="text-[#05C165] font-bold text-[12px]">
                      +89
                    </div>
                  </div>
                  <div className="text-[12px] font-semibold">E-mail</div>
                </div>
                <div className="border border-[#DADCE0] h-[45px]"></div>
                <div className="flex flex-col items-start">
                  <div className="text-[16px] font-bold flex justify-center items-center gap-1">
                    <div>145</div>
                    <div className="text-[#05C165] font-bold text-[12px]">
                      +89
                    </div>
                  </div>
                  <div className="text-[12px] font-semibold">Social Share</div>
                </div>
                <div className="border border-[#DADCE0] h-[45px]"></div>
                <div className="flex flex-col items-start">
                  <div className="text-[16px] font-bold flex justify-center items-center gap-1">
                    <div>145</div>
                    <div className="text-[#05C165] font-bold text-[12px]">
                      +89
                    </div>
                  </div>
                  <div className="text-[12px] font-semibold">Unique Link</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
              userIcon={UsersIcon}
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
              userIcon={GroupUsersIcon}
            />
          </div>
        </div>
      </div>
      <MobileSideBar isOpen={isSidebarOpen} onClose={handleToggleSidebar} />
    </div>
  );
};

export default Assesment;
