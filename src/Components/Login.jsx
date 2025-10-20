import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar2";
import Footer from "./Footer";

export default function FypHomePage() {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  // 🎬 Your video clips
  const videoClips = ["./clip1.mp4", "./clip3.mp4"];

  // ⏱ Auto change videos every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoClips.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // 🔑 Handle Login Role Navigation
  const handleLogin = (role) => {
    localStorage.setItem("role", role);
    if (role === "student") navigate("/student/dashboard");
    else if (role === "super-admin") navigate("/dashboard");
    else if (role === "supervisor") navigate("/supervisor/dashboard");
    setIsLoginModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col  bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="">
        <Navbar />
      </div>
      {/* 🎥 Hero Section with Smooth Video Transition */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {/* 🔹 Video Background Layer */}
        <div className="absolute inset-0">
          {videoClips.map((video, index) => (
            <video
              key={index}
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
                index === currentVideo ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        {/* 🔹 Overlay Content Layer (Always on Top) */}
        <div className="absolute inset-0 z-20 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Final Year Project Management System
          </h2>
          <p className="mt-2 max-w-2xl text-lg drop-shadow-md">
            Empowering students and supervisors to manage, track, and evaluate
            FYP progress with ease and transparency.
          </p>
          {/* <button
            onClick={() => setIsLoginModalOpen(true)}
            className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors shadow-lg"
          >
            Get Started
          </button> */}
        </div>
      </section>
      {/* 🔹 Main Content */}
      <main className="flex-1 w-full mx-auto mt-20  space-y-12">
        {/* Overview Section */}
        <section id="overview" className="text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-2 relative inline-block">
            Overview
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed max-w-5xl mx-auto  mt-4">
            Final Year Projects (FYP) at the University Institute of Information
            Technology (UIIT), PMAS-Arid Agriculture University Rawalpindi, are
            mandatory, team-based research and development undertakings
            initiated after the completion of six semesters. Each group is led
            by a designated leader to ensure effective coordination and project
            management. Supervisors and co-supervisors are formally assigned to
            provide academic and technical mentorship throughout the project
            lifecycle. FYP topics are finalized through mutual consultation
            between students and supervisors, ensuring alignment with emerging
            technologies and industry needs. These projects aim to cultivate
            professional competence, research aptitude, and innovative
            problem-solving skills among students. Regular evaluations,
            documentation, and presentations ensure continuous progress
            monitoring and quality assurance. The FYP serves as a capstone
            experience, bridging academic learning with real-world application
            and professional practice.
          </p>
        </section>
        <section
          id="director-message"
          className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* 🧑‍🏫 Left Side — Text */}
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold text-green-700 mb-6 relative inline-block">
                Message of the Director
                <span className="block h-1 bg-green-600 mt-2 w-28 animate-[growLine_1s_ease-in-out_forwards] rounded-full"></span>
              </h2>

              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  At the University Institute of Information Technology (UIIT),
                  Final Year Projects (FYPs) represent the culmination of our
                  students’ academic journey. These projects showcase their
                  technical skills, creativity, and ability to solve real-world
                  problems. We consider the FYP a vital component of
                  experiential learning—allowing students to apply classroom
                  knowledge to practical challenges under the mentorship of our
                  experienced faculty. Our framework encourages innovation,
                  research, and industry relevance, with a strong emphasis on
                  developing IT-based solutions that contribute to societal and
                  industrial growth. Through their FYPs, students gain valuable
                  experience in teamwork, leadership, and project management,
                  preparing them for professional success in the tech world.
                </p>
              </div>

              {/* 🖋️ Signature */}
              <div className="mt-10  w-full ">
                <div className="flex justify-end ">
                  <div>
                    <h1 className="text-black font-bold">Dr. Yaser Hafeez</h1>
                    <p className="text-black font-bold">Professor / Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 🖼️ Right Side — Director’s Image */}
            <div className="flex-1 flex justify-center">
              <img
                src="./director.jpeg"
                alt="Director of UIIT"
                className="w-[400px] h-[480px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>
        <section
          id="fyp-registration"
          className="relative bg-fixed w-full bg-center bg-cover py-24 px-6 md:px-12"
          style={{
            backgroundImage: "url('./assets/ariduni.jpeg')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative w-full  text-white">
            {/* Heading */}
            <h2 className="text-4xl font-extrabold text-green-400 mb-4 relative inline-block">
              FYP Registration
              <span className="block h-1 bg-green-500 mt-2 w-24 animate-[growLine_1s_ease-in-out_forwards] rounded-full"></span>
            </h2>

            <p className="text-gray-200 mt-3 text-lg leading-relaxed max-w-3xl">
              For FYP-I registration, students must meet the eligibility
              criteria and form a group of 2 to 3 members from the same
              department. Each group must have an internal supervisor from UIIT,
              even if working with an external supervisor. The registration form
              must be signed by the internal supervisor, as only their approval
              validates the FYP registration.
            </p>

            {/* Registration Rules */}
            <div className="mt-10 backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg">
              <h3 className="text-2xl font-semibold text-green-400 flex items-center gap-2 mb-4">
                <i className="fa-solid fa-scroll text-green-400 text-xl"></i>
                Important Guidelines for Project Selection:
              </h3>

              <ul className="list-disc pl-6 space-y-4 text-gray-50 dark:text-gray-300 leading-relaxed text-md">
                <li>
                  The project (web, mobile, or industrial) must be based on an
                  <b> innovative idea</b> — not just a simple{" "}
                  <b>CRUD application</b>.
                </li>
                <li>
                  Projects involving <b>research and development (R&D)</b> are
                  allowed, but <b>research work is not mandatory</b> for the
                  FYP.
                </li>
                <li>
                  The project should have a <b>wide enough scope</b> to justify
                  a<b> year-long effort</b> and <b>6 credit hours</b>. Provide
                  enough detail in your proposal to estimate this effort.
                </li>
                <li>
                  Proposed products must be <b>realistic</b> and{" "}
                  <b>applicable</b> in real-world scenarios.
                </li>
                <li>
                  The project must be <b>original</b> — it should not repeat an
                  existing or completed project.
                </li>
                <li>
                  If you are <b>extending a previous project</b>, clearly
                  mention:
                  <ul className="list-disc pl-8 mt-2 space-y-1">
                    <li>What the previous team did.</li>
                    <li>What improvements or extensions you plan to make.</li>
                  </ul>
                </li>
                <li>
                  Projects must comply with the <b>rules and regulations</b> for
                  students and faculty, as provided on the official{" "}
                  <b>FYP website</b>.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="position-holders"
          className="relative  w-full py-20 px-6 md:px-12 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800"
        >
          {/* 🔹 Header */}
          <div className="max-w-6xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-extrabold text-green-700 dark:text-green-400 mb-3">
              Position Holders in Computer Science (FYP II)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Celebrating the remarkable achievements of our talented students
              whose Final Year Projects demonstrate innovation, skill, and
              dedication.
            </p>
          </div>

          {/* 🔸 CS Cards */}
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* 1st Position */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-t-4 border-yellow-400 hover:scale-105 transition-transform duration-700">
              <img
                src="./cs1.jpeg"
                alt="GANs Project"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="absolute top-0 right-0 bg-yellow-400 text-white px-4 py-1 rounded-bl-xl font-bold">
                  1st Position
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  Verti Nutrient System
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <b>Supervisor:</b> Mr. Ahsan Arshad Abbasi
                </p>
                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  <li>FA21-BCS-001 Haider Abbas</li>
                  <li>FA21-BCS-109 Ahmed Hassan Tariq</li>
                  <li>FA21-BCS-136 Zaid Asghar Virk</li>
                </ul>
              </div>
            </div>

            {/* 2nd Position */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-t-4 border-gray-400 hover:scale-105 transition-transform duration-700">
              <img
                src="./cs2.jpeg"
                alt="Dispatch System"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="absolute top-0 right-0 bg-gray-400 text-white px-4 py-1 rounded-bl-xl font-bold">
                  2nd Position
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  Multi-Tenant Hyper Market Dispatching System
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <b>Supervisor:</b> Mr. M. Usman Akram
                </p>
                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  <li>FA21-BCS-079 M Numan Qamar</li>
                  <li>FA21-BCS-046 M Zain</li>
                  <li>FA21-BCS-139 Hirra Zahid</li>
                </ul>
              </div>
            </div>

            {/* 3rd Position */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-t-4 border-amber-700 hover:scale-105 transition-transform duration-700">
              <img
                src="/cs3.jpeg"
                alt="Deal Hunter"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="absolute top-0 right-0 bg-amber-700 text-white px-4 py-1 rounded-bl-xl font-bold">
                  3rd Position
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  Deal Hunter
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <b>Supervisor:</b> Mr. Zaheer Ahmad Gondal
                </p>
                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  <li>FA21-BCS-140 Musa Raza</li>
                  <li>FA21-BCS-103 Marhaba Eman</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 🔹 Divider for SE Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 inline-block border-b-4 border-green-500 pb-1">
              🧠 Position Holders in Software Engineering (FYP II)
            </h2>
          </div>

          {/* 🔸 SE Cards */}
          <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">
            {/* 1st Position */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-t-4 border-yellow-400 hover:scale-105 transition-transform duration-700">
              <img
                src="./se1.jpeg"
                alt="AI Chatbot"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="absolute top-0 right-0 bg-yellow-400 text-white px-4 py-1 rounded-bl-xl font-bold">
                  1st Position
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  AI-Powered Chatbot for Academic Support
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <b>Supervisor:</b> Dr. Ayesha Saeed
                </p>
                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  <li>FA21-BSE-022 Ahsan Raza</li>
                  <li>FA21-BSE-030 Mahnoor Fatima</li>
                  <li>FA21-BSE-058 Zainab Tariq</li>
                </ul>
              </div>
            </div>

            {/* 2nd Position */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-t-4 border-gray-400 hover:scale-105 transition-transform duration-700">
              <img
                src="se2.jpeg"
                alt="Blockchain System"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="absolute top-0 right-0 bg-gray-400 text-white px-4 py-1 rounded-bl-xl font-bold">
                  2nd Position
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  Blockchain-Based Attendance Management
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <b>Supervisor:</b> Mr. Bilal Ahmed
                </p>
                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  <li>FA21-BSE-004 Hamza Iqbal</li>
                  <li>FA21-BSE-078 Eman Tariq</li>
                  <li>FA21-BSE-089 Saif Ul Islam</li>
                </ul>
              </div>
            </div>

            {/* 3rd Position */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-t-4 border-amber-700 hover:scale-105 transition-transform duration-700">
              <img
                src="./se3.jpeg"
                alt="Smart Campus"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="absolute top-0 right-0 bg-amber-700 text-white px-4 py-1 rounded-bl-xl font-bold">
                  3rd Position
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  Smart Campus Automation System
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <b>Supervisor:</b> Ms. Fatima Zahra
                </p>
                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  <li>FA21-BSE-060 Ameer Hamza</li>
                  <li>FA21-BSE-045 Rimsha Iqbal</li>
                  <li>FA21-BSE-010 Danish Khan</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
