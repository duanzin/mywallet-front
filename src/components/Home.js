import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import LiRegistro from "./LiRegistro";

export default function Home() {
  const [registros, setRegistros] = React.useState([]);
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  return (
    <>
      <Header>
        <h2>Olá, {user.name}</h2>
      </Header>
      <StyledDiv>
        {registros.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          <ul>
            {registros.map((r) => (
              <LiRegistro
                key={r.id}
                id={r.id}
                titulo={r.name}
                setRegistros={setRegistros}
                config={config}
              />
            ))}
          </ul>
        )}
      </StyledDiv>
      <Footer>
        <button
          onClick={() => {
            navigate("/nova-entrada");
          }}
        >
          Nova entrada
        </button>
        <button
          onClick={() => {
            navigate("/nova-saida");
          }}
        >
          Nova saída
        </button>
      </Footer>
    </>
  );
}

const Header = styled.header`
  width: 100vw;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  p {
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    margin: auto;
  }
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  button {
    width: 155px;
    height: 114px;
    background: #a328d6;
    border-radius: 5px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }
`;
