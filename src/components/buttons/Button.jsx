const Button = ({ icon, btnText, id, onClick, isClicked }) => {
  return (
    <>
      <div
        id={id}
        className={`flex flex-col justify-center items-center gap-2  rounded-lg py-3 w-[90px] cursor-pointer text-[#1C4980] ${
          isClicked ? "border border-[#0073E6] text-[#0073E6] bg-[#E5F1FC]" : ""
        }`}
        onClick={onClick}
      >
        <div className="w-[20px] h-[20px] flex justify-center items-center pointer-events-none ">
          <img
            className="w-full h-full object-cover "
            src={`/images/${icon}.png`}
            alt=""
          />
        </div>
        <div className=" text-[13px] font-semibold flex justify-center items-center pointer-events-none ">
          {btnText}
        </div>
      </div>
    </>
  );
};

export default Button;
