import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

function Profile({ user, setUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);

  const handleSave = () => {
    const updatedUser = { ...user, name, bio };
    setUser(updatedUser);

    // Atualiza localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex((u) => u.email === updatedUser.email);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
    }
    alert("Perfil atualizado!");
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Perfil</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="email"
          value={user.email}
          disabled
          className="input disabled"
        />
        <textarea
          placeholder="Sobre você"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="input textarea"
        />
        <button onClick={handleSave} className="button">Salvar</button>
        <button onClick={handleLogout} className="button logout">Sair</button>
      </div>
    </div>
  );
}

export default Profile;
