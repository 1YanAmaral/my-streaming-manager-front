import api from "./api";

export async function getStreamings() {
  const response = await api.get("/streamings");

  return response.data;
}

export async function postUserStreamings(selected) {
  const response = await api.post("/userstreamings", { selected });

  return response.data;
}

export async function getStreamingsByUser(userId) {
  const response = await api.get("/userstreamings/services", { userId });

  return response.data;
}

export async function getPopularTitles(streamingId) {
  const response = await api.get(`/streamings/titles/popular/${streamingId}`);

  return response.data;
}

export async function getSearchResults(search_value) {
  const response = await api.get(`/streamings/titles/${search_value}`);

  return response.data;
}
