module.exports = {
  title: "RentalCal Documentation",
  description: "RentalCal Webtool Documentation",
  head: [
    ['link', { rel: "stylesheet", href: "/fonts.css"}],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Imprint", link: "/imprint/" },
      { text: "Contact", link: "/contact/" },
    ],
    sidebar: [
      {
        text: "The RentalCal Project",
        link: "/",
      },
      {
        text: "Introduction to the RentalCal Tool",
        children: [
          {
            text: "Introduction",
            link: "/introduction",
          },
          {
            text: "Functional Description",
            link: "/functionaldesc",
          },
          {
            text: "Software and Data Privacy",
            link: "/privacy",
          },
          {
            text: "Terms of Use",
            link: "/terms",
          },
        ],
      },
      {
        text: "Start of the RenalCal Tool",
        children: [
          {
            text: "Accessing the RentalCal Website",
            link: "/siteaccess",
          },
          {
            text: "Basic Menu Navigation",
            link: "/basicnav",
          },
          {
            text: "Project Partners and Terms of Use",
            link: "/projectpartners",
          },
          {
            text: "Tool Structure and Basic Functions",
            link: "/toolstructure",
          },
          {
            text: "Mode Selection",
            link: "/modeselection",
          },
        ],
      },
      {
        text: "Entries into the RentalCal Tool (Input)",
        children: [
          {
            text: "General Project Data (Freehand and Assisted Mode)",
            link: "/generalprojectdata",
          },
          {
            text: "Investor Type and Corporate Structure (Freehand and Assisted Mode)",
            link: "/investortype",
          },
          {
            text: "Property Description (Freehand Mode)",
            link: "/propertydesc",
          },
        ],
      },
    ],
  },
};
