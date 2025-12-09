import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "/projects" },
    { name: "Tasks", path: "/tasks" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <div className="sidebar">
      <h2>ERP</h2>
      <ul>
        {links.map((link) => (
          <li
            key={link.name}
            className={location.pathname === link.path ? "active" : ""}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
