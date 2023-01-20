import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";

export default function App() {
  const [userinfo, setuserinfo] = React.useState(undefined);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={{ userinfo, setuserinfo }}>
        <Routes>
          <Route path="/" exact={true} element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<Entrada />} />
          <Route path="/nova-saida" element={<Saida />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}
