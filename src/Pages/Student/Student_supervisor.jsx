import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Briefcase } from "lucide-react";

export default function StudentSupervisors() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // ✅ Supervisors data with professional faculty images
  const supervisors = [
    {
      id: 1,
      image: "https://www.uaar.edu.pk/media/profile/yasir-151122-1.jpeg",
      name: "Dr. Yaser Hafeez",
      expertise: "Situational Method Engineering & Agile Practices",
      description:
        "Professor / Director at UIIT, expert in Agile Practices and Configurable Systems.",
      totalSlots: 6,
      pendingSlots: 5,
      id_card_no: "21-ARID-1234",
    },
    {
      id: 2,
      image: "https://www.uaar.edu.pk/media/profile/usman-270422.jpeg",
      name: "Mr. Muhammad Usman Javed",
      expertise: "Human Resource & Organizational Psychology",
      description:
        "Assistant Registrar focusing on Human Resources and Organizational Behaviors.",
      totalSlots: 6,
      pendingSlots: 3,
    },
    {
      id: 3,
      image: "https://www.uaar.edu.pk/media/profile/saif-26-07-19.jpg",
      name: "Dr. Saif Ur Rehman",
      expertise: "Artificial Intelligence & Machine Learning",
      description:
        "Assistant Professor with research interests in AI, ML, Data Mining and Social Network Analysis.",
      totalSlots: 6,
      pendingSlots: 5,
    },
    {
      id: 4,
      image: "https://www.uaar.edu.pk/media/profile/rubina-300922.JPG",
      name: "Dr. Rubina Ghazal",
      expertise: "Cyber Security & Distributed Computing",
      description:
        "Assistant Professor working on Role Based Access Control and Cyber Security.",
      totalSlots: 6,
      pendingSlots: 4,
    },
    {
      id: 5,
      image: "https://www.uaar.edu.pk/media/profile/X1z4AkT.jpg",
      name: "Dr. Saqib Majeed",
      expertise: "Semantics Programming & Data Structures",
      description:
        "Assistant Professor focusing on Semantics & Data Structures.",
      totalSlots: 6,
      pendingSlots: 3,
    },
    {
      id: 6,
      image: "https://www.uaar.edu.pk/media/profile/MuhammadAqib-29-11-19.jpg",
      name: "Dr. Muhammad Aqib",
      expertise: "Deep Learning & Big Data",
      description:
        "Assistant Professor specializing in Deep Learning, Big Data and GPU Computing.",
      totalSlots: 6,
      pendingSlots: 4,
    },
    {
      id: 7,
      image: "https://www.uaar.edu.pk/media/profile/kashif-uiit.png",
      name: "Dr. Kashif Sattar",
      expertise: "Networks & IoT",
      description:
        "Assistant Professor with expertise in Wireless Networks and IoT.",
      totalSlots: 6,
      pendingSlots: 3,
    },
    {
      id: 8,
      image: "https://www.uaar.edu.pk/media/profile/tariq-10072020.jpg",
      name: "Dr. Tariq Ali",
      expertise: "Machine Learning & Databases",
      description: "Assistant Professor in Machine Learning & Databases.",
      totalSlots: 6,
      pendingSlots: 3,
    },
    {
      id: 9,
      image: "https://www.uaar.edu.pk/media/profile/asifuiit.jpg",
      name: "Dr. Asif Nawaz",
      expertise: "NLP & Social Media Analysis",
      description: "Assistant Professor specializing in NLP and Text Mining.",
      totalSlots: 6,
      pendingSlots: 3,
    },
    {
      id: 10,
      image: "https://www.uaar.edu.pk/media/profile/sadia-201222.jpg",
      name: "Dr. Sadia Ali",
      expertise: "Software Engineering & Machine Learning",
      description:
        "Assistant Professor with research in Software Engineering and Machine Learning.",
      totalSlots: 6,
      pendingSlots: 4,
    },
    {
      id: 11,
      image: "https://www.uaar.edu.pk/media/profile/habib-070922.jpg",
      name: "Dr. Muhammad Habib",
      expertise: "Computer Vision & Deep Learning",
      description:
        "Assistant Professor working on Computer Vision and Deep Learning.",
      totalSlots: 6,
      pendingSlots: 3,
    },
    {
      id: 12,
      image: "https://www.uaar.edu.pk/media/profile/ruqia-070922.jpg",
      name: "Dr. Ruqia Bibi",
      expertise: "Machine Learning & Image Processing",
      description:
        "Assistant Professor specializing in Machine Learning & Image Processing.",
      totalSlots: 6,
      pendingSlots: 3,
    },
    {
      id: 14,
      image: "https://www.uaar.edu.pk/media/profile/noreen-19625.jpg",
      name: "Dr. Noureen Zafar",
      expertise: "Smart Transportation & Digital Agriculture",
      description:
        "Lecturer with focus on Smart Transport and Image Processing.",
      totalSlots: 6,
      pendingSlots: 2,
    },
    {
      id: 15,
      image: "https://www.uaar.edu.pk/media/profile/Dmx7dLB.jpg",
      name: "Ms. Bushra Hamid",
      expertise: "Software Requirement & Quality Engineering",
      description:
        "Lecturer specializing in Software Quality and Requirements.",
      totalSlots: 6,
      pendingSlots: 2,
    },
    {
      id: 16,
      image: "https://www.uaar.edu.pk/media/profile/sarfraz-14623.jpg",
      name: "Dr. Sarfaraz Bibi",
      expertise: "Software Quality & NLP",
      description:
        "Lecturer with research in Software Quality Engineering and NLP.",
      totalSlots: 6,
      pendingSlots: 2,
    },
  ];

  // ✅ Filter supervisors by name or expertise
  const filtered = supervisors.filter(
    (sup) =>
      sup.name.toLowerCase().includes(search.toLowerCase()) ||
      sup.expertise.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen bg-[#f4f7f5]">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Available Supervisors
      </h1>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="🔍 Search by name or expertise..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-green-400 rounded-full px-5 py-3 w-full max-w-xl focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
        />
      </div>

      {/* Supervisors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((sup) => (
          <div
            key={sup.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {/* Image */}
            <div className="h-40 bg-green-100 flex items-center justify-center">
              <img
                src={sup.image}
                alt={sup.name}
                className="h-28 w-28 rounded-full border-4 border-green-500 object-cover shadow-md"
              />
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {sup.name}
              </h3>
              <p className="text-center text-sm text-green-600 font-medium flex items-center justify-center gap-1 mt-1">
                <Briefcase size={14} /> {sup.expertise}
              </p>

              <p className="text-sm text-gray-600 mt-3 line-clamp-3 text-center">
                {sup.description}
              </p>

              {/* Slots */}
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Slots Filled:</span>
                  <span className="font-semibold text-green-700">
                    {sup.pendingSlots}/{sup.totalSlots}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{
                      width: `${(sup.pendingSlots / sup.totalSlots) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() =>
                  navigate(`/student/supervisors-profile`, { state: sup })
                }
                className="mt-6 w-full py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition shadow-md"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
