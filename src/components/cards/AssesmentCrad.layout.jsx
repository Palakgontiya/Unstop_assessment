const AssesmentCard = ({
  icon1,
  icon2,
  icon3,
  icon4,
  title,
  date,
  duration,
  questions,
}) => {
  return (
    //
    <div className="w-[360px] flex flex-col border rounded-xl p-4 gap-3">
      <div className="flex justify-between items-start w-full">
        <div className="h-[50px] w-[50px] flex justify-center items-center rounded-xl bg-[#EBE8FD]">
          <img
            src={`images/${icon1}.png`}
            alt=""
            className="h-[20px] w-[20px]"
          />
        </div>
        <img src={`images/${icon2}.png`} alt="" className="h-[20px] w-[20px]" />
      </div>
      <div className="flex flex-col w-full justify-start ">
        <h1 className="font-semibold text-[18px]">{title}</h1>
        <div className="flex justify-start items-center gap-2">
          <h2 className="text-[14px] font-semibold">Job</h2>
          <div className="border border-[#DADCE0] h-[16px]"></div>
          <img
            src={`images/${icon3}.png`}
            alt=""
            className="h-[12px] w-[12px]"
          />
          <p className="text-[12px] text-[#8DA4BF] font-semibold">{date}</p>
        </div>
      </div>
      <div className="w-full border-t-2 border-dotted border-[#BACBD5]"></div>
      <div className="flex w-full justify-between items-center">
        <div className="flex justify-between items-center gap-3">
          <div className="flex-flex-col">
            <p className="text-[14px] font-semibold">{duration}</p>
            <p className="text-[12px] font-semibold">Duration</p>
          </div>
          <div className="flex-flex-col">
            <p className="text-[14px] font-semibold">{questions}</p>
            <p className="text-[12px] font-semibold">Questions</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="py-1 px-3 rounded-3xl border gap-1 border-[#1C4980] flex justify-center items-center font-semibold text-[14px]">
            <img
              src={`images/${icon4}.png`}
              alt=""
              className="h-[16px] w-[16px]"
            />
            Share
          </button>
          <div className="flex justify-center items-center">
            <div>
              <img src="images/Lp1.png" alt="" />
            </div>
            <div className="z-10 ml-[-15px]">
              <img src="images/Lp2.png" alt="" />
            </div>
            <div className="z-20 ml-[-15px]">
              <img src="images/Lp3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssesmentCard;
