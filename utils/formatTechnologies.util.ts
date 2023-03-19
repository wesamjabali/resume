const technologiesSeparator = " • ";
export const formatTechnologies = (technologies: string[]) => {
  return technologies.join(technologiesSeparator);
};
