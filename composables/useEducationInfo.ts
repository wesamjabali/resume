import { formatTechnologies } from "../utils/formatTechnologies.util";

const useEducationInfo = () => {
  return {
    title: "Education",
    diploma: {
      imgSrc:
        "https://raw.githubusercontent.com/wesamjabali/resume/main/public/images/diploma.jpg",
      imgAlt: "Diploma",
    },
    info: [
      {
        header: "Computer Science - Depaul University",
        description:
          "Graduated Summa Cum Laude at DePaul University, and created automation tools used by thousands of students and faculty to facilitate courses during the COVID-19 pandemic.",
        footer: formatTechnologies(["3.94 GPA", "Computer Science"]),
        left: "2017 - 2021",
      },
    ],
  };
};

export { useEducationInfo };
