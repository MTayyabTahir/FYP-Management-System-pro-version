import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function Projectpannel() {
  const [groups, setGroups] = useState([
    {
      id: "A",
      project: "Sarcasm Detection in Social Media",
      members: ["Hamid Mazhar", "Abdul Rehman", "Ali Hassan"],
      progress: 75,
      status: "", // accepted / rejected
      comment: "",
    },
    {
      id: "B",
      project: "Ocean EYE: Marine Species Detection",
      members: ["Ayesha Khan", "Usman Tariq", "Bilal Ahmad"],
      progress: 50,
      status: "",
      comment: "",
    },
    {
      id: "C",
      project: "Quran Guide (AI Based)",
      members: ["Muhammad Abdullah", "Fatima Noor", "Haris Iqbal"],
      progress: 90,
      status: "",
      comment: "",
    },
  ]);

  // Handle Accept / Reject
  const handleDecision = (groupId, decision, comment) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId ? { ...g, status: decision, comment } : g
      )
    );
  };

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        My Groups & Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group) => {
          const data = {
            labels: ["Completed", "Remaining"],
            datasets: [
              {
                data: [group.progress, 100 - group.progress],
                backgroundColor: [
                  group.progress < 50
                    ? "#ef4444"
                    : group.progress < 80
                    ? "#f59e0b"
                    : "#16a34a",
                  "#e5e7eb",
                ],
                borderWidth: 1,
              },
            ],
          };

          const options = {
            cutout: "70%",
            plugins: {
              legend: { display: false },
            },
          };

          return (
            <div
              key={group.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {/* Group Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Group {group.id}
                </h2>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  {group.project}
                </span>
              </div>

              {/* Members */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  Group Members:
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {group.members.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Chart.js Doughnut Progress */}
              <div className="flex flex-col items-center mb-4">
                <button
                  onClick={() => {
                    // Example: PDF file link (replace with actual proposal PDF URLs)
                    const pdfUrl = `/pdfs/group_${group.id}_proposal.pdf`;
                    const link = document.createElement("a");
                    link.href = pdfUrl;
                    link.download = `Group_${group.id}_Proposal.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Download Proposal PDF
                </button>
              </div>

              {/* Accept / Reject Section */}
              {group.status === "" ? (
                <div className="mt-4">
                  <textarea
                    placeholder="Add comment / reason"
                    className="w-full border rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-green-500"
                    value={group.comment}
                    onChange={(e) =>
                      setGroups((prev) =>
                        prev.map((g) =>
                          g.id === group.id
                            ? { ...g, comment: e.target.value }
                            : g
                        )
                      )
                    }
                  ></textarea>
                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        handleDecision(group.id, "Accepted", group.comment)
                      }
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() =>
                        handleDecision(group.id, "Rejected", group.comment)
                      }
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4 p-3 border rounded-lg bg-gray-50">
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    {group.status}
                  </p>
                  <p>
                    <span className="font-semibold">Comment:</span>{" "}
                    {group.comment || "No comment provided"}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
