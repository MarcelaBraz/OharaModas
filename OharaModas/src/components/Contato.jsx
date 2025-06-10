import React, { useState } from 'react';
import './Contato.css';

function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você poderia enviar os dados para o backend futuramente
    setForm({ nome: '', email: '', mensagem: '' }); // limpa o formulário
  };

  return (
    <div className="contato">
      <h2>Fale com a OharaModas</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Mensagem:</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
        <footer className="footer">
        <p>© 2025 OharaModas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Contato;
