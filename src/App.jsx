import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

import {
  superAdminLinks,
  studentLinks,
  Supervisor,
} from "./Pages/Sidebarlinks";

// ================= COORDINATOR =================
import Dashboard from "./Pages/Codinator/Dahboard";
import SupervisorList from "./Pages/Codinator/Supervisorlist";
import StudentList from "./Pages/Codinator/Studentdata";
import Announcements from "./Pages/Codinator/Announcement";
import EvaluatorAssignment from "./Pages/Codinator/Evaluator";
import SupervisorProfile from "./Pages/Codinator/Supervisor-profile";
import CoordinatorProfile from "./Pages/Codinator/Cordinator-profile";
import FypMarksTable from "./Pages/Codinator/Result";
import Proposalevelauator from "./Pages/Codinator/Proposalevealuator";

// ================= STUDENT =================
import StudentDashboard from "./Pages/Student/Student-dashboard";
import AssignmentsPage from "./Pages/Student/Assignments_submit";
import StudentSupervisors from "./Pages/Student/Student_supervisor";
import SupervisorProfileWithPlagiarism from "./Pages/Student/Supervisor_profile";
import StudentResult from "./Pages/Student/Student-result";
import StudentGroupmates from "./Pages/Student/Student-group";

// ================= SUPERVISOR =================
import SupervisorDashboard from "./Pages/Supervisors/Dashboard";
import SupervisorAssignments from "./Pages/Supervisors/Assignmensts";
import StudentGroups from "./Pages/Supervisors/Groups";
import SupervisorAnnouncements from "./Pages/Supervisors/Addannoucements";
import SupervisorEvaluator from "./Pages/Supervisors/Evealuator-results";
import Projectpannel from "./Pages/Supervisors/Proposalpannel";

// ================= PUBLIC =================
import DistinguishedFYPs from "./Components/Distingfyp";
import FypIdeas from "./Components/Ideasforstudent";
import ImportantDates from "./Components/Dates";
import RulesAndSOP from "./Components/Roules ";
import DownloadsPage from "./Components/Downloads";

// ================= LOGIN =================
import LoginPage from "./Components/Home";
import LoginPage2 from "./Components/Login2";

// =================================================

function Layout() {
  const location = useLocation();
  const role = localStorage.getItem("role");

  const publicRoutes = [
    "/",
    "/distinguished-fyp",
    "/fyp-ideas",
    "/key-dates",
    "/rules-and-sops",
    "/downloads",
  ];

  const isPublicPage = publicRoutes.includes(location.pathname);
  const isLoginPage = location.pathname === "/login";

  // ================= PUBLIC PAGES (FULL SCREEN) =================
  if (isPublicPage) {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/distinguished-fyp" element={<DistinguishedFYPs />} />
        <Route path="/fyp-ideas" element={<FypIdeas />} />
        <Route path="/key-dates" element={<ImportantDates />} />
        <Route path="/rules-and-sops" element={<RulesAndSOP />} />
        <Route path="/downloads" element={<DownloadsPage />} />
      </Routes>
    );
  }

  // ================= LOGIN =================
  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage2 />} />
      </Routes>
    );
  }

  // ================= AUTH GUARD =================
  if (!role) {
    return <Navigate to="/" replace />;
  }

  let links = [];
  if (role === "coordinator") links = superAdminLinks;
  else if (role === "student") links = studentLinks;
  else if (role === "supervisor") links = Supervisor;

  // ================= DASHBOARD LAYOUT =================
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar links={links} />

      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* ❗ NO padding / NO bg here */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            {/* ===== COORDINATOR ===== */}
            {role === "super-admins" ||
              ("coordinator" && (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/cordinator/supervisor-list"
                    element={<SupervisorList />}
                  />
                  <Route path="/cordinator/student" element={<StudentList />} />
                  <Route path="/announcement" element={<Announcements />} />
                  <Route
                    path="/cordinator/evaluator"
                    element={<EvaluatorAssignment />}
                  />
                  <Route
                    path="/cordinator/proposalevaluator"
                    element={<Proposalevelauator />}
                  />
                  <Route
                    path="/coordinator/supervisor-profile"
                    element={<SupervisorProfile />}
                  />
                  <Route
                    path="/coordinator/profile"
                    element={<CoordinatorProfile />}
                  />
                  <Route
                    path="/cordinator/result"
                    element={<FypMarksTable />}
                  />
                </>
              ))}

            {/* ===== STUDENT ===== */}
            {role === "student" && (
              <>
                <Route
                  path="/student/dashboard"
                  element={<StudentDashboard />}
                />
                <Route
                  path="/student/assignments"
                  element={<AssignmentsPage />}
                />
                <Route
                  path="/student/supervisor"
                  element={<StudentSupervisors />}
                />
                <Route
                  path="/student/supervisors-profile"
                  element={<SupervisorProfileWithPlagiarism />}
                />
                <Route path="/student/results" element={<StudentResult />} />
                <Route
                  path="/student/my_group"
                  element={<StudentGroupmates />}
                />
              </>
            )}

            {/* ===== SUPERVISOR ===== */}
            {role === "supervisor" && (
              <>
                <Route
                  path="/supervisor/dashboard"
                  element={<SupervisorDashboard />}
                />
                <Route
                  path="/supervisor/assignments"
                  element={<SupervisorAssignments />}
                />
                <Route path="/supervisor/groups" element={<StudentGroups />} />
                <Route
                  path="/supervisor/add-annnoucements"
                  element={<SupervisorAnnouncements />}
                />
                <Route path="/supervisor/Propsal" element={<Projectpannel />} />
                <Route
                  path="/supervisor/evaluator-result"
                  element={<SupervisorEvaluator />}
                />
              </>
            )}
          </Routes>
        </main>
      </div>
    </div>
  );
}

// ================= ROOT =================
export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
