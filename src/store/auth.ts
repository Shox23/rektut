import { defineStore } from "pinia";
import { ref } from "vue";
import {
  loginRequest,
  refreshRequest,
  registerRequest,
} from "../pages/LoginPage/api";
import { loginRequestData, signUpRequestData } from "../pages/LoginPage/models";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "vue-router";

const router = useRouter();
export const useAuthStore = defineStore("auth", () => {
  const isAuth = ref<boolean>(false);
  const isAuthenticated = ref<boolean>(false);
  const refreshToken = ref<string>("");
  const accessToken = ref<string>("");

  const setAuth = (value: boolean) => {
    isAuth.value = value;
  };

  const setTokens = (access: string, refresh?: string) => {
    if (refresh) {
      refreshToken.value = refresh;
      localStorage.refreshToken = JSON.stringify({
        token: refreshToken.value,
        exp: jwtDecode(refreshToken.value).exp,
      });
    }
    accessToken.value = access;
    localStorage.accessToken = JSON.stringify({
      token: accessToken.value,
      exp: jwtDecode(accessToken.value).exp,
    });
  };

  const login = async (data: loginRequestData) => {
    const response = await loginRequest(data);
    console.log(response);
    if (response) {
      setTokens(response.access, response.refresh);
      return true;
    } else {
      return false;
    }
  };

  const register = async (data: signUpRequestData) => {
    const response = await registerRequest(data);
    console.log(response);
  };

  const refreshTokens = async () => {
    const token = JSON.parse(localStorage.refreshToken);
    const response = await refreshRequest(token.token);
    console.log(response);
    if (!response) {
      logOut();
    }
    setTokens(response.access);
  };

  const logOut = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    router.push("/log-in");
  };

  const checkTokens = () => {
    if (localStorage.refreshToken && localStorage.accessToken) {
      const refreshToken = JSON.parse(localStorage.refreshToken);
      const refreshTokenExp = refreshToken.exp;
      const accessToken = JSON.parse(localStorage.accessToken);
      const accessTokenExp = accessToken.exp;
      if (new Date(refreshTokenExp * 1000) < new Date()) {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
        isAuthenticated.value = false;
        console.log("FALSE");
        return false;
      }
      if (new Date(accessTokenExp * 1000 - 10000) < new Date()) {
        // REFRESH TOKEN
        refreshTokens();
        console.log("REFRESH ACCESS TOKEN");
        isAuthenticated.value = false;
      }
      isAuthenticated.value = true;
      console.log("TRUE");
      return true;
    } else {
      console.log("FALSE 2");
      return false;
    }
  };

  return {
    setAuth,
    refreshToken,
    isAuth,
    refreshTokens,
    accessToken,
    isAuthenticated,
    login,
    checkTokens,
    register,
  };
});
