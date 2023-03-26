import { SplitSectionProps } from "../components/Base/SplitSection/SplitSection.types";
import { formatTechnologies } from "../utils/formatTechnologies.util";

const usePersonalProjects = (): SplitSectionProps => {
  const projects = [
    {
      left: "present",
      headerUrl: "https://assemblycore.com",
      description:
        "Quality Control software which helps small American manufacturers to optimize their processes.",
      header: "AssemblyCore",
      technologies: ["GraphQL", "TypeScript", "Vue", "AWS", "Docker"],
    },
    {
      left: "2023",
      headerUrl: "https://github.com/wesamjabali/resume",
      description:
        "A minimal resume template website built with Vue - responsive and printable.",
      header: "Resume Template",
      technologies: ["Vue", "TypeScript"],
    },
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
        "AWS",
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
