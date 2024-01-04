import { useState } from "react";
import AssesmentModal from "../modal/AssesmentModal";

const NewAssesmentCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-[360px] h-[210px] bg-[#F6F8FA] text-[#1C4980] flex flex-col justify-center items-center rounded-xl p-4 gap-2  border-2 border-dotted border-[#BACBD5]">
      <div
        onClick={() => setIsModalOpen(true)}
        className="w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center cursor-pointer"
      >
        <img src="images/plus.png" alt="" />
      </div>
      <div className="font-semibold text-[18px]">New Assesment</div>
      <div className="font-semibold text-[12px] text-center">
        From here you can add questions of multiple types like
        <br /> MCQs, subjective (text or paragraph)!
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
