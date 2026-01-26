import React from "react";
import Navbar from "../Components/Navbar2";
import Footer from "../Components/Footer";

const FypIdeas = () => {
  const topics = [
    {
      category: "Data Mining",
      description:
        "Explore innovative Data Mining projects and research ideas.",
      links: [
        {
          name: "Latest Data Mining Projects Topics & Ideas",
          url: "https://nevonprojects.com/latest-data-mining-projects-topics-ideas/",
        },
      ],
    },
    {
      category: "Machine Learning & Deep Learning",
      description:
        "Advanced ML and DL projects suitable for academic and research excellence.",
      links: [
        {
          name: "Top 35+ Machine Learning Projects & Deep Learning Ideas",
          url: "https://nevonprojects.com/top-35-machine-learning-deep-learning-projects-ideas/",
        },
      ],
    },
    {
      category: "Dot Net Projects",
      description: "Professional ASP.NET, C#, and MVC based project ideas.",
      links: [
        {
          name: "Top Asp.net & C# Projects on MVC Ajax Bootstrap",
          url: "https://nevonprojects.com/top-asp-net-c-sharp-projects-on-mvc-ajax-bootstrap/",
        },
      ],
    },
    {
      category: "iOS Based Projects",
      description: "Explore creative mobile development projects for iOS.",
      links: [
        {
          name: "Latest iOS Projects Ideas & Topics With Source Codes",
          url: "https://nevonprojects.com/latest-ios-projects-ideas-topics-source-codes/",
        },
      ],
    },
    {
      category: "Data Science",
      description:
        "Latest Data Science FYP ideas ranging from beginner to advanced.",
      links: [
        {
          name: "Top 30+ Data Science Projects Ideas Basic to Advanced",
          url: "https://nevonprojects.com/top-data-science-projects-ideas-basic-advanced/",
        },
      ],
    },
    {
      category: "Artificial Intelligence",
      description:
        "Cutting-edge Artificial Intelligence and automation projects.",
      links: [
        {
          name: "Latest Artificial Intelligence Project Topics & Ideas",
          url: "https://nevonprojects.com/artificial-intelligence-project-topics-ideas/",
        },
        {
          name: "Final Year Artificial Intelligence Projects (Projectwale)",
          url: "https://projectwale.com/artificial-intelligence-projects/",
        },
      ],
    },
    {
      category: "Information Security",
      description:
        "Explore trending Cybersecurity and Ethical Hacking project ideas.",
      links: [
        {
          name: "Latest Information Security Project Ideas & Topics",
          url: "https://nevonprojects.com/information-security-project-topics-ideas/",
        },
      ],
    },
    {
      category: "Miscellaneous Projects",
      description:
        "A mix of trending project topics for Computer Science & IT students.",
      links: [
        {
          name: "Best Final Year Project Ideas For IT Students 2021",
          url: "https://itsourcecode.com/it-projects/best-final-year-project-ideas/",
        },
        {
          name: "Final Year Project Ideas | Project Topics & Ideas",
          url: "https://final-year-projects.in/",
        },
        {
          name: "Computer Science Project Ideas For Final Year Student",
          url: "https://lovelycoding.org/computer-science-project-ideas-for-final-year/",
        },
        {
          name: "Computer Science Project Topics & Materials (PDF, DOC)",
          url: "https://www.projecttopics.org/",
        },
        {
          name: "Computer and IT Engineering Projects - Project Ideas",
          url: "https://www.projectideas.com/",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col mt-20 h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-4">
            Potential Sources for FYP Topics
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10">
            Explore some trusted and creative platforms to discover unique Final
            Year Project (FYP) ideas and topics. Click on the links below to
            visit project sources for each category.
          </p>
        </div>

        {/* Project Categories */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <h2 className="text-xl font-bold dark:text-white mb-2">
                {topic.category}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {topic.description}
              </p>
              <ul className="space-y-2 text-sm">
                {topic.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-primary hover:text-green-400 transition-colors underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FypIdeas;
