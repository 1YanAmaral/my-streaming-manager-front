import api from "./api";

export async function getStreamings() {
  const response = await api.get("/streamings");

  return response.data;
}

export async function postUserStreamings(selected) {
  const response = await api.post("/userstreamings", { selected });

  return response.data;
}
