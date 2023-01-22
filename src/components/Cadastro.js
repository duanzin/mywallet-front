import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    name: "",
    repeat: "",
  });
  const [disable, setDisable] = React.useState(false);
  const navigate = useNavigate();
  const { REACT_APP_API_URL } = process.env;

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignUp(e) {
    e.preventDefault();
    setDisable(true);

    const request = axios.post(`${REACT_APP_API_URL}/cadastro`, form);
    request.then(() => {
      setDisable(false);
      navigate(`/`);
    });
    request.catch((error) => {
      alert(error.response.data.message);
      setDisable(false);
    });
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <form onSubmit={handleSignUp}>
        <input
          name="name"
          placeholder="Nome"
          type="text"
          required
          disabled={disable}
          value={form.name}
          onChange={handleForm}
        />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          required
          disabled={disable}
          value={form.email}
          onChange={handleForm}
        />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          required
          disabled={disable}
          value={form.password}
          onChange={handleForm}
        />
        <input
          name="repeat"
          placeholder="Confirme a senha"
          type="password"
          required
          disabled={disable}
          value={form.repeat}
          onChange={handleForm}
        />
        <button type="submit" disabled={disable}>
          Cadastrar
        </button>
      </form>

      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 95px 0;
  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 13px;
    margin-top: 24px;
    margin-bottom: 36px;
  }
  a {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
