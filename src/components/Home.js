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
      <StyledDiv saldo={carteira.saldo}>
        {carteira.registros.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          <>
            <ul>
              {carteira.registros.map((r, index) => (
                <StyledLi key={index} type={r.type}>
                  <div>
                    <span>{r.date}</span>
                    <span>{r.description}</span>
                  </div>
                  <span>{r.value}</span>
                </StyledLi>
              ))}
            </ul>
            <div>
              <b>Saldo</b>
              <p>{carteira.saldo}</p>
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
  flex-direction: column;
  justify-content: space-between;
  width: 326px;
  height: 446px;
  padding: 23px 12px 10px 12px;
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
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 17px;
    line-height: 20px;
    b {
      font-weight: 700;
      color: #000000;
    }
    p {
      margin: 0;
      font-weight: 400;
      color: ${(props) => (props.saldo < 0 ? "#C70000" : "#03AC00")};
    }
  }
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.type == "entrada" ? "#03AC00" : "#C70000")};
  div {
    display: flex;
    column-gap: 5px;
    color: #c6c6c6;
    span {
      :last-child {
        color: #000000;
      }
    }
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
