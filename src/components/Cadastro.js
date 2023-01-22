import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [repeat, setrepeat] = React.useState("");
  const [disable, setDisable] = React.useState(false);
  const navigate = useNavigate();
  const { REACT_APP_API_URL } = process.env;

  function handleSignUp(e) {
    e.preventDefault();
    setDisable(true);

    if (password !== repeat) {
      setDisable(false);
      return alert("Por favor confirme a senha");
    }

    const request = axios.post(`${REACT_APP_API_URL}/cadastro`, {
      email: email,
      name: name,
      password: password,
    });
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
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          required
          disabled={disable}
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          required
          disabled={disable}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          name="repeat"
          placeholder="Confirme a senha"
          type="password"
          required
          disabled={disable}
          value={repeat}
          onChange={(e) => setrepeat(e.target.value)}
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
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
