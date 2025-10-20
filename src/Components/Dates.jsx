import React from "react";
import { CalendarDays, FileText, Info, ClipboardList } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar2";

const ImportantDates = () => {
  const dates = [
    {
      date: "08-10-2025",
      task: "FYP-I Proposal Submission (Supervisor will submit proposal via Google Form)",
    },
    {
      date: "10-11-2025 – 14-11-2025",
      task: "FYP-II Pre Evaluation",
    },
    {
      date: "08-12-2025 – 12-12-2025",
      task: "FYP-I Evaluation",
    },
    {
      date: "12-12-2025",
      task: "FYP-I Report Submission",
    },
    {
      date: "15-12-2025 – 19-12-2025",
      task: "FYP-II Report, Poster & Result Submission",
    },
    {
      date: "05-01-2026 (Tentative)",
      task: "FYP-II Final Evaluation",
    },
    {
      date: "09-01-2026 (Tentative)",
      task: "Final Deliverables Submission",
    },
  ];

  return (
    <div className="h-screen bg-gradient-to-b mt-20 from-green-50 via-white to-green-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <Navbar />
      {/* Header */}
      <header className="bg-green-700 mt-14 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">
            PMAS Arid Agriculture University
          </h1>
          <p className="text-sm md:text-base mt-2 md:mt-0">
            Department of Computer Science – FYP Portal
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-green-800 dark:text-green-400 text-center mb-6">
          Important Dates & Deliverables
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Keep track of all deadlines, submissions, and evaluations for Final
          Year Projects (FYP-I and FYP-II).
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-4 px-6 text-left w-1/3">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} /> Date
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2">
                    <ClipboardList size={18} /> Deliverable / Event
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {dates.map((d, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-900"
                  } hover:bg-green-50 dark:hover:bg-gray-700 transition`}
                >
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-gray-100">
                    {d.date}
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {d.task}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Details Section */}
        <section className="mt-16 bg-white/80 dark:bg-gray-900/70 border border-green-200 dark:border-gray-700 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
            <Info size={22} /> Details & Guidelines
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>
              FYP-I registration is completed through proposal submission to
              FYPC. Supervisors submit proposals via Google Form.
            </li>
            <li>
              Proposal must include Turnitin Report, Gantt Chart, all
              signatures, and supervisor details.
            </li>
            <li>
              Once accepted, projects, members, or supervisors cannot be changed
              without FYPC approval.
            </li>
            <li>
              FYP-I is a 2-credit course. Ensure total credit hours do not
              exceed 21 with SSC registration.
            </li>
            <li>
              After 7th semester, submit FYP-I report soft copy for evaluation
              by both supervisor and internal examiner.
            </li>
            <li>
              Final deliverables (reports, CDs, poster, software, database) must
              be submitted by the deadline.
            </li>
          </ul>
        </section>

        {/* Note Section */}
        <div className="mt-10 text-center text-gray-600 dark:text-gray-400 text-sm">
          <FileText className="inline-block mr-2 text-green-600 dark:text-green-400" />
          <span>
            For queries, contact FYP Committee Secretary at{" "}
            <a
              href="mailto:fypcommittee@uaar.edu.pk"
              className="text-green-700 font-semibold dark:text-green-400 hover:underline"
            >
              fypcommittee@uaar.edu.pk
            </a>
          </span>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ImportantDates;
