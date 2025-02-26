import { api } from "../../../../shared/utils/api";

export async function createRk(payload) {
  return await api.post("/rk", payload);
}
