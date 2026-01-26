import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function StudentGroups() {
  const groups = [
    {
      id: "A",
      project: "Sarcasm Detection in Social Media",
      members: ["Hamid Mazhar", "Abdul Rehman", "Ali Hassan"],
      progress: 75,
    },
    {
      id: "B",
      project: "Ocean EYE: Marine Species Detection",
      members: ["Ayesha Khan", "Usman Tariq", "Bilal Ahmad"],
      progress: 50,
    },
    {
      id: "C",
      project: "Quran Guide (AI Based)",
      members: ["Muhammad Abdullah", "Fatima Noor", "Haris Iqbal"],
      progress: 90,
    },
  ];

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-green-800 mb-8">
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
                borderWidth: 0,
              },
            ],
          };

          const options = {
            cutout: "75%",
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false },
            },
          };

          return (
            <div
              key={group.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Group {group.id}
                </span>
              </div>

              {/* Project Name */}
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {group.project}
              </h2>

              {/* Members */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 mb-2">
                  Group Members
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.members.map((m, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="flex items-center justify-center relative">
                <div className="w-32 h-32">
                  <Doughnut data={data} options={options} />
                </div>

                {/* Center Percentage */}
                <div className="absolute text-center">
                  <p className="text-2xl font-bold text-gray-800">
                    {group.progress}%
                  </p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
