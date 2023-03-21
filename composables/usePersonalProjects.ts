import { SplitSectionProps } from "../components/Base/SplitSection/SplitSection.types";
import { formatTechnologies } from "../utils/formatTechnologies.util";

const usePersonalProjects = (): SplitSectionProps => {
  const projects = [
    {
      left: "2021",
      headerUrl: "https://github.com/wesamjabali/bluedaemon-v2",
      description:
        "A Discord bot that allows universities to create and manage their own servers.",
      header: "BlueDaemon v2",
      technologies: [
        "Node",
        "TypeScript",
        "PostgresQL",
        "Express",
        "Prisma",
        "Docker",
      ],
    },
  ];

  const formattedProjects = projects.map((project) => ({
    ...project,
    footer: formatTechnologies(project.technologies),
  }));

  return {
    title: "Personal Projects",
    info: formattedProjects,
  };
};

export { usePersonalProjects };
