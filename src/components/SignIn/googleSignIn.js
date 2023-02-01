import { Bigbutton } from "../../assets/styles/sharedStyles";
import UserContext from "../../contexts/userContext";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { postSignInWithGoogle } from "../../services/authGoogle";

export default function GoogleSignIn() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  if (error) {
    console.log(error);
    toast("Não foi possível fazer o login!");
  }
  if (loading) {
    return (
      <Bigbutton onClick={() => signInWithGoogle()} disabled={loading}>
        Login com Google
      </Bigbutton>
    );
  }
  if (user) {
    console.log(user);
    const name = user.user.displayName;
    const token = user.user.accessToken;
    const email = user.user.email;
    const password = user.user.uid;
    const userData = postSignInWithGoogle(name, email, password, token)
      .then((res) => {
        console.log(res);
        setUserData(res);
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Bigbutton onClick={() => signInWithGoogle()} disabled={loading}>
      Login com Google
    </Bigbutton>
  );
}
