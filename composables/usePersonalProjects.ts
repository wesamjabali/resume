import { SplitSectionProps } from "~~/components/SplitSection/SplitSection.types";

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
    header: `${project.header} ↗`,
    footer: formatTechnologies(project.technologies),
  }));

  return {
    title: "Personal Projects",
    info: formattedProjects,
  };
};

export { usePersonalProjects };
