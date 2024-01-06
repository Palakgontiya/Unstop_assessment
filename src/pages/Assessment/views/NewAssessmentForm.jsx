import { useState } from "react";
import CancelIcon from "../../../assets/images/svg/Cancel";

const NewAssessmentForm = () => {
  const [skills, setSkills] = useState([
    "UI/UX & Design",
    "No of Questions",
    "Web Development",
    "UI/UX & Design",
    "No of Questions",
  ]); // State to hold selected skills
  const [newSkill, setNewSkill] = useState(""); // State to hold the newly entered skill

  const handleSkillInputChange = (e) => {
    setNewSkill(e.target.value); // Update the new skill as the user types
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]); // Add the new skill to the list of skills
      setNewSkill(""); // Clear the input after adding the skill
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-col gap-2 ">
        <label htmlFor="" className="text-[16px] ">
          Name of assessment
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="w-full border border-[#DADCE0] py-3 rounded-lg outline-none pl-4"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-[16px] ">
          Purpose of the test is
        </label>
        <div className="w-full flex justify-between items-center h-[50px]  ">
          <select
            id="purpose"
            className="w-full border border-[#DADCE0] py-3 rounded-lg outline-none pl-4"
          >
            <option value="">Select</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-[16px]">
          Description
        </label>
        <div className="w-full flex justify-between items-center h-[50px]  ">
          <select
            id="purpose"
            className="w-full border border-[#DADCE0] py-3 rounded-lg outline-none pl-4"
          >
            <option value="">Select</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-[16px]">
          Skills
        </label>
        <div className="w-100 border border-[#DADCE0] rounded-xl p-2">
          {skills.length > 0 && (
            <div className="w-full flex flex-wrap gap-2 border-b border-gray-300 py-2 outline-none ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#DDEDFF] flex items-center gap-2 rounded-xl px-2 py-1 font-semibold"
                >
                  <p className="text-[12px]">{skill}</p>
                  <p
                    className="text-[12px] cursor-pointer"
                    onClick={() => {
                      const updatedSkills = skills.filter(
                        (_, i) => i !== index
                      );
                      setSkills(updatedSkills);
                    }}
                  >
                    <CancelIcon fill="#1C4980" width={22} height={22} />
                  </p>
                </div>
              ))}
            </div>
          )}
          <input
            type="text"
            placeholder="Type here"
            value={newSkill}
            onChange={handleSkillInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddSkill();
              }
            }}
            className="w-100 w-[100%] my-2 rounded-lg px-1 outline-none border border-gray-300 border-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="" className="text-[16px]">
          Duration of assessment
        </label>
        <input
          type="text"
          placeholder="HH:MM:SS"
          className="w-full border border-[#DADCE0] py-3 rounded-lg outline-none pl-4"
        />
      </div>

      <button
        className="w-full text-white bg-[#0073E6] rounded-xl py-2 font-semibold"
        type="submit"
      >
        Save
      </button>
    </div>
  );
};

export default NewAssessmentForm;
