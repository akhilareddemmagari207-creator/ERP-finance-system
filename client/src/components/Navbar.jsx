import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username"); // store username on login

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <span>Welcome, {username || "User"}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
