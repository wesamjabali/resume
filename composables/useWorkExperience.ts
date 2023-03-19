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
        "Created battery hardware products for the budding personal electric vehicle industry.",
      technologies: ["Vue", "Nuxt", "TypeScript", "Arduino", "C", "Hardware"],
      startDate: "2019",
      endDate: "2021",
    },
    {
      company: "Depaul University",
      companyUrl: "https://depaul.edu/",
      position: "Student",
      description:
        "Graduated Summa Cum Laude at DePaul University, and created automation tools used by thousands of students and faculty to facilitate courses during the COVID-19 pandemic.",
      technologies: ["3.94 GPA", "Computer Science"],
      startDate: "2017",
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
