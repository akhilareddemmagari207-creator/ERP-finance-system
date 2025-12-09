import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  // projects fetching code...
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <h1>Dashboard</h1>
        <div className="projects-container">
          {/* projects map here */}
        </div>
      </div>
    </div>
  );
}
