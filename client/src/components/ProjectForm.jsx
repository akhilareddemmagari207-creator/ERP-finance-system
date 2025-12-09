import { useState } from "react";
import axios from "axios";

export default function ProjectForm({ onSuccess, editData }) {
  const [name, setName] = useState(editData?.name || "");
  const [location, setLocation] = useState(editData?.location || "");
  const [budget, setBudget] = useState(editData?.budget || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(editData){
      await axios.put(`http://localhost:4000/projects/${editData.id}`, {name, location, budget});
    } else {
      await axios.post("http://localhost:4000/projects", {name, location, budget});
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Project Name" value={name} onChange={e=>setName(e.target.value)} required />
      <input placeholder="Location" value={location} onChange={e=>setLocation(e.target.value)} required />
      <input placeholder="Budget" type="number" value={budget} onChange={e=>setBudget(e.target.value)} required />
      <button type="submit">{editData ? "Update" : "Add"}</button>
    </form>
  );
}
