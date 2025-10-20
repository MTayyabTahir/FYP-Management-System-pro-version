import React from "react";
import { Download } from "lucide-react"; // optional, install `lucide-react` or replace with any icon
import Footer from "./Footer";
import Navbar from "./Navbar2";

const downloads = [
  {
    title: "Assignment Title Page",
    filename: "/downloads/assignment-title-page.pdf",
    desc: "Template for assignment title page (print-ready).",
  },
  {
    title: "Project Proposal Template",
    filename: "/downloads/project-proposal-template.pdf",
    desc: "General project proposal template — use for FYP proposal drafts.",
  },
  {
    title: "FYP Proposal Template Page",
    filename: "/downloads/fyp-proposal-template.pdf",
    desc: "Official FYP proposal template (use for supervisor submission).",
  },
  {
    title: "FYP-1 Presentation Template",
    filename: "/downloads/fyp1-presentation-template.pdf",
    desc: "PowerPoint/PDF presentation template for FYP-I evaluation.",
  },
  {
    title: "FYP Completed in UIIT",
    filename: "/downloads/fyp-completed-uiit.pdf",
    desc: "Archive/sample of previously completed FYPs at UIIT.",
  },
  {
    title: "Some Potential FYP Ideas",
    filename: "/downloads/fyp-ideas.pdf",
    desc: "Curated list of FYP ideas and external sources to explore.",
  },
];

const DownloadsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900  dark:text-gray-100">
      <div className="mt-20">
        <Navbar />
      </div>
      {/* Page header */}
      <header className="bg-green-700 text-white mt-10 py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              University Institute of Information Technology
            </h1>
            <p className="text-sm text-green-100">
              FYP Downloads — PMAS Arid Agriculture University
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 dark:text-green-300">
            Downloads
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Click any item to download the official PDF. Place PDFs in{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
              public/downloads/
            </code>
            .
          </p>
        </div>

        {/* Grid of download items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item) => (
            <div
              key={item.filename}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {item.desc}
                </p>
                <p className="text-xs text-gray-400">
                  File:{" "}
                  <span className="font-mono">
                    {item.filename.split("/").pop()}
                  </span>
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <a
                  href={item.filename}
                  download
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
                >
                  <Download size={16} />
                  Download PDF
                </a>

                <a
                  href={item.filename}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
                >
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-10 text-sm text-gray-600 dark:text-gray-300 space-y-2">
          <p>
            <strong>Note:</strong> If a download does not start, ensure the file
            exists at{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
              public/downloads/
            </code>{" "}
            with the exact filename shown above.
          </p>
          <p>
            To update filenames, edit the{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
              downloads
            </code>{" "}
            array in this component.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DownloadsPage;
