// src/components/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./login.css"; // Reaproveita o mesmo css do login

function Cadastro() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      setError("Este email já está cadastrado. Faça o login.");
      setSuccess("");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    const newUser = { name, email, password, bio: "Escreva algo sobre você..." };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Cadastro realizado com sucesso! Redirecionando para login...");
    setError("");
    setName("");
    setEmail("");
    setPassword("");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister} className="form">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          required
        />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit" className="button">Cadastrar</button>
      </form>
      <p>Já tem cadastro? <Link to="/login">Faça login aqui</Link></p>
    </div>
  );
}

export default Cadastro;
