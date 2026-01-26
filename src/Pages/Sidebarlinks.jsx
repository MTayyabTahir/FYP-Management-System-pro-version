import {
  Home,
  Users,
  FileText,
  Megaphone,
  ClipboardCheck,
  Book,
} from "lucide-react";

// ================= SUPER ADMIN LINKS =================
export const superAdminLinks = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <Home size={18} />,
  },
  {
    path: "/cordinator/supervisor-list",
    label: "Supervisor List",
    icon: <Users size={18} />,
  },
  {
    path: "/cordinator/student",
    label: "Students List",
    icon: <Users size={18} />,
  },
  {
    path: "/announcement",
    label: "Announcement",
    icon: <Megaphone size={18} />,
  },
  {
    path: "/cordinator/proposalevaluator",
    label: "Proposal Evaluator",
    icon: <ClipboardCheck size={18} />,
  },
  {
    path: "/cordinator/evaluator",
    label: "Evaluator Assignment",
    icon: <ClipboardCheck size={18} />,
  },
  {
    path: "/cordinator/result",
    label: "Result",
    icon: <ClipboardCheck size={18} />,
  },
];

// ================= STUDENT LINKS =================
export const studentLinks = [
  {
    path: "/student/dashboard",
    label: "Dashboard",
    icon: <Home size={18} />,
  },
  {
    path: "/student/assignments",
    label: "Assignments",
    icon: <FileText size={18} />,
  },
  {
    path: "/student/supervisor",
    label: "Supervisor",
    icon: <Users size={18} />,
  },
  {
    path: "/student/my_group",
    label: "Groupmates",
    icon: <Users size={18} />,
  },
  {
    path: "/student/results",
    label: "Results",
    icon: <ClipboardCheck size={18} />,
  },
];

// ================= SUPERVISOR LINKS =================
export const Supervisor = [
  {
    path: "/supervisor/dashboard",
    label: "Dashboard",
    icon: <Home size={18} />,
  },
  {
    path: "/supervisor/assignments",
    label: "Proposal Requests",
    icon: <FileText size={18} />,
  },
  {
    path: "/supervisor/Propsal",
    label: "Proposal Review Panel",
    icon: <ClipboardCheck size={18} />,
  },
  {
    path: "/supervisor/groups",
    label: "Groups",
    icon: <Users size={18} />,
  },
  {
    path: "/supervisor/evaluator-result",
    label: "Evaluator Results",
    icon: <ClipboardCheck size={18} />,
  },
  {
    path: "/supervisor/add-annnoucements",
    label: "Announcements",
    icon: <Megaphone size={18} />,
  },
];
