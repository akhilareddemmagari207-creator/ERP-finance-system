import { useState } from "react";
import axios from "axios";

export default function WorkerForm({ onSuccess, editData }) {
  const [name, setName] = useState(editData?.name || "");
  const [role, setRole] = useState(editData?.role || "");
  const [salary, setSalary] = useState(editData?.salary || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editData) {
      await axios.put(`http://localhost:4000/workers/${editData.id}`, {
        name, role, salary
      });
    } else {
      await axios.post("http://localhost:4000/workers", {
        name, role, salary
      });
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Worker Name" value={name} onChange={e=>setName(e.target.value)} required />
      <input placeholder="Role" value={role} onChange={e=>setRole(e.target.value)} required />
      <input placeholder="Salary" type="number" value={salary} onChange={e=>setSalary(e.target.value)} required />
      <button type="submit">{editData ? "Update" : "Add"}</button>
    </form>
  );
}
