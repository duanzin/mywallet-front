import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [disable, setDisable] = React.useState(false);
  const { setuserinfo } = useContext(Context);
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    setDisable(true);

    const request = axios.post(REACT_APP_API_URL, form);
    request.then((resposta) => {
      setuserinfo(resposta.data);
      setDisable(false);
      navigate(`/home`);
    });
    request.catch(() => {
      alert("Falha ao fazer login, tente novamente");
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
          disabled={isLoading}
          value={form.email}
          onChange={handleForm}
        />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          required
          disabled={isLoading}
          value={form.password}
          onChange={handleForm}
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
  padding: 90px 0;
  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
  }
  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 13px;
    margin-top: 24px;
    margin-bottom: 36px;
    input {
      width: 326px;
      height: 58px;
      border: none;
      border-radius: 5px;
      padding-left: 15px;
      ::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #000000;
      }
      :disabled {
        background: #f2f2f2;
        color: #afafaf;
      }
    }
    button {
      width: 326px;
      height: 46px;
      background: #a328d6;
      border: none;
      border-radius: 5px;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: #ffffff;
    }
  }
  a {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
