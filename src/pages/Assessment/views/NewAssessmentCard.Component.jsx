import { useState } from "react";
import PlusIcon from "../../../assets/images/svg/Plus";
import NewAssessmentForm from "./NewAssessmentForm";
import ModalView from "../../../components/templates/Modal/Modal.Component";

const NewAssesmentCard = () => {
  // State to handle the visibility of the Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full md:h-[220px] h-[159px] min-w-[330px] bg-[#F6F8FA] text-[#1C4980] flex flex-col justify-center items-center rounded-xl md:p-4 gap-2 border-2 border-dotted border-[#BACBD5]">
      <div
        onClick={() => setIsModalOpen(true)}
        className="md:w-[70px] md:h-[70px] w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center cursor-pointer"
      >
        <PlusIcon />
      </div>
      <div className=" md:text-[22px] text-[20px]">New Assesment</div>
      <div className="text-[12px] text-center">
        From here you can add questions of multiple types
        <br /> like MCQs, subjective (text or paragraph)!
      </div>
      {/* Logic for showing the Modal on Plus icon Click */}
      {isModalOpen && (
        <ModalView
          title="Create new assessment"
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        >
          <NewAssessmentForm />
        </ModalView>
      )}
    </div>
  );
};

export default NewAssesmentCard;
