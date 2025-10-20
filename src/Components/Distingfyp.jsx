import React from "react";
import Navbar from "./Navbar2";
import Footer from "./Footer";

const DistinguishedFYPs = () => {
  const projects = [
    {
      title: "Activity Recognition in Industry 4.0",
      supervisor: "Dr. Wajahat Mahmood Qazi",
      members: "Muhammad Kashif, Muhammad Zubair, Anas Abdullah",
      batch: "2017-FALL",
      event: "Funding for FYP's from IGNITE",
      area: "Artificial Intelligence",
      year: "2021",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "FMAT Analyzation System",
      supervisor: "Sana Rizwan",
      members: "Hafiz Waqas Akbar",
      batch: "2017-FALL",
      event: "Funding for FYP's from IGNITE",
      area: "Software & Hardware Engineering",
      year: "2021",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "Surveilia",
      supervisor: "Dr. Usama Ijaz Bajwa",
      members: "Ifrah Tehleel, Nauman Akram, Jan Muhammad",
      batch: "2017-Spring",
      event: "Funding for FYP's from IGNITE",
      area: "Video Analytics",
      year: "2020",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "Live Bus",
      supervisor: "Dr. Usama Ijaz Bajwa",
      members: "Faran Ayyaz, Tehreem Anjum, Faryal Khalid",
      batch: "2017-Spring",
      event: "Funding for FYP's from IGNITE",
      area: "Assistive Technologies",
      year: "2020",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "Wearable Recognition Using Artificial Intelligence",
      supervisor: "Muhammad Shahid Bhatti",
      members: "Ahsan Ali, Shahid Raza, Hammad Rafique",
      batch: "2017-Spring",
      event: "Funding for FYP's from IGNITE",
      area: "Artificial Intelligence",
      year: "2020",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "TryNBuy: A Marketplace for Online Shopping with Virtual Dressing",
      supervisor: "Mr. Mohsin Mehdi",
      members: "Waleed Fawad, Anum Masood, Fraz Irfan",
      batch: "2013-Spring",
      event: "Funding for FYP's from IGNITE",
      area: "3D Graphics",
      year: "2016",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "Limited Campus Automation System Tool",
      supervisor: "Mr. Mohsin Mehdi",
      members: "Ahsan Noor, Hamza Rasool, Zain Attiq",
      batch: "2014-FALL",
      event: "Funding for FYP's from IGNITE",
      area: "IoT Application Development",
      year: "2018",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "Adaptive Traffic Signal Management System Using ML",
      supervisor: "Dr. Allah Bux",
      members: "Muhammad Shaoor Shahid, Usama Abdul Sattar, M. Saleem",
      batch: "2017-Spring",
      event: "Funding for FYP's from IGNITE",
      area: "Machine Learning",
      year: "2020",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "Pakistan’s Hall of Fame",
      supervisor: "Dr. Usama Ijaz Bajwa",
      members: "Ata Ullah Butt, Hasham Alam, Rija Tariq",
      batch: "2016-Spring",
      event: "DICE-IET 2020",
      area: "Image Processing, Machine Learning",
      year: "2020",
      distinction: "🥇 1st Position in DICE-IET Project Competition",
    },
    {
      title: "Video Live Streaming and TV Broadcast Worldwide",
      supervisor: "Mr. Aamer Mahmood",
      members: "Syed Shahood Hasan, Syeda Fatima Hasani",
      batch: "2016-Spring",
      event: "Visio Spark 2019",
      area: "Application Development",
      year: "2019",
      distinction: "🥇 1st Position in Visio Spark Software Projects",
    },
    {
      title: "Kitaab Ki Duniya",
      supervisor: "Imran Raza",
      members: "Muhammad Usman Tariq, Fareena, Zaheer Ahmad",
      batch: "2015-FALL",
      event: "Funding for FYP's from IGNITE",
      area: "Application Development",
      year: "2019",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "Intelligent BCI Health Care System for Neuro-Rehabilitation",
      supervisor: "Imran Raza",
      members: "Muhammad Ali Malik, Fareeha Sohail, Tayyaba Akram",
      batch: "2016-FALL",
      event: "Funding for FYP's from IGNITE",
      area: "Brain Computer Interfacing",
      year: "2019",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "Module Based Organized Document Classification System",
      supervisor: "Humera Niaz",
      members: "Muhammad Talha Akram, Ali Asif, Masroor Haider Naqvi",
      batch: "2016-Spring",
      event: "Funding for FYP's from IGNITE",
      area: "Web Development",
      year: "2019",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "Speaker Identification Using Deep Learning",
      supervisor: "Muhammad Shahid Bhatti",
      members: "Usama Mushtaq, Aweem Ashar",
      batch: "2016-Spring",
      event: "Funding for FYP's from IGNITE",
      area: "Machine Learning",
      year: "2019",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "Wheat Guard",
      supervisor: "Dr. Usama Ijaz Bajwa",
      members: "Faiz ul Bari Qureshi, Haseeb Ali, Muhammad Ansab bin Mahmood",
      batch: "2015-Spring",
      event: "Plan9 Incubation",
      area: "Agriculture Informatics",
      year: "2019",
      distinction: "Project incubated in Plan9 (Technology Incubator)",
    },
    {
      title: "—",
      supervisor: "Mr. Muhammad Shahid Bhatti",
      members: "Qurat-ul-Ain, Sana Khan, Waheed Abbas",
      batch: "2011-Fall",
      event: "Innovative Idea Competition",
      area: "—",
      year: "2015",
      distinction: "🥈 2nd Position in ICT On-Spot Innovative Idea Competition",
    },
    {
      title: "E-Mum Care",
      supervisor: "Mr. Muhammad Shahid Bhatti",
      members: "Muhammad Abubakar, Ahmad Hassan, Fawad Azeem",
      batch: "2011-Fall",
      event: "Vision ICT-2015",
      area: "Mobile Computing",
      year: "2015",
      distinction:
        "🥈 2nd Position in Vision ICT-2015 Software Project Competition",
    },
    {
      title: "B’Kicks",
      supervisor: "Mr. Mohsin Mehdi",
      members: "Abubakar Ashraf, Bilal Ashraf",
      batch: "2012-FALL",
      event: "DICE Project Competition",
      area: "Sensors",
      year: "2016",
      distinction: "🥇 1st Position in DICE Project Competition",
    },
    {
      title: "COMSATS Queue Management System",
      supervisor: "Mr. Muhammad Shahid Bhatti",
      members: "Arsalan ud Shafique, Jahanzeb Tahir, Farhan Sheikh",
      batch: "2014-Spring",
      event: "DICE Project Competition",
      area: "Mobile Computing",
      year: "2017",
      distinction: "🥉 3rd Position in DICE Project Competition",
    },
    {
      title: "Semantic Labelling of HSR Images",
      supervisor: "Dr. Usama Ijaz Bajwa",
      members: "Muhammad Moeed Khalid, Ali Raza",
      batch: "2015-Spring",
      event: "Funding for FYP's from IGNITE",
      area: "Image Processing",
      year: "2018",
      distinction: "Secured funding from IGNITE",
    },
    {
      title:
        "Adaptive Decision Support System for Agriculture & Irrigation in Pakistan",
      supervisor: "Mr. Imran Raza",
      members: "Muhammad Saad Amin, Nida Fatima Sandhu, Zain Khalil",
      batch: "2014-FALL",
      event: "Funding for FYP's from IGNITE",
      area: "Machine Intelligence",
      year: "2018",
      distinction: "Secured funding from IGNITE",
    },
    {
      title: "—",
      supervisor: "Prof. Dr. Zulfiqar Habib, Dr. Safee Ullah Chaudhary",
      members: "Hira Ameen, Sidra Fatima, Mah Rukh Ali",
      batch: "2010-Fall",
      event: "Vision ICT 2014",
      area: "Computer Graphics",
      year: "2014",
      distinction:
        "🥇 Top Position in Vision ICT; Selected for National ICTR&D Fund",
    },
    {
      title: "—",
      supervisor: "Dr. Rao Adeel Nawab, Dr. Muhammad Humayoun",
      members: "Muhammad Uzair, Umer Farz, Saba Aslam",
      batch: "2010-Fall",
      event: "Startup Competition",
      area: "Artificial Intelligence, NLP",
      year: "",
      distinction: "",
    },
  ];

  return (
    <div>
      <section className="h-screen  bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-full mx-auto">
          <Navbar />

          {/* Page Header */}
          <h1 className="text-5xl font-extrabold mt-12 text-green-700 text-center mb-4">
            Distinguished Final Year Projects (FYPs)
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Department of Computer Science, University Institute of Information
            Technology (UIIT), PMAS-Arid Agriculture University Rawalpindi.
            <br />
            These projects have earned recognition, funding, or distinction at
            national and international levels.
          </p>

          {/* Table Container */}
          <div className="overflow-x-auto shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/80 dark:bg-gray-900/60">
            <table className="min-w-full border-collapse text-sm md:text-base">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-4 px-4 text-left">Project Title</th>
                  <th className="py-4 px-4 text-left">Supervisor(s)</th>
                  <th className="py-4 px-4 text-left">Team Members</th>
                  <th className="py-4 px-4 text-left">Batch</th>
                  <th className="py-4 px-4 text-left">Event</th>
                  <th className="py-4 px-4 text-left">Area</th>
                  <th className="py-4 px-4 text-left">Year</th>
                  <th className="py-4 px-4 text-left">Distinction</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((proj, index) => (
                  <tr
                    key={index}
                    className={`transition-colors duration-300 ${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700"
                        : "bg-gray-50 dark:bg-gray-900 hover:bg-green-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <td className="py-4 px-4 font-semibold text-gray-800 dark:text-gray-100">
                      {proj.title}
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {proj.supervisor}
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {proj.members}
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {proj.batch}
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {proj.event}
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {proj.area}
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {proj.year}
                    </td>
                    <td className="py-4 px-4 text-green-700 font-medium dark:text-green-400">
                      {proj.distinction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Line */}
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default DistinguishedFYPs;
