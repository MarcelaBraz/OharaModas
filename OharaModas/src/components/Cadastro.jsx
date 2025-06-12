import React, { useState } from 'react';
import axios from 'axios';

function Cadastro() {
  const [formData, setFormData] = useState({
    cpfCliente: '',
    nomeCliente: '',
    dtNascimentoCliente: '',
    viaCliente: '',
    numCliente: '',
    complCliente: '',
    bairroCliente: '',
    cidadeCliente: '',
    ufCliente: '',
    cepCliente: '',
    telefoneCliente: '',
    celularCliente: '',
    emailCliente: '',
    senhaCliente: '',
    empresaCNPJ: '' // agora o usuário deve preencher esse campo
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://localhost:7036/Cliente/adicionar-cliente', formData);
      setMensagem('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao cadastrar. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="cpfCliente" placeholder="CPF" onChange={handleChange} required /><br />
        <input type="text" name="nomeCliente" placeholder="Nome completo" onChange={handleChange} required /><br />
        <input type="date" name="dtNascimentoCliente" placeholder="Data de Nascimento" onChange={handleChange} required /><br />
        <input type="text" name="viaCliente" placeholder="Rua/Avenida" onChange={handleChange} required /><br />
        <input type="text" name="numCliente" placeholder="Número" onChange={handleChange} required /><br />
        <input type="text" name="complCliente" placeholder="Complemento" onChange={handleChange} /><br />
        <input type="text" name="bairroCliente" placeholder="Bairro" onChange={handleChange} required /><br />
        <input type="text" name="cidadeCliente" placeholder="Cidade" onChange={handleChange} required /><br />
        <input type="text" name="ufCliente" placeholder="UF" onChange={handleChange} required /><br />
        <input type="text" name="cepCliente" placeholder="CEP" onChange={handleChange} required /><br />
        <input type="text" name="telefoneCliente" placeholder="Telefone" onChange={handleChange} /><br />
        <input type="text" name="celularCliente" placeholder="Celular" onChange={handleChange} required /><br />
        <input type="email" name="emailCliente" placeholder="Email" onChange={handleChange} required /><br />
        <input type="password" name="senhaCliente" placeholder="Senha" onChange={handleChange} required /><br />
        <input type="text" name="empresaCNPJ" placeholder="CNPJ da Empresa" onChange={handleChange} required /><br />

        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Cadastro;
