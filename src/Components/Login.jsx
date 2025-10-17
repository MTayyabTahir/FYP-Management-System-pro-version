import React, { useState } from "react";
import { User, Users, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "/assets/arid.png";

export default function FypPortal() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("FYP Registration");

  const handleLogin = (role) => {
    localStorage.setItem("role", role);
    if (role === "student") navigate("/student/dashboard");
    else if (role === "super-admin") navigate("/dashboard");
    else if (role === "supervisor") navigate("/supervisor/dashboard");
  };

  const navItems = [
    "FYP Registration",
    "FYP Ideas",
    "FYP-1 Deliverable Deadlines and Details",
    "FYP-2 Deliverable Deadlines and Details",
    "FYP - Rules and General Submission Instructions",
    "Contacts",
  ];

  const contentMap = {
    // ✅ Registration
    "FYP Registration": (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold border-b-2 border-green-600 pb-1">
          FYP Registration
        </h2>
        <h3 className="font-bold text-lg text-green-700 underline">
          Registration Rules:
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            For FYP-1 registration, you have to meet the eligibility criteria.
          </li>
          <li>
            An FYP group must consist of 2 or 3 members{" "}
            <span className="text-red-600 font-semibold">
              (Cross-departmental groups are not allowed)
            </span>
            .
          </li>
          <li>
            If any FYP group is taking a project with an external supervisor,
            then it must have an internal supervisor (UIIT Faculty Member).
          </li>
        </ul>
        <h3 className="font-bold text-lg text-green-700 underline">
          Eligibility Criteria
        </h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>CGPA ≥ 2.0 (not on academic warning)</li>
          <li>No deficiency → Earned credit hours ≥ 100</li>
          <li>One-course deficiency → Earned credit hours ≥ 96</li>
          <li>Two-course deficiency → Earned credit hours ≥ 92</li>
        </ol>
      </div>
    ),

    // ✅ FYP Ideas
    "FYP Ideas": (
      <div className="space-y-4 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold border-b-2 border-green-600 pb-1">
          FYP Ideas
        </h2>
        <p className="font-medium">
          Some Potential Sources to Explore the FYP topics. Click the links
          below to view projects in each type:
        </p>
        <ul className="list-disc list-inside space-y-2 text-green-700">
          <li>
            <a
              href="https://nevonprojects.com/latest-data-mining-projects-topics-ideas/"
              target="_blank"
              className="underline"
            >
              Data Mining Project Ideas – Nevonprojects
            </a>
          </li>
          <li>
            <a
              href="https://nevonprojects.com/machine-learning-deep-learning-project-ideas/"
              target="_blank"
              className="underline"
            >
              Machine Learning & Deep Learning Project Ideas – Nevonprojects
            </a>
          </li>
          <li>
            <a
              href="https://nevonprojects.com/asp-net-projects/"
              target="_blank"
              className="underline"
            >
              Dot Net Projects – Nevonprojects
            </a>
          </li>
          <li>
            <a
              href="https://nevonprojects.com/ios-projects/"
              target="_blank"
              className="underline"
            >
              iOS Based Project Ideas – Nevonprojects
            </a>
          </li>
          <li>
            <a
              href="https://nevonprojects.com/data-science-project-ideas/"
              target="_blank"
              className="underline"
            >
              Data Science Project Ideas – Nevonprojects
            </a>
          </li>
          <li>
            <a
              href="https://nevonprojects.com/artificial-intelligence-project-ideas/"
              target="_blank"
              className="underline"
            >
              Artificial Intelligence Project Ideas – Nevonprojects
            </a>
          </li>
          <li>
            <a
              href="https://nevonprojects.com/information-security-project-ideas/"
              target="_blank"
              className="underline"
            >
              Information Security Projects – Nevonprojects
            </a>
          </li>
          <li>
            <a
              href="https://itsourcecode.com/mini-projects/final-year-project-ideas-for-it-students-2021/"
              target="_blank"
              className="underline"
            >
              Miscellaneous FYP Ideas – ITSourceCode
            </a>
          </li>
        </ul>
      </div>
    ),

    // ✅ FYP-1 Deliverables with Table
    "FYP-1 Deliverable Deadlines and Details": (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold border-b-2 border-green-600 pb-1">
          FYP-1 Deliverable Deadlines and Details
        </h2>

        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-2 border">Deliverable</th>
              <th className="p-2 border">Details</th>
              <th className="p-2 border">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">DI</td>
              <td className="p-2 border">Project Proposal</td>
              <td className="p-2 border">3rd Week – Fri, Sep 05, 2025</td>
            </tr>
            <tr>
              <td className="p-2 border"></td>
              <td className="p-2 border">Proposal Defence</td>
              <td className="p-2 border">5th Week – Fri, Sep 19, 2025</td>
            </tr>
            <tr>
              <td className="p-2 border">DII</td>
              <td className="p-2 border">
                FYP Report (6 Chapters R&D / 5 Chapters Dev)
              </td>
              <td className="p-2 border">8th Week – Wed, Oct 08, 2025</td>
            </tr>
            <tr>
              <td className="p-2 border"></td>
              <td className="p-2 border">Mid Evaluations</td>
              <td className="p-2 border">9/10th Week – Oct 17-24, 2025</td>
            </tr>
            <tr>
              <td className="p-2 border">DIII</td>
              <td className="p-2 border">
                FYP Report (Chapters 7, 9, 10 R&D / 7, 10 Dev)
              </td>
              <td className="p-2 border">13th Week – Wed, Nov 12, 2025</td>
            </tr>
            <tr>
              <td className="p-2 border"></td>
              <td className="p-2 border">
                Signed FYP Report Submission in Office
              </td>
              <td className="p-2 border">16th Week – Wed, Dec 03, 2025</td>
            </tr>
            <tr>
              <td className="p-2 border">Final</td>
              <td className="p-2 border">FYP Final Evaluations</td>
              <td className="p-2 border">17th Week – Fri, Dec 12, 2025</td>
            </tr>
          </tbody>
        </table>

        <h3 className="font-semibold text-green-700 mt-4">
          Deliverable I – Project Proposal
        </h3>
        <p>
          Download the template:{" "}
          <a href="" className="underline text-green-700">
            D1 Project Proposal Template
          </a>
          . You may see sample proposals for reference.
        </p>

        <h3 className="font-semibold text-green-700 mt-4">Deliverable II</h3>
        <p>
          Download the FYP report template:{" "}
          <a href="#" className="underline text-green-700">
            FYP Report Zip
          </a>
          . Submit chapters based on your project type.
        </p>

        <h3 className="font-semibold text-green-700 mt-4">
          FYP Mid Evaluations
        </h3>
        <p>
          Submit signed Compliance Form to academic office. Prepare 10–15 min
          presentation covering problem statement, scope, goals, methodology,
          prototype/data.
        </p>

        <h3 className="font-semibold text-green-700 mt-4">Deliverable III</h3>
        <p>
          Submit updated report (with feedback). Include implementation, test
          cases, results (R&D), and future work.
        </p>

        <h3 className="font-semibold text-green-700 mt-4">
          FYP Final Evaluations
        </h3>
        <p>
          Submit signed hard copy report with Turnitin (≤20%). Present
          prototype, goals achieved, and sync docs with app. Dressing must be
          formal, and medium English.
        </p>
      </div>
    ),

    // ✅ FYP-2
    "FYP-2 Deliverable Deadlines and Details": (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold border-b-2 border-green-600 pb-1">
          Deliverable II – FYP Report
        </h2>
        <p>
          Download the{" "}
          <a href="#" className="text-green-700 underline">
            FYP Report Zip
          </a>
          .
        </p>
        <h3 className="font-semibold text-green-700 mt-3">R&D Projects</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Introduction</li>
          <li>Project Vision</li>
          <li>Literature Review</li>
          <li>Software Requirement Specifications</li>
          <li>Proposed Methodology</li>
          <li>Design (High & Low level)</li>
        </ul>
      </div>
    ),

    // ✅ Rules
    "FYP - Rules and General Submission Instructions": (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold border-b-2 border-green-600 pb-1">
          FYP Rules & General Submission Instructions
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Minimum 5 supervisor meetings required (else F grade).</li>
          <li>Submit monthly progress reports.</li>
          <li>Deliverables must follow template & deadlines.</li>
          <li>Unsatisfactory deliverables → grade below A-.</li>
          <li>Late signed docs → no evaluations allowed.</li>
          <li>All assessments are individual.</li>
        </ul>
        <h3 className="text-lg font-semibold">General Instructions</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Use Two-Page Layout before submission.</li>
          <li>Get supervisor approval in advance.</li>
          <li>Submit only PDF (no Word/Zip).</li>
          <li>One submission per deliverable checked only.</li>
        </ul>
      </div>
    ),

    // ✅ Contacts last
    Contacts: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold border-b-2 border-green-600 pb-1">
          Contacts
        </h2>
        <div>
          <h3 className="font-bold text-green-700">
            Dr. Saif ur Rehman (Morning)
          </h3>
          <p>HEC Approved Supervisor</p>
          <p>Qualification: Ph.D, MS, MCS (Gold Medalist)</p>
          <p>
            Area of Interest: AI, Machine Learning, Data Mining, Graph Mining,
            Social Network Analysis
          </p>
          <p>Email: Saif@uaar.edu.pk</p>
        </div>
        <div>
          <h3 className="font-bold text-green-700">
            Dr. Kashif Sattar (Evening)
          </h3>
          <p>Assistant Professor, HEC Approved Supervisor</p>
          <p>Qualification: Ph.D, NUST</p>
          <p>
            Area of Interest: IoT Networks, Routing, Topology Control, Precision
            Agriculture
          </p>
          <p>Email: kashif@uaar.edu.pk</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Navbar */}
      <header className="w-full bg-white border-b shadow-sm px-8 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <div>
            <h1 className="font-bold text-lg text-green-700">
              University Institute of Information Technology
            </h1>
            <p className="text-sm text-gray-600">
              PMAS Arid Agriculture University
            </p>
          </div>
        </div>
        <nav className="flex gap-8 font-medium text-green-700">
          <a
            href="https://www.uaar.edu.pk/uiit/faculty.php?dept_id=31"
            target="_blank"
            className="hover:text-green-900 hover:underline"
          >
            FACULTY
          </a>
          <a
            href="https://www.uaar.edu.pk/uiit/programs.php?dept_id=31"
            target="_blank"
            className="hover:text-green-900 hover:underline"
          >
            PROGRAMS
          </a>
          <a
            href="https://www.uaar.edu.pk/uiit/downloads.php?dept_id=31"
            target="_blank"
            className="hover:text-green-900 hover:underline"
          >
            RESEARCH
          </a>
        </nav>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r min-h-screen flex flex-col">
          {/* Login buttons sticky at top */}
          <div className="p-4 space-y-2 border-b sticky top-0 bg-white z-40">
            <button
              onClick={() => handleLogin("student")}
              className="w-full flex items-center justify-center gap-2 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              <User className="w-5 h-5" /> Student
            </button>
            <button
              onClick={() => handleLogin("super-admin")}
              className="w-full flex items-center justify-center gap-2 py-2 rounded bg-gray-700 text-white hover:bg-gray-800"
            >
              <ClipboardList className="w-5 h-5" /> Coordinator
            </button>
            <button
              onClick={() => handleLogin("supervisor")}
              className="w-full flex items-center justify-center gap-2 py-2 rounded bg-green-700 text-white hover:bg-green-800"
            >
              <Users className="w-5 h-5" /> Supervisor
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col p-4 space-y-2 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setSelected(item)}
                className={`w-full text-left px-4 py-2 rounded transition ${
                  selected === item
                    ? "bg-green-600 text-white font-semibold"
                    : "text-green-700 hover:bg-green-100"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {contentMap[selected]}
        </main>
      </div>
    </div>
  );
}
