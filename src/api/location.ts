// import { ref } from "vue";
import { requestInstance } from ".";

// const latitude = ref<string>("");
// const longitude = ref<string>("");
// const locationUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`;

// export const setCurrentCity = async (longitude: string, latitude: string) => {
//   const response = await axios.get(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
//   );
//   console.log(response);
// };

export const getCitiesRequest = async () => {
  const response = await requestInstance
    .get("/cities/")
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

export const getCountriesRequest = async () => {
  const response = await requestInstance
    .get("/countries/")
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
