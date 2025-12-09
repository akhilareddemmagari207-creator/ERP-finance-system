import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkersPage() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
  const fetchWorkers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/workers");
      setWorkers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchWorkers();
}, []);

  return (
    <div>
      <h1>Workers List</h1>
      {workers.map(w => (
        <p key={w.worker_id}>{w.name}</p>
      ))}
    </div>
  );
}

export default WorkersPage;
