import { useState } from "react";
import { Megaphone, Plus, X, Edit, Trash2 } from "lucide-react";

export default function SupervisorAnnouncements() {
  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toISOString().split("T")[0]; // yyyy-mm-dd
    const time = now.toTimeString().split(" ")[0].slice(0, 5); // HH:MM
    return { date, time };
  };

  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Final Year Project Mid Evaluation",
      description: "All groups must submit mid reports before 25th September.",
      date: "2025-09-20",
      time: "10:00",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    description: "",
    ...getCurrentDateTime(),
  });

  const handleAddOrEdit = () => {
    if (!newAnnouncement.title || !newAnnouncement.description) return;

    if (editingId) {
      // Edit existing announcement
      setAnnouncements((prev) =>
        prev.map((a) =>
          a.id === editingId ? { ...a, ...newAnnouncement } : a,
        ),
      );
    } else {
      // Add new announcement
      setAnnouncements((prev) => [
        ...prev,
        { id: prev.length + 1, ...newAnnouncement },
      ]);
    }

    setNewAnnouncement({ title: "", description: "", ...getCurrentDateTime() });
    setEditingId(null);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  const handleEdit = (announcement) => {
    setNewAnnouncement({
      title: announcement.title,
      description: announcement.description,
      date: announcement.date,
      time: announcement.time || "",
    });
    setEditingId(announcement.id);
    setShowModal(true);
  };

  const formatDateTime = (date, time) => {
    if (!date) return "No Date Provided";
    const d = new Date(date + "T" + (time || "00:00"));
    return d.toLocaleString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-800 flex items-center gap-2">
          <Megaphone size={26} /> Supervisor Announcements
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <Plus size={18} /> Add Announcement
        </button>
      </div>

      {/* Announcements List */}
      <div className="grid gap-4">
        {announcements.map((a) => (
          <div
            key={a.id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition relative"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-green-700 mb-1">
                  {a.title}
                </h2>
                <p className="text-gray-600 mb-2">{a.description}</p>
                <p className="text-sm text-gray-400">
                  {formatDateTime(a.date, a.time)}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(a)}
                  className="text-blue-500 hover:text-blue-700 transition"
                  title="Edit"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(a.id)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowModal(false);
                setEditingId(null);
                setNewAnnouncement({
                  title: "",
                  description: "",
                  ...getCurrentDateTime(),
                });
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold text-green-700 mb-4">
              {editingId ? "Edit Announcement" : "Add New Announcement"}
            </h2>

            {/* Form */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={newAnnouncement.title}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    title: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <textarea
                placeholder="Description"
                rows="3"
                value={newAnnouncement.description}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    description: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <div className="flex gap-2">
                <input
                  type="date"
                  value={newAnnouncement.date}
                  onChange={(e) =>
                    setNewAnnouncement({
                      ...newAnnouncement,
                      date: e.target.value,
                    })
                  }
                  className="w-1/2 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                />
                <input
                  type="time"
                  value={newAnnouncement.time}
                  onChange={(e) =>
                    setNewAnnouncement({
                      ...newAnnouncement,
                      time: e.target.value,
                    })
                  }
                  className="w-1/2 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingId(null);
                  setNewAnnouncement({
                    title: "",
                    description: "",
                    ...getCurrentDateTime(),
                  });
                }}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrEdit}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                {editingId ? "Save Changes" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
