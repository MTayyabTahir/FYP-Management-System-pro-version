import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SupervisorList() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [supervisors, setSupervisors] = useState([
    {
      id: 1,
      image: "https://www.uaar.edu.pk/media/profile/usman-270422.jpeg",
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
      image: "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Saqib_Majeed.jpg",
      firstName: "Dr.",
      lastName: "Saqib Majeed",
      specialization: "Semantics Programming & Data Structures",
      bio: "Assistant Professor focusing on Semantics & Data Structures.",
      slots: 3,
    },
    {
      id: 6,
      image: "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Muhammad_Aqib.jpg",
      firstName: "Dr.",
      lastName: "Muhammad Aqib",
      specialization: "Deep Learning & Big Data",
      bio: "Assistant Professor specializing in Deep Learning, Big Data and GPU Computing.",
      slots: 4,
    },
    {
      id: 7,
      image: "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Kashif_Sattar.jpg",
      firstName: "Dr.",
      lastName: "Kashif Sattar",
      specialization: "Networks & IoT",
      bio: "Assistant Professor with expertise in Wireless Networks and IoT.",
      slots: 3,
    },
    {
      id: 8,
      image: "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Tariq_Ali.jpg",
      firstName: "Dr.",
      lastName: "Tariq Ali",
      specialization: "Machine Learning & Databases",
      bio: "Assistant Professor in Machine Learning & Databases.",
      slots: 3,
    },
    {
      id: 9,
      image: "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Asif_Nawaz.jpg",
      firstName: "Dr.",
      lastName: "Asif Nawaz",
      specialization: "NLP & Social Media Analysis",
      bio: "Assistant Professor specializing in NLP and Text Mining.",
      slots: 3,
    },
    {
      id: 10,
      image: "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Sadia_Ali.jpg",
      firstName: "Dr.",
      lastName: "Sadia Ali",
      specialization: "Software Engineering & Machine Learning",
      bio: "Assistant Professor with research in Software Engineering and Machine Learning.",
      slots: 4,
    },
    {
      id: 11,
      image:
        "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Muhammad_Habib.jpg",
      firstName: "Dr.",
      lastName: "Muhammad Habib",
      specialization: "Computer Vision & Deep Learning",
      bio: "Assistant Professor working on Computer Vision and Deep Learning.",
      slots: 3,
    },
    {
      id: 12,
      image: "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Ruqia_Bibi.jpg",
      firstName: "Dr.",
      lastName: "Ruqia Bibi",
      specialization: "Machine Learning & Image Processing",
      bio: "Assistant Professor specializing in Machine Learning & Image Processing.",
      slots: 3,
    },
    {
      id: 13,
      image: "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Kanza_Gulzar.jpg",
      firstName: "Dr.",
      lastName: "Kanza Gulzar",
      specialization: "Software Engineering",
      bio: "Assistant Professor focusing on Software Processes and Improvement.",
      slots: 3,
    },
    {
      id: 14,
      image: "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Noureen_Zafar.jpg",
      firstName: "Dr.",
      lastName: "Noureen Zafar",
      specialization: "Smart Transportation & Digital Agriculture",
      bio: "Lecturer with focus on Smart Transport and Image Processing.",
      slots: 2,
    },
    {
      id: 15,
      image: "https://www.uaar.edu.pk/media/profile/yasir-151122-1.jpeg",
      firstName: "Ms.",
      lastName: "Bushra Hamid",
      specialization: "Software Requirement & Quality Engineering",
      bio: "Lecturer specializing in Software Quality and Requirements.",
      slots: 2,
    },
    {
      id: 16,
      image: "https://www.uaar.edu.pk/uiit/images/faculty/Dr_Sarfaraz_Bibi.jpg",
      firstName: "Dr.",
      lastName: "Sarfaraz Bibi",
      specialization: "Software Quality & NLP",
      bio: "Lecturer with research in Software Quality Engineering and NLP.",
      slots: 2,
    },
  ]);

  const [formData, setFormData] = useState({
    image: "",
    firstName: "",
    lastName: "",
    specialization: "",
    bio: "",
    slots: 0,
  });

  const handleAddSupervisor = () => {
    setSupervisors([
      ...supervisors,
      { ...formData, id: supervisors.length + 1 },
    ]);
    setFormData({
      image: "",
      firstName: "",
      lastName: "",
      specialization: "",
      bio: "",
      slots: 0,
    });
    setOpen(false);
  };

  return (
    <div className="p-6 md:ml-64 pt-20 md:pt-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Title + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
          <h2 className="text-2xl font-bold text-gray-800">Supervisors</h2>

          {/* Search Bar */}
          <div className="relative flex-1 sm:w-64">
            <input
              type="text"
              placeholder="Search by name..."
              //   value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-green-500 outline-none transition text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Add New Supervisor Button */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition whitespace-nowrap"
        >
          <Plus size={18} /> Add New Supervisor
        </button>
      </div>

      {/* Supervisor Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supervisors.map((sup) => (
          <div
            onClick={() => {
              navigate("/coordinator/supervisor-profile");
            }}
            key={sup.id}
            // onClick={() => navigate(`/coordinator/supervisor-profile`)}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={sup.image}
                alt="Supervisor"
                className="h-16 w-16 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {sup.firstName} {sup.lastName}
                </h3>
                <p className="text-sm text-green-600 font-medium">
                  {sup.specialization}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{sup.bio}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Available Slots:</span>
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
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <X size={22} />
            </button>

            {/* Header */}
            <h2 className="text-xl font-bold text-green-600 mb-6">
              Add New Supervisor
            </h2>

            {/* Form in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Image Upload */}
              <div className="col-span-2 flex flex-col items-center">
                <label className="w-32 h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-full cursor-pointer hover:border-green-500 transition">
                  {formData.image ? (
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Profile Preview"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-sm text-gray-500">Upload Image</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.files[0] })
                    }
                    className="hidden"
                  />
                </label>
              </div>

              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Specialization */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Specialization
                </label>
                <input
                  type="text"
                  value={formData.specialization}
                  onChange={(e) =>
                    setFormData({ ...formData, specialization: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Available Slots */}
              {/* <div>
                <label className="block text-sm font-medium mb-1">
                  Available Slots
                </label>
                <input
                  type="number"
                  value={formData.slots}
                  onChange={(e) =>
                    setFormData({ ...formData, slots: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div> */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium mb-1">
                  ID Card Number (Password)
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter CNIC / ID Card Number"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                  rows={2}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Password / ID Card Number */}
              {/* <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  ID Card Number (Password)
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter CNIC / ID Card Number"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div> */}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSupervisor}
                className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium shadow hover:bg-green-700 transition"
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
