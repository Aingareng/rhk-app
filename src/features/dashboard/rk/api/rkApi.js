import { api } from "../../../../shared/utils/api";

export async function createRk(payload) {
  return await api.post("/submit", payload);
}
export async function getAllRk() {
  return await api.get("/resultRk");
}
