import api from "./api";

export async function postSignInWithGoogle(name, email, password, token) {
  const response = await api.post("/user/sign-in/google", {
    name,
    email,
    password,
    token,
  });
  return response.data;
}
