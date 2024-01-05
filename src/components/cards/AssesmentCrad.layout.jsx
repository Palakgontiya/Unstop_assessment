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
    <div className="w-full md:w-[360px] md:h-[210px] h-[159px] flex flex-col border rounded-xl p-4 gap-3">
      <div className="flex justify-between items-start w-full">
        <div className="md:flex-col flex gap-3 ">
          <div className="md:h-[50px] md:w-[50px] h-[50px] w-[50px]  flex justify-center items-center rounded-xl bg-[#EBE8FD]">
            <img
              src={`images/${icon1}.png`}
              alt=""
              className="md:h-[20px] md:w-[20px] h-[20px] w-[20px]"
            />
          </div>
          <div className="flex flex-col md:w-full justify-start gap-1 ">
            <h1 className="font-semibold md:text-[18px] text-[14px]">
              {title}
            </h1>
            <div className="flex justify-start items-center gap-2">
              <h2 className="md:text-[14px] text-[12px] font-semibold">Job</h2>
              <div className="border border-[#DADCE0] h-[16px]"></div>
              <img
                src={`images/${icon3}.png`}
                alt=""
                className="h-[12px] w-[12px]"
              />
              <p className="text-[12px] text-[#8DA4BF] font-semibold">{date}</p>
            </div>
          </div>
        </div>
        <img
          src={`images/${icon2}.png`}
          alt=""
          className="md:h-[20px] md:w-[20px] h-[16px] w-[16px]"
        />
      </div>

      <div className="w-full border-t-2 border-dotted border-[#BACBD5]"></div>
      <div className="flex w-full justify-between items-center">
        <div className="flex justify-between items-center gap-3">
          <div className="flex-flex-col">
            <p className="md:text-[14px] text-[12px] font-semibold">
              {duration}
            </p>
            <p className="md:text-[12px] text-[12px] font-semibold">Duration</p>
          </div>
          <div className="flex-flex-col">
            <p className="md:text-[14px] text-[12px] font-semibold">
              {questions}
            </p>
            <p className="md:text-[12px] text-[12px] font-semibold">
              Questions
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="py-1 md:px-3 px-2 rounded-3xl border gap-1 border-[#1C4980] flex justify-center items-center font-semibold text-[12px] md:text-[14px]">
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
