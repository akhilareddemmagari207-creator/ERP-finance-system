import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="projects-container display: flex;   flex-wrap: wrap; gap: 1rem;" >
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((proj) => (
            <div key={proj.id} className="project-card border: 1px solid #ccc; padding: 1rem;border-radius: 8px; width: 200px;">
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

