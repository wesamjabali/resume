import { SplitSectionProps } from "../components/Base/SplitSection/SplitSection.types";
import { formatTechnologies } from "../utils/formatTechnologies.util";

const useWorkExperience = (): SplitSectionProps => {
  const jobs: Array<{
    company: string;
    headerUrl: string;
    position: string;
    description: string;
    technologies: string[];
    startDate: string;
    endDate: string;
  }> = [
    {
      company: "ALDI SÜD",
      headerUrl: "https://www.aldi-sued.de/",
      position: "Software Development Engineer III",
      description:
        "Building the future of ALDI's global digital experience, on an assignment in Düsseldorf, Germany.",
      technologies: ["Vue", "Nuxt", "TypeScript", "SCSS", "Jest", "Express"],
      startDate: "2023",
      endDate: "present",
    },
    {
      company: "ALDI",
      headerUrl: "https://new.aldi.us/",
      position: "Software Development Engineer III",
      description:
        "Building the future of ALDI's global digital experience, focusing on the US market.",
      technologies: ["Vue", "Nuxt", "TypeScript", "SCSS", "Jest", "Express"],
      startDate: "2021",
      endDate: "present",
    },
    {
      company: "ChiBatterySystems",
      headerUrl: "https://chibatterysystems.com/",
      position: "Software Developer",
      description:
        "Created battery hardware products for the budding personal electric vehicle industry.",
      technologies: ["Vue", "Nuxt", "TypeScript", "Arduino", "C"],
      startDate: "2019",
      endDate: "2021",
    },
    {
      company: "Lewis University",
      headerUrl: "https://lewisu.edu/",
      position: "Research Assistant",
      description: `Analysed C. elegans somatic nervous system development using machine learning to predict each neuron's function. \
The algorithm was able to predict correctly with 81% accuracy. \
The results were presented to other scientists and financial supporters.`,
      technologies: ["Python", "Pandas", "Numpy"],
      startDate: "2019",
      endDate: "2020",
    },
  ];

  const formattedJobs = jobs.map((job) => ({
    header: `${job.position} - ${job.company}`,
    headerUrl: job.headerUrl,
    description: job.description,
    left: `${job.startDate} - ${job.endDate}`,
    footer: formatTechnologies(job.technologies),
  }));

  return {
    title: "Work Experience",
    info: formattedJobs,
  };
};

export { useWorkExperience };
