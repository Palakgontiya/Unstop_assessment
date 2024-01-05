import { useState } from "react";
import AssesmentModal from "../modal/AssesmentModal";

const NewAssesmentCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full md:w-[360px] md:h-[210px] h-[159px] bg-[#F6F8FA] text-[#1C4980] flex flex-col justify-center items-center rounded-xl md:p-4 gap-2 border-2 border-dotted border-[#BACBD5]">
      <div
        onClick={() => setIsModalOpen(true)}
        className="md:w-[70px] md:h-[70px] w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center cursor-pointer"
      >
        <img
          src="images/plus.png"
          alt=""
          className="md:h-[20px] md:w-[20px] h-[18px] w-[18px]"
        />
      </div>
      <div className="font-semibold md:text-[18px] text-[16px]">New Assesment</div>
      <div className="font-semibold text-[13px] text-center">
        From here you can add questions of multiple types<br /> like
         MCQs, subjective (text or paragraph)!
      </div>
      {isModalOpen && (
        <div className="absolute w-full top-0 left-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
          <AssesmentModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </div>
      )}
    </div>
  );
};

export default NewAssesmentCard;
