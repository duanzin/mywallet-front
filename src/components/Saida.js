import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

export default function Entrada() {
  const [value, setvalue] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [disable, setDisable] = React.useState(false);
  const { userinfo } = useContext(Context);
  const { REACT_APP_API_URL } = process.env;
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${userinfo.token}`,
    },
  };

  function handleSubmit(e) {
    e.preventDefault();
    setDisable(true);

    const request = axios.post(
      `${REACT_APP_API_URL}/registro`,
      {
        value: value,
        description: description,
        type: "saida",
      },
      config
    );
    request.then(() => {
      setDisable(false);
      navigate(`/home`);
    });
    request.catch((error) => {
      alert(error.response.data.message);
      setDisable(false);
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Nova saída</h2>
      <input
        name="value"
        placeholder="Valor"
        type="number"
        required
        disabled={disable}
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <input
        name="description"
        placeholder="Descrição"
        type="text"
        required
        disabled={disable}
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button type="submit" disabled={disable}>
        Salvar entrada
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 13px;
  h2 {
    width: 326px;
    margin: 25px 0;
  }
`;
