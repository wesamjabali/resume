import { SplitSectionProps } from "~~/components/SplitSection/SplitSection.types";

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

  const formattedLinks = links.map((link) => ({
    ...link,
    header: `${link.header} ↗`,
  }));

  return {
    title: "Links",
    info: formattedLinks,
  };
};

export { useLinks };
