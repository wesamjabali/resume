import { SplitSectionProps } from "../components/Base/SplitSection/SplitSection.types";

const useLinks = (): SplitSectionProps => {
  const links = [
    {
      left: "Github",
      headerUrl: "https://github.com/wesamjabali",
      header: "@wesamjabali",
    },
    {
      left: "LinkedIn",
      headerUrl: "https://www.linkedin.com/in/wesamjabali/",
      header: "Wesam Jabali",
    },
    {
      left: "Email",
      headerUrl: "mailto:wesamjabali@icloud.com",
      header: "wesamjabali@icloud.com",
    },
  ];

  return {
    title: "Links",
    info: links,
  };
};

export { useLinks };
