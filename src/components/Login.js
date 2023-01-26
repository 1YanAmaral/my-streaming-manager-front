import {
  Wrapper,
  Logo,
  Info,
  Bigbutton,
  Content,
  SpanLink,
} from "../assets/styles/sharedStyles";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { login } from "../services/mywalletServices";
//import UserContext from "./context/UserContext";
//import LoginContext from "./context/LoginContext";

export default function Login() {
  const navigate = useNavigate();
  //const { setToken } = useContext(LoginContext);
  //const { setUser } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  /* function sendLogin(e) {
    e.preventDefault();
    const promise = login(form);
    promise
      .then((res) => {
        setUser(res.data.user);
        setToken(res.data.token);
        console.log(res.data.user);
        console.log(res.data.token);
        navigate("/inicio");
      })
      .catch((res) => {
        //alert(res.response.data.message);
        alert("Algo está errado, verifique suas informações!");
      });
  } */
  return (
    <>
      <Content>
        <Wrapper>
          <Logo>My Streaming Manager</Logo>

          <form>
            <Wrapper>
              <Info
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={handleForm}
                value={form.email}
                required
              />
              <Info
                type="password"
                placeholder="Senha"
                name="password"
                onChange={handleForm}
                value={form.password}
                required
              />

              <Bigbutton type="submit">Entrar</Bigbutton>
            </Wrapper>
          </form>
          <SpanLink>
            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
          </SpanLink>
        </Wrapper>
      </Content>
    </>
  );
}
