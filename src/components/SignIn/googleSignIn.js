import { Bigbutton } from "../../assets/styles/sharedStyles";
import UserContext from "../../contexts/userContext";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function GoogleSignIn() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  if (error) {
    console.log(error);
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    console.log(user);
    setUserData(user.user);
    navigate("/main");
  }
  return (
    <Bigbutton onClick={() => signInWithGoogle()} disabled={loading}>
      Login com Google
    </Bigbutton>
  );
}
