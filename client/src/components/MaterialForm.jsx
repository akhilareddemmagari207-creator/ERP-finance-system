import { useState } from "react";
import axios from "axios";

export default function MaterialForm({ onSuccess, editData }) {
  const [name, setName] = useState(editData?.name || "");
  const [quantity, setQuantity] = useState(editData?.quantity || 0);
  const [unit, setUnit] = useState(editData?.unit || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editData) {
      await axios.put(`http://localhost:4000/materials/${editData.id}`, {
        name,
        quantity,
        unit,
      });
    } else {
      await axios.post("http://localhost:4000/materials", {
        name,
        quantity,
        unit,
      });
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Material Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <input
        placeholder="Unit (kg, bags, etc)"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        required
      />

      <button type="submit">{editData ? "Update" : "Add"}</button>
    </form>
  );
}
