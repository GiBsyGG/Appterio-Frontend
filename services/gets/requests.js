import axios from "axios";
import config from "../config";

export const GetRequestKeeper = async (keeperId) => {
  const response = await axios
    .get(`${config.BASE_URL}/request/keeper/${keeperId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return error.response;
      } else {
        throw error;
      }
    });
};

export const GetRequestInvestigator = async (investigatorId) => {
  const response = await axios
    .get(`${config.BASE_URL}/request/researcher/${investigatorId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return error.response;
      } else {
        throw error;
      }
    });
};

export const GetRequestByRole = async (role, userId) => {
  if (role === "cuidador") {
    return GetRequestKeeper(userId);
  }
  if (role === "investigador") {
    return GetRequestInvestigator(userId);
  }
};
