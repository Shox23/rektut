import { headerBearerConfig, requestInstance } from ".";
import { getAdsParams } from "../models/models";

export const getAdvertisements = async (params?: getAdsParams) => {
  const response = await requestInstance
    .get(`/ads?${params}`, headerBearerConfig)
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

export const getOnlyMyAdvertisements = async (params?: getAdsParams) => {
  const response = await requestInstance
    .get(`/myads?${params}`, headerBearerConfig)
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

export const createAdvertisement = async (data: FormData) => {
  const response = await requestInstance
    .post("/ads/create/", data, headerBearerConfig)
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
