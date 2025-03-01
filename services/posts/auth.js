import axios from "axios";
import config from "../config";
import qs from "qs";
import { jwtDecode } from "jwt-decode";

export const AuthUser = async (email, password, login) => {
  try {
    const data = qs.stringify({
      grant_type: "password",
      username: email,
      password: password,
    });
    const response = await axios.post(`${config.BASE_URL}/auth/token`, data);
    const userId = jwtDecode(response.data.access_token).sub;
    const userDataResponse = await axios.get(
      `${config.BASE_URL}/user/${userId}`
    );
    login(
      userDataResponse.data.name,
      userDataResponse.data.role,
      email,
      userId
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
