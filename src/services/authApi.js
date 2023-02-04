import api from "./api";

export async function signIn(email, password) {
  const response = await api.post("/user/sign-in", { email, password });
  return response.data;
}
