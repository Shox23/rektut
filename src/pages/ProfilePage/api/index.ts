import { headerBearerConfig, requestInstance } from "../../../api";

export const getProfile = async () => {
  const response = await requestInstance
    .get("/auth/profile/", headerBearerConfig)
    .then(async (res) => {
      // console.log(res);
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

export const editProfile = async (data: FormData) => {
  const response = await requestInstance
    .put("/auth/profile/", data, headerBearerConfig)
    .then(async (res) => {
      // console.log(res);
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
