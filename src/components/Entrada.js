import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Context } from "../Context";

export default function Entrada() {
  const [form, setForm] = React.useState({ valor: "", descricao: "" });
  const [disable, setDisable] = React.useState(false);
  const { user } = useContext(Context);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h2>Nova entrada</h2>
      <StyledForm>
        <input
          name="valor"
          placeholder="Valor"
          type="number"
          required
          disabled={disable}
          value={form.valor}
          onChange={handleForm}
        />
        <input
          name="descricao"
          placeholder="Descrição"
          type="text"
          required
          disabled={disable}
          value={form.descricao}
          onChange={handleForm}
        />
        <button type="submit" disabled={disable}>
          Salvar entrada
        </button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  row-gap: 13px;
`;
