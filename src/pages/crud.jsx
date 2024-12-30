import React, { useState, useEffect } from "react";
import "./crud.css";

const CrudApp = () => {
  const [credentials, setCredentials] = useState([]);
  const [name, setName] = useState(""); // For storing Name
  const [age, setAge] = useState("");  // For storing Age
  const [password, setPassword] = useState(""); // For storing Password
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editPassword, setEditPassword] = useState("");

  // Fetch existing users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        setCredentials(data); // Set the fetched users
      } catch (err) {
        console.error("Error fetching users:", err.message);
      }
    };
    fetchUsers();
  }, []);

  // Function to handle adding credentials
  const handleAddCredentials = async () => {
    if (name.trim() && password.trim() && age.trim()) {
      try {
        const response = await fetch('http://localhost:5000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, age: parseInt(age), password }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to add credentials');
        }

        const data = await response.json();
        setCredentials((prevCredentials) => [...prevCredentials, data]); // Add new credentials to the list
        setName(''); // Reset form fields
        setAge('');
        setPassword('');
      } catch (err) {
        alert(`Error: ${err.message}`); // Show error message if any
      }
    } else {
      alert('Name, Age, and Password cannot be empty.');
    }
  };

  // Function to handle deleting credentials
  const handleDeleteCredentials = async (index) => {
    const userId = credentials[index]._id;
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete credentials');
      }
      setCredentials(credentials.filter((_, i) => i !== index));
    } catch (err) {
      alert(err.message); // Handle error
    }
  };

  // Function to handle editing credentials
  const handleEditCredentials = (index) => {
    setEditIndex(index);
    setEditName(credentials[index].name);
    setEditAge(credentials[index].age);
    setEditPassword(credentials[index].password);
  };

  // Function to handle saving edited credentials
  const handleSaveEdit = async () => {
    if (editName.trim() && editAge.trim() && editPassword.trim()) {
      try {
        const userId = credentials[editIndex]._id;
        const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: editName, age: parseInt(editAge), password: editPassword }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to save edits');
        }

        const data = await response.json();
        const updatedCredentials = [...credentials];
        updatedCredentials[editIndex] = data;
        setCredentials(updatedCredentials);
        setEditIndex(null);
        setEditName("");
        setEditAge("");
        setEditPassword("");
      } catch (err) {
        alert(`Error: ${err.message}`);
      }
    } else {
      alert('Name, Age, and Password cannot be empty.');
    }
  };

  return (
    <div className="crud-container">
      <h2>Manage Users</h2>
      <div className="crud-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={handleAddCredentials}>Add</button>
      </div>

      <div className="crud-list">
        {credentials.length === 0 ? (
          <p>No users available.</p>
        ) : (
          credentials.map((cred, index) => (
            <div key={index} className="crud-item">
              {editIndex === index ? (
                <div className="crud-edit">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <input
                    type="number"
                    value={editAge}
                    onChange={(e) => setEditAge(e.target.value)}
                  />
                  <input
                    type="password"
                    value={editPassword}
                    onChange={(e) => setEditPassword(e.target.value)}
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </div>
              ) : (
                <>
                  <span>{cred.name}</span>
                  <span>{cred.age} years old</span>
                  <button onClick={() => handleEditCredentials(index)}>Edit</button>
                  <button onClick={() => handleDeleteCredentials(index)}>Delete</button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CrudApp;
