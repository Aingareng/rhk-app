import { api } from "../../../shared/utils/api";

export async function getRhk(params) {
  const response = await api.get("/rhk", params);

  if (response.status !== 200) {
    return [];
  }

  return response.data;
}
