import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:4000/api/projects/${editingId}`, { name, description });
      } else {
        await axios.post("http://localhost:4000/api/projects", { name, description });
      }
      setName("");
      setDescription("");
      setEditingId(null);
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (project) => {
    setName(project.name);
    setDescription(project.description);
    setEditingId(project.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <h1>Projects</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit">{editingId ? "Update" : "Add"} Project</button>
        </form>

        <div className="projects-container">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
              <button onClick={() => handleEdit(proj)}>Edit</button>
              <button onClick={() => handleDelete(proj.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
