import { api } from "../../../shared/utils/api";

export async function login(payload) {
  return await api.post("/login", payload);
}
