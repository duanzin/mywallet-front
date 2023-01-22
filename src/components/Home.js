import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

export default function Home() {
  const [carteira, setCarteira] = React.useState({
    name: "",
    saldo: 0,
    registros: [],
  });
  const { userinfo } = useContext(Context);
  console.log(userinfo);
  const navigate = useNavigate();
  const { REACT_APP_API_URL } = process.env;
  const config = {
    headers: {
      Authorization: `Bearer ${userinfo.token}`,
    },
  };

  React.useEffect(() => {
    const requisicao = axios.get(`${REACT_APP_API_URL}/home`, config);
    requisicao.then((resposta) => {
      setCarteira(resposta.data);
    });
    requisicao.catch((error) => {
      alert(error.response.data.message);
    });
  }, []);

  return (
    <Corpo>
      <Header>
        <h2>Olá, {userinfo.name}</h2>
      </Header>
      <StyledDiv>
        {carteira.registros.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          <>
            <ul>
              {carteira.registros.map((r, index) => (
                <StyledLi key={index}>
                  <span>{r.date}</span>
                  <span>{r.description}</span>
                  <span>{r.value}</span>
                </StyledLi>
              ))}
            </ul>
            <div>
              <h3>Saldo</h3>
              <h4>{carteira.saldo}</h4>
            </div>
          </>
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
    </Corpo>
  );
}

const Corpo = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 25px 16px 25px;
`;

const Header = styled.header`
  width: 326px;
  height: 31px;
  margin-bottom: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  width: 326px;
  height: 446px;
  margin-bottom: 13px;
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

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
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
