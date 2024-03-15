import { requestInstance } from ".";

export const getCategoriesRequest = async () => {
  const response = await requestInstance
    .get("/categories/")
    .then(async (res) => {
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
