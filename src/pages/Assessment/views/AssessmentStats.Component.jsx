import CandidateSourceIcon from "../../../assets/images/svg/CandidateSource";
import CandidatesIcon from "../../../assets/images/svg/Candidates";
import TotalAssessmentIcon from "../../../assets/images/svg/TotalAssessment";
import TotalPurposeIcon from "../../../assets/images/svg/TotalPurpose";

const AssessmentStats = ({ isSectionVisible }) => {
  return (
    <>
      {/* first section of main container of the assesment page */}
      <div className="w-full p-5 md:flex md:flex-col hidden items-start   gap-5 text-[#1C4980] ">
        <h1 className=" text-[21px]  ">Assessments Overview</h1>
        <div className=" w-full flex justify-start  flex-1 flex-wrap border rounded-xl">
          {/* one */}
          <div
            style={{ flex: 16 }}
            className=" border-r py-4 px-5 flex flex-col items-start gap-4 "
          >
            <h2 className="font-semibold text-[16px]">Total Assesments</h2>
            <div className="flex justify-center items-center gap-[10px]">
              <div className="flex justify-center items-center rounded-xl bg-[#EBE8FD] h-[40px] w-[40px]">
                <TotalAssessmentIcon />
              </div>
              <div className="text-[22px] font-bold flex justify-center items-center">
                <div>34</div>
              </div>
            </div>
          </div>
          {/* two */}
          <div
            style={{  flex: 35 }}
            className="  w-[369px] border-r py-4 px-5 flex flex-col items-start gap-3"
          >
            <h2 className="font-semibold text-[16px]">Candidates</h2>
            <div className="flex justify-center items-center gap-4 ">
              <div className="flex justify-center items-center rounded-xl bg-[#EBE8FD] h-[40px] w-[40px]">
                <CandidatesIcon />
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
            style={{  flex: 50 }}
            className=" border-r py-4 px-5 flex flex-col items-start gap-3"
          >
            <h2 className="font-semibold text-[16px]">Candidates Source</h2>
            <div className="flex justify-center items-center gap-6 ">
              <div className="flex justify-center items-center rounded-xl bg-[#FCE8EF] h-[40px] w-[40px]">
                <CandidateSourceIcon />
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
            style={{ flex: 15 }}
            className="py-4 px-5 flex flex-col items-start gap-4 flex-basis-15"
          >
            <h2 className="font-semibold text-[14px]">Total Purpose</h2>
            <div className="flex justify-center items-center gap-[10px]">
              <div className="flex justify-center items-center rounded-xl bg-[#EBE8FD] h-[40px] w-[40px]">
                <TotalPurposeIcon />
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
                    <TotalAssessmentIcon />
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
                    <TotalPurposeIcon />
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
                  <CandidatesIcon />
                </div>
                <div className="flex flex-col items-start ">
                  <div className="text-[16px] font-bold flex items-center gap-1 ">
                    <div>11,145</div>
                    <div className="text-[#05C165] font-bold text-[10px]">
                      +89
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold">
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
                  <div className="text-[10px] font-semibold">Who Attempted</div>
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
                  <CandidateSourceIcon />
                </div>
                <div className="flex flex-col items-start ">
                  <div className="text-[16px] font-bold flex items-center gap-1 ">
                    <div>11,000</div>
                    <div className="text-[#05C165] font-bold text-[12px]">
                      +89
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold">E-mail</div>
                </div>
                <div className="border border-[#DADCE0] h-[45px]"></div>
                <div className="flex flex-col items-start">
                  <div className="text-[16px] font-bold flex justify-center items-center gap-1">
                    <div>145</div>
                    <div className="text-[#05C165] font-bold text-[12px]">
                      +89
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold">Social Share</div>
                </div>
                <div className="border border-[#DADCE0] h-[45px]"></div>
                <div className="flex flex-col items-start">
                  <div className="text-[16px] font-bold flex justify-center items-center gap-1">
                    <div>145</div>
                    <div className="text-[#05C165] font-bold text-[12px]">
                      +89
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold">Unique Link</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssessmentStats;
