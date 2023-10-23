import { removeLocalStorage, setLocalStorage, getLocalStorage } from "@/helpers/handle-local-storage";
import jwtDecode from "jwt-decode";

export const getToken = () => getLocalStorage('token');

export const login = (token: string) => {
  const payload = jwtDecode(token)

  console.log(payload)

  setLocalStorage('token', token);
  setLocalStorage('user-persist', payload)
};

export const logout = () => {
  removeLocalStorage('token');
};

