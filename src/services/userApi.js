import api from "./api";

export async function signUp(name, email, password) {
  const response = await api.post("/user/sign-up", { name, email, password });
  return response.data;
}

export async function updateExpenses(expenses, userId) {
  const response = await api.post("/user/expenses", { expenses, userId });
  return response.data;
}

export async function getExpenses(id) {
  const response = await api.get(`/user/expenses/${id}`);
  return response.data;
}
