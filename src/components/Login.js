import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context";

export default function Login() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [disable, setDisable] = React.useState(false);
  const { setuserinfo } = useContext(Context);
  const navigate = useNavigate();
  const { REACT_APP_API_URL } = process.env;

  function handleLogin(e) {
    e.preventDefault();
    setDisable(true);

    const request = axios.post(`${REACT_APP_API_URL}/login`, {
      email: email,
      password: password,
    });
    request.then((resposta) => {
      setuserinfo(resposta.data);
      setDisable(false);
      navigate(`/home`);
    });
    request.catch((error) => {
      alert(error.response.data.message);
      setDisable(false);
    });
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit" disabled={disable}>
          Entrar
        </button>
      </form>

      <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
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
