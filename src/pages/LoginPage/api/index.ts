import { headerBearerConfig, requestInstance } from "../../../api";
import { signUpRequestData } from "../models";

export const loginRequest = async (data: any) => {
  const response = await requestInstance
    .post("/auth/login/", data)
    .then(async (res) => {
      console.log(res);
      const response = res;
      return await response.data;
    })
    .catch((err) => {
      console.log(err);

      if (err.response) {
        return err.response.data.error;
        // client received an error response (5xx, 4xx)
      } else if (err.request) {
        // client never received a response, or request never left
      } else {
        // anything else
      }
    });
  return response;
};

export const registerRequest = async (data: signUpRequestData) => {
  const response = await requestInstance
    .post("/auth/register/", data)
    .then(async (res) => {
      console.log(res);
      const response = res;
      return await response.data;
    })
    .catch((err) => {
      console.log(err);

      if (err.response) {
        // client received an error response (5xx, 4xx)
      } else if (err.request) {
        // client never received a response, or request never left
      } else {
        // anything else
      }
    });
  return response;
};

export const refreshRequest = async (token: string) => {
  const data = { refresh: token };
  const response = await requestInstance
    .post("/refresh/", data, headerBearerConfig)
    .then(async (res) => {
      console.log(res);
      const response = res;
      return await response.data;
    })
    .catch((err) => {
      if (err.response) {
        // client received an error response (5xx, 4xx)
      } else if (err.request) {
        // client never received a response, or request never left
      } else {
        // anything else
      }
    });
  return response;
};

// export const registerWithSocials = (data: string) => {

// }
