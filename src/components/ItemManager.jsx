import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemManager = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Fetch Items
  const fetchItems = async () => {
    const response = await axios.get("http://localhost:5000/api/items");
    setItems(response.data);
  };

  // Add New Item
  const addItem = async () => {
    await axios.post("http://localhost:5000/api/items", { name: newItem });
    fetchItems();
  };

  // Delete Item
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Item Manager</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}{" "}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemManager;
