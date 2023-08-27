import React from "react";

export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (100 * numPacked) / numItems;
  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You are all set, ready to go ✈"
            : `You have ${numItems} items on list, and you already packed ${numPacked}(
          ${percentage}%)`}
        </em>
      </footer>
    </>
  );
}
