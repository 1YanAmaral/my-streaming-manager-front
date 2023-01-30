import api from "./api";

export async function getStreamings() {
  const response = await api.get("/streamings", {
    /*  headers: {
      Authorization: `Bearer ${token}`,
    }, */
  });

  return response.data;
}
