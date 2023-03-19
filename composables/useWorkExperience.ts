const useWorkExperience = () => {
  const jobs = [
    {
      company: "ALDI",
      companyUrl: "https://new.aldi.us/",
      position: "Software Development Engineer III",
      description: "Building the future of ALDI's digital experience",
      technologies: ["Vue", "Nuxt", "TypeScript", "SCSS", "Jest", "Express"],
      startDate: "2021",
      endDate: "present",
    },
    {
      company: "ChiBatterySystems",
      companyUrl: "https://chibatterysystems.com/",
      position: "Software Developer",
      description:
        "Creating and building battery hardware products for the budding personal electric vehicle industry.",
      technologies: ["Vue", "Nuxt", "TypeScript", "Arduino", "C", "Hardware"],
      startDate: "2019",
      endDate: "2021",
    },
  ];
  const technologiesSeparator = " • ";

  const formattedJobs = jobs.map((job) => ({
    ...job,
    technologies: job.technologies.join(technologiesSeparator),
    header: `${job.position} - ${job.company} ↗`,
  }));

  return {
    title: "Work Experience",
    jobs: formattedJobs,
  };
};

export { useWorkExperience };
