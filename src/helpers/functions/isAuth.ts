import TokenStatus from "../enums/authEnums";

const isAuth = (): TokenStatus => {
  if (localStorage.refreshToken && localStorage.accessToken) {
    const refreshToken = JSON.parse(localStorage.refreshToken);
    const refreshTokenExp = refreshToken.exp;
    const accessToken = JSON.parse(localStorage.accessToken);
    const accessTokenExp = accessToken.exp;
    if (new Date(refreshTokenExp * 1000) < new Date()) {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      // console.log("FALSE");
      return TokenStatus.logout;
    }
    if (new Date(accessTokenExp * 1000 - 10000) < new Date()) {
      // REFRESH TOKEN
      // console.log("REFRESH ACCESS TOKEN");
      return TokenStatus.refresh;
    }
    // console.log("TRUE");
    return TokenStatus.ok;
  } else {
    return TokenStatus.empty;
  }
};

export default isAuth;
