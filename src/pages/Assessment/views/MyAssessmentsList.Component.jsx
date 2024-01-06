import GroupUsersIcon from "../../../assets/images/svg/GroupUsers";
import UsersIcon from "../../../assets/images/svg/User";
import AssessmentCard from "./AssessmentCard.Component";
import NewAssesmentCard from "./NewAssessmentCard.Component";

const assessmentCardsData = [
  {
    icon1: "vector1",
    icon2: "dots",
    icon3: "calendar",
    icon4: "attachment",
    title: "Math Assessment",
    date: "20 Apr 2023",
    duration: "60 mins",
    questions: "30",
    userIcon: UsersIcon,
  },
  {
    icon1: "vector2",
    icon2: "dots",
    icon3: "calendar",
    icon4: "attachment",
    title: "English Assessment",
    date: "15 May 2023",
    duration: "45 mins",
    questions: "25",
    userIcon: GroupUsersIcon,
  },
  {
    icon1: "vector3",
    icon2: "dots",
    icon3: "calendar",
    icon4: "attachment",
    title: "Science Assessment",
    date: "10 Jun 2023",
    duration: "75 mins",
    questions: "40",
    userIcon: GroupUsersIcon,
  },
  {
    icon1: "vector4",
    icon2: "dots",
    icon3: "calendar",
    icon4: "attachment",
    title: "History Assessment",
    date: "25 Jul 2023",
    duration: "50 mins",
    questions: "35",
    userIcon: GroupUsersIcon,
  },
  {
    icon1: "vector5",
    icon2: "dots",
    icon3: "calendar",
    icon4: "attachment",
    title: "Physics Assessment",
    date: "5 Sep 2023",
    duration: "55 mins",
    questions: "28",
    userIcon: GroupUsersIcon,
  },
  {
    icon1: "vector6",
    icon2: "dots",
    icon3: "calendar",
    icon4: "attachment",
    title: "Chemistry Assessment",
    date: "18 Oct 2023",
    duration: "65 mins",
    questions: "32",
    userIcon: GroupUsersIcon,
  },
  {
    icon1: "vector6",
    icon2: "dots",
    icon3: "calendar",
    icon4: "attachment",
    title: "Chemistry Assessment",
    date: "18 Oct 2023",
    duration: "65 mins",
    questions: "32",
    userIcon: GroupUsersIcon,
  },
];

const MyAssessmentsList = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 flex-wrap">
      <div className="md:flex-1 lg:flex-1/3">
        <NewAssesmentCard
          icon1={"vector"}
          icon2={"3 dot"}
          icon3={"cal"}
          icon4={"attach"}
          title={"Math Assessment"}
          date={"20 Apr 2023"}
          duration={"00"}
          questions={"00"}
        />
      </div>
      {assessmentCardsData.map((cardData, index) => (
        <div key={index} className="md:flex-1 lg:flex-1/3">
          <AssessmentCard
            icon1={cardData.icon1}
            icon2={cardData.icon2}
            icon3={cardData.icon3}
            icon4={cardData.icon4}
            title={cardData.title}
            date={cardData.date}
            duration={cardData.duration}
            questions={cardData.questions}
            userIcon={cardData.userIcon}
          />
        </div>
      ))}
    </div>
  );
};

export default MyAssessmentsList;
