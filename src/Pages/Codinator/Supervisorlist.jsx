import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SupervisorList() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [supervisors, setSupervisors] = useState([
    {
      id: 1,
      image: "https://www.uaar.edu.pk/media/profile/yasir-151122-1.jpeg",
      firstName: "Dr.",
      lastName: "Yaser Hafeez",
      specialization: "Situational Method Engineering & Agile Practices",
      bio: "Professor / Director at UIIT, expert in Agile Practices and Configurable Systems.",
      slots: 5,
    },
    {
      id: 2,
      image: "https://www.uaar.edu.pk/media/profile/usman-270422.jpeg",
      firstName: "Mr.",
      lastName: "Muhammad Usman Javed",
      specialization: "Human Resource & Organizational Psychology",
      bio: "Assistant Registrar focusing on Human Resources and Organizational Behaviors.",
      slots: 3,
    },
    {
      id: 3,
      image: "https://www.uaar.edu.pk/media/profile/saif-26-07-19.jpg",
      firstName: "Dr.",
      lastName: "Saif Ur Rehman",
      specialization: "Artificial Intelligence & Machine Learning",
      bio: "Assistant Professor with research interests in AI, ML, Data Mining and Social Network Analysis.",
      slots: 5,
    },
    {
      id: 4,
      image: "https://www.uaar.edu.pk/media/profile/rubina-300922.JPG",
      firstName: "Dr.",
      lastName: "Rubina Ghazal",
      specialization: "Cyber Security & Distributed Computing",
      bio: "Assistant Professor working on Role Based Access Control and Cyber Security.",
      slots: 4,
    },
    {
      id: 5,
      image: "https://www.uaar.edu.pk/media/profile/X1z4AkT.jpg",
      firstName: "Dr.",
      lastName: "Saqib Majeed",
      specialization: "Semantics Programming & Data Structures",
      bio: "Assistant Professor focusing on Semantics & Data Structures.",
      slots: 3,
    },
    {
      id: 6,
      image: "https://www.uaar.edu.pk/media/profile/MuhammadAqib-29-11-19.jpg",
      firstName: "Dr.",
      lastName: "Muhammad Aqib",
      specialization: "Deep Learning & Big Data",
      bio: "Assistant Professor specializing in Deep Learning, Big Data and GPU Computing.",
      slots: 4,
    },
    {
      id: 7,
      image: "https://www.uaar.edu.pk/media/profile/kashif-uiit.png",
      firstName: "Dr.",
      lastName: "Kashif Sattar",
      specialization: "Networks & IoT",
      bio: "Assistant Professor with expertise in Wireless Networks and IoT.",
      slots: 3,
    },
    {
      id: 8,
      image: "https://www.uaar.edu.pk/media/profile/tariq-10072020.jpg",
      firstName: "Dr.",
      lastName: "Tariq Ali",
      specialization: "Machine Learning & Databases",
      bio: "Assistant Professor in Machine Learning & Databases.",
      slots: 3,
    },
    {
      id: 9,
      image: "https://www.uaar.edu.pk/media/profile/asifuiit.jpg",
      firstName: "Dr.",
      lastName: "Asif Nawaz",
      specialization: "NLP & Social Media Analysis",
      bio: "Assistant Professor specializing in NLP and Text Mining.",
      slots: 3,
    },
    {
      id: 10,
      image: "https://www.uaar.edu.pk/media/profile/sadia-201222.jpg",
      firstName: "Dr.",
      lastName: "Sadia Ali",
      specialization: "Software Engineering & Machine Learning",
      bio: "Assistant Professor with research in Software Engineering and Machine Learning.",
      slots: 4,
    },
    {
      id: 11,
      image: "https://www.uaar.edu.pk/media/profile/habib-070922.jpg",
      firstName: "Dr.",
      lastName: "Muhammad Habib",
      specialization: "Computer Vision & Deep Learning",
      bio: "Assistant Professor working on Computer Vision and Deep Learning.",
      slots: 3,
    },
    {
      id: 12,
      image: "https://www.uaar.edu.pk/media/profile/ruqia-070922.jpg",
      firstName: "Dr.",
      lastName: "Ruqia Bibi",
      specialization: "Machine Learning & Image Processing",
      bio: "Assistant Professor specializing in Machine Learning & Image Processing.",
      slots: 3,
    },
    {
      id: 14,
      image: "https://www.uaar.edu.pk/media/profile/noreen-19625.jpg",
      firstName: "Dr.",
      lastName: "Noureen Zafar",
      specialization: "Smart Transportation & Digital Agriculture",
      bio: "Lecturer with focus on Smart Transport and Image Processing.",
      slots: 2,
    },
    {
      id: 15,
      image: "https://www.uaar.edu.pk/media/profile/Dmx7dLB.jpg",
      firstName: "Ms.",
      lastName: "Bushra Hamid",
      specialization: "Software Requirement & Quality Engineering",
      bio: "Lecturer specializing in Software Quality and Requirements.",
      slots: 2,
    },
    {
      id: 16,
      image: "https://www.uaar.edu.pk/media/profile/sarfraz-14623.jpg",
      firstName: "Dr.",
      lastName: "Sarfaraz Bibi",
      specialization: "Software Quality & NLP",
      bio: "Lecturer with research in Software Quality Engineering and NLP.",
      slots: 2,
    },
  ]);

  const [formData, setFormData] = useState({
    image: null,
    firstName: "",
    lastName: "",
    specialization: "",
    bio: "",
    password: "",
    slots: 0,
  });

  const handleAddSupervisor = () => {
    setSupervisors([
      ...supervisors,
      {
        id: supervisors.length + 1,
        firstName: formData.firstName,
        lastName: formData.lastName,
        specialization: formData.specialization,
        bio: formData.bio,
        slots: formData.slots,
        image: formData.image
          ? URL.createObjectURL(formData.image)
          : "https://via.placeholder.com/150",
      },
    ]);

    setFormData({
      image: null,
      firstName: "",
      lastName: "",
      specialization: "",
      bio: "",
      password: "",
      slots: 0,
    });

    setOpen(false);
  };

  const filteredSupervisors = supervisors.filter((sup) =>
    `${sup.firstName} ${sup.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6 md:ml-64 pt-20 md:pt-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Supervisors</h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <svg
              className="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Add Supervisor Button */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            <Plus size={18} /> Add New Supervisor
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSupervisors.map((sup) => (
          <div
            key={sup.id}
            onClick={() => navigate("/coordinator/supervisor-profile")}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer transition flex flex-col h-full"
          >
            {/* Top */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full overflow-hidden border flex-shrink-0">
                <img
                  src={sup.image}
                  alt="Supervisor"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {sup.firstName} {sup.lastName}
                </h3>
                <p className="text-sm text-green-600 font-medium line-clamp-2">
                  {sup.specialization}
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
              {sup.bio}
            </p>

            {/* Bottom */}
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm text-gray-500">Available Slots</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                {sup.slots}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X size={22} />
            </button>

            <h2 className="text-xl font-bold text-green-600 mb-6">
              Add New Supervisor
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image Upload */}
              <div className="col-span-2 flex justify-center">
                <label className="w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer overflow-hidden">
                  {formData.image ? (
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sm text-gray-500">Upload Image</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        image: e.target.files[0],
                      })
                    }
                  />
                </label>
              </div>

              {/* Inputs */}
              <input
                placeholder="First Name"
                className="border rounded-lg px-3 py-2 w-full"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <input
                placeholder="Last Name"
                className="border rounded-lg px-3 py-2 w-full"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
              <input
                placeholder="Specialization"
                className="border rounded-lg px-3 py-2 w-full"
                value={formData.specialization}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    specialization: e.target.value,
                  })
                }
              />
              <input
                type="password"
                placeholder="ID Card Number (Password)"
                className="border rounded-lg px-3 py-2 w-full"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <textarea
                placeholder="Bio"
                className="border rounded-lg px-3 py-2 md:col-span-2 w-full"
                rows={2}
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSupervisor}
                className="px-5 py-2 bg-green-600 text-white rounded-lg"
              >
                Save Supervisor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
