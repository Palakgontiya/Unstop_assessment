import { useState } from "react";
import AssesmentModal from "../modal/AssesmentModal";

const NewAssesmentCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="md:h-[220px] h-[159px] min-w-[300px] bg-[#F6F8FA] text-[#1C4980] flex flex-col justify-center items-center rounded-xl md:p-4 gap-2 border-2 border-dotted border-[#BACBD5]">
      <div
        onClick={() => setIsModalOpen(true)}
        className="md:w-[70px] md:h-[70px] w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center cursor-pointer"
      >
        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_0_553)">
            <path
              d="M31.6667 22.1667H21.6667V32.1667H18.3334V22.1667H8.33337V18.8333H18.3334V8.83334H21.6667V18.8333H31.6667V22.1667Z"
              fill="#0073E6"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_553">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className=" md:text-[22px] text-[20px]">New Assesment</div>
      <div className="text-[14px] text-center">
        From here you can add questions of multiple types
        <br /> like MCQs, subjective (text or paragraph)!
      </div>
      {isModalOpen && (
        <div className="absolute overflow-y-auto h-screen w-full p-6 top-0  left-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
          <AssesmentModal
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        </div>
      )}
    </div>
  );
};

export default NewAssesmentCard;
