import axios from "axios";
import { ref } from "vue";

const accessToken = ref(
  localStorage.accessToken ? JSON.parse(localStorage.accessToken) : ""
);

export const requestInstance = axios.create({
  baseURL: "http://185.87.252.180:8080/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const headerBearerConfig = {
  headers: {
    Authorization: `Bearer ${accessToken.value.token}`,
  },
};

export const headerFormDataConfig = {
  headers: {
    "Content-type": "multipart/form-data",
  },
};
