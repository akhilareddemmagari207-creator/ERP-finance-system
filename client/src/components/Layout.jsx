import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "220px",
        height: "100vh",
        background: "#1a1a1a",
        color: "white",
        padding: "20px"
      }}>
        <h2>ERP Menu</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link></li>
          <li><Link to="/workers" style={{ color: "white" }}>Workers</Link></li>
          <li><Link to="/projects" style={{ color: "white" }}>Projects</Link></li>
          <li><Link to="/materials" style={{ color: "white" }}>Materials</Link></li>
        </ul>
      </div>

      {/* Main content */}
      <div style={{ flexGrow: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}
