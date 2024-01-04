const AssesmentModal = ({ setIsModalOpen, isModalOpen }) => {
  return (
    <div
      className={`flex flex-col w-[590px] bg-white rounded-xl text-[#1C4980] mb-3  ${isModalOpen
    ? "translate-y-0 transition-all duration-300"
    : "translate-y-full"
} `}
    >
      <div className="w-full p-5 flex justify-between items-center h-[70px] border-b border-[#DADCE0]">
        <h1 className="text-[20px] font-bold tracking-wide">
          Create new assesment
        </h1>
        <button onClick={() => setIsModalOpen(false)}>
          <img src="images/cut.png" alt="" />
        </button>
      </div>
      <div className="w-full p-5 flex justify-between items-center  ">
        <form action="" className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="" className="text-[16px] font-semibold">
              Name of assesment
            </label>

            <input
              type="text"
              placeholder="Type here"
              className="w-full border border-[#DADCE0] py-3 rounded-lg outline-none pl-4 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[16px] font-semibold">
              Purpose of the test is
            </label>

            <div className="w-full flex justify-between items-center h-[50px] border border-[#DADCE0] py-2 px-4 rounded-lg outline-none  ">
              <p className="font-semibold">Select</p>
              <img src="images/arrow.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[16px] font-semibold">
              Description
            </label>

            <div className="w-full flex justify-between items-center h-[50px] border border-[#DADCE0] py-2 px-4 rounded-lg outline-none  ">
              <p className="font-semibold">Select</p>
              <img src="images/arrow.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="" className="text-[16px] font-semibold">
              Skills
            </label>
            <div className="w-full flex flex-col border border-[#DADCE0] rounded-xl">
              <div className="flex w-full justify-start items-start flex-wrap gap-4 p-4 border-b  ">
                <div className="bg-[#DDEDFF] flex items-center justify-center gap-2 rounded-xl px-2 py-1 font-semibold">
                  <p className="text-[12px]">UI/UX and Design</p>
                  <p className="text-[12px]">X</p>
                </div>
                <div className="bg-[#DDEDFF] flex items-center justify-center gap-2 rounded-xl px-2 py-1 font-semibold">
                  <p className="text-[12px]">Web Development</p>
                  <p className="text-[12px]">X</p>
                </div>
                <div className="bg-[#DDEDFF] flex items-center justify-center gap-2 rounded-xl px-2 py-1 font-semibold">
                  <p className="text-[12px]">No of questions</p>
                  <p className="text-[12px]">X</p>
                </div>
                <div className="bg-[#DDEDFF] flex items-center justify-center gap-2 rounded-xl px-2 py-1 font-semibold">
                  <p className="text-[12px]">UI/UX and Design</p>
                  <p className="text-[12px]">X</p>
                </div>
                <div className="bg-[#DDEDFF] flex items-center justify-center gap-2 rounded-xl px-2 py-1 font-semibold">
                  <p className="text-[12px]">Web Development</p>
                  <p className="text-[12px]">X</p>
                </div>
              </div>

              <input
                type="text"
                placeholder="Type here"
                className="w-full rounded-b-xl  py-3 rounded-lg outline-none pl-4 "
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="" className="text-[16px] font-semibold">
              Duration of assesment
            </label>

            <input
              type="text"
              placeholder="HH:MM:SS"
              className="w-full border border-[#DADCE0] py-3 rounded-lg outline-none pl-4 "
            />
          </div>
          <button
            className="w-full text-white bg-[#0073E6] rounded-xl py-2 font-semibold"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssesmentModal;
