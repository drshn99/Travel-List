import React, { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(" ");

  function handleSumbit(e) {
    e.preventDefault();
    if (!description) return;
    const newItems = { description, quantity, packed: false, id: Date.now() };
    console.log(newItems);
    onAddItems(newItems);
    setDescription("");
    setQuantity(1);
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSumbit}>
        <h3>What do you need for trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </>
  );
}
