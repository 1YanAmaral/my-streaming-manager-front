import {
  Wrapper,
  Logo,
  Info,
  Bigbutton,
  Content,
  SpanLink,
  Spacer,
} from "../../assets/styles/sharedStyles";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSignIn from "../../hooks/useSignIn";
import GoogleSignIn from "./googleSignIn";
import UserContext from "../../contexts/userContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loadingSignIn, signIn } = useSignIn();
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast("Login realizado com sucesso!");
      navigate("/user");
    } catch (err) {
      toast("Não foi possível fazer o login!");
    }
  }

  return (
    <>
      <Content>
        <Wrapper>
          <Logo>My Streaming Manager</Logo>

          <form onSubmit={handleLogin}>
            <Wrapper>
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

              <Bigbutton type="submit" disabled={loadingSignIn}>
                Login
              </Bigbutton>
              <Spacer />
              <GoogleSignIn />
            </Wrapper>
          </form>
          <SpanLink>
            <Link to="/register">Primeira vez? Cadastre-se!</Link>
          </SpanLink>
        </Wrapper>
      </Content>
    </>
  );
}
