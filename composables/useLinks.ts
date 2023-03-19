const useLinks = () => {
  const links = [
    {
      name: "Github",
      href: "https://github.com/wesamjabali",
      urlDisplay: "@wesamjabali",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/wesamjabali/",
      urlDisplay: "Wesam Jabali",
    },
    {
      name: "Email",
      href: "mailto:wesamjabali@icloud.com",
      urlDisplay: "wesamjabali@icloud.com",
    },
  ];

  const formattedLinks = links.map((link) => ({
    ...link,
    urlDisplay: `${link.urlDisplay} ↗`,
  }));

  return {
    title: "Links",
    links: formattedLinks,
  };
};

export { useLinks };
