import {
  Wrapper,
  Logo,
  Info,
  Bigbutton,
  Content,
  SpanLink,
} from "../assets/styles/sharedStyles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
import { toast } from "react-toastify";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast("As senhas devem ser iguais!");
    } else {
      try {
        await signUp(name, email, password);
        toast("Cadastro efetuado com sucesso! Por favor, faça login.");
        navigate("/");
      } catch (error) {
        toast("Não foi possível fazer o cadastro!");
      }
    }
  }

  return (
    <>
      <Content>
        <Wrapper>
          <Logo>My Streaming Manager</Logo>

          <form onSubmit={handleSignUp}>
            <Wrapper>
              <Info
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Info
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Info
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Info
                type="password"
                placeholder="Confirme a senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <Bigbutton type="submit" disabled={loadingSignUp}>
                Cadastrar
              </Bigbutton>
            </Wrapper>
          </form>
          <SpanLink>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
          </SpanLink>
        </Wrapper>
      </Content>
    </>
  );
}
