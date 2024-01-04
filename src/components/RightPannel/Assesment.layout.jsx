import AssesmentCard from "../cards/AssesmentCrad.layout";
import NewAssesmentCard from "../cards/NewAssesmentCard";

const Assesment = () => {
  return (
    <div className="bg-white  w-[86%] rounded-xl flex flex-col ">
      {/* navbar for assesment page */}
      <div className="w-full h-[70px] border-b border-[#DDE5EA] flex justify-between items-center px-5">
        <div className=" flex justify-between items-center gap-5 h-full ">
          <h1 className="text-[#1C4980] font-semibold text-[22px]">Assessment</h1>
          <div className="border border-[#DADCE0] h-[45px]"></div>
          <div className="flex flex-col justify-end h-full items-center  gap-4">
            <h1 className="text-[#0073E6] font-semibold text-[16px] ">
              My Assesments
            </h1>
            <div className="border-2 border-[#0073E6] w-full"></div>
          </div>
        </div>
      </div>
      {/* first section of main container of the assesment page */}
      <div className="w-full p-5 flex flex-col  items-start gap-5 text-[#1C4980] ">
        <h1 className=" text-[19px] font-semibold">Assesments Overview</h1>
        <div className="border h-[114px] w-full rounded-xl flex justify-start items-center ">
          {/* one */}
          <div className="h-full border-r-2 py-4 px-5 flex flex-col items-start gap-4">
            <h2 className="font-semibold text-[14px]">Total Assesments</h2>
            <div className="flex justify-center items-center gap-[10px]">
              <div className="flex justify-center items-center rounded-xl bg-[#EBE8FD] h-[40px] w-[40px]">
                <img
                  className="h-[50%] w-[50%]"
                  src="/images/view_agenda.png"
                  alt="view"
                />
              </div>
              <div className="text-[20px] font-bold flex justify-center items-center">
                <div>34</div>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="h-full w-[369px] border-r-2 py-4 px-5 flex flex-col items-start gap-3">
            <h2 className="font-semibold text-[14px]">Candidates</h2>
            <div className="flex justify-center items-center gap-4 ">
              <div className="flex justify-center items-center rounded-xl bg-[#EBE8FD] h-[40px] w-[40px]">
                <img
                  className="h-[50%] w-[50%]"
                  src="/images/group.png"
                  alt="view"
                />
              </div>
              <div className="flex flex-col items-start ">
                <div className="text-[20px] font-bold flex items-center gap-1 ">
                  <div>11,145</div>
                  <div className="text-[#05C165] font-bold text-[12px]">
                    +89
                  </div>
                </div>
                <div className="text-[12px] font-semibold">Total Candidate</div>
              </div>
              <div className="border border-[#DADCE0] h-[45px]"></div>
              <div className="flex flex-col items-start">
                <div className="text-[20px] font-bold flex justify-center items-center gap-1">
                  <div>1,14</div>
                  <div className="text-[#05C165] font-bold text-[12px]">
                    +89
                  </div>
                </div>
                <div className="text-[12px] font-semibold">Who Attempted</div>
              </div>
            </div>
          </div>
          {/* three */}
          <div className="h-full w-[400px] border-r-2 py-4 px-5 flex flex-col items-start gap-3">
            <h2 className="font-semibold text-[14px]">Candidates Source</h2>
            <div className="flex justify-center items-center gap-4 ">
              <div className="flex justify-center items-center rounded-xl bg-[#FCE8EF] h-[40px] w-[40px]">
                <img
                  className="h-[50%] w-[50%]"
                  src="/images/captive_portal.png"
                  alt="view"
                />
              </div>
              <div className="flex flex-col items-start ">
                <div className="text-[20px] font-bold flex items-center gap-1 ">
                  <div>11,000</div>
                  <div className="text-[#05C165] font-bold text-[12px]">
                    +89
                  </div>
                </div>
                <div className="text-[12px] font-semibold">E-mail</div>
              </div>
              <div className="border border-[#DADCE0] h-[45px]"></div>
              <div className="flex flex-col items-start">
                <div className="text-[20px] font-bold flex justify-center items-center gap-1">
                  <div>145</div>
                  <div className="text-[#05C165] font-bold text-[12px]">
                    +89
                  </div>
                </div>
                <div className="text-[12px] font-semibold">Social Share</div>
              </div>
              <div className="border border-[#DADCE0] h-[45px]"></div>
              <div className="flex flex-col items-start">
                <div className="text-[20px] font-bold flex justify-center items-center gap-1">
                  <div>145</div>
                  <div className="text-[#05C165] font-bold text-[12px]">
                    +89
                  </div>
                </div>
                <div className="text-[12px] font-semibold">Unique Link</div>
              </div>
            </div>
          </div>
          {/* four */}
          <div className="h-full  py-4 px-5 flex flex-col items-start gap-4">
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
        <h1 className=" text-[18px] font-semibold">My Assesments</h1>
        <div className="flex w-full justify-between items-center flex-wrap gap-4 ">
          <NewAssesmentCard
            icon1={"vector"}
            icon2={"3 dot"}
            icon3={"cal"}
            icon4={"attach"}
            title={"Math Assesment"}
            date={"20 Apr 2023"}
            duration={"00"}
            questions={"00"}
          />
  
          <AssesmentCard
            icon1={"vector"}
            icon2={"3 dot"}
            icon3={"cal"}
            icon4={"attach"}
            title={"Math Assesment"}
            date={"20 Apr 2023"}
            duration={"00"}
            questions={"00"}
          />
          <AssesmentCard
            icon1={"vector"}
            icon2={"3 dot"}
            icon3={"cal"}
            icon4={"attach"}
            title={"Math Assesment"}
            date={"20 Apr 2023"}
            duration={"00"}
            questions={"00"}
          />
        </div>
      </div>
    </div>
  );
};

export default Assesment;
