import axios from "axios";
import config from "../config";

export const GetRequestKeeper = async (keeperId) => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/request/keeper/${keeperId}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const GetRequestInvestigator = async (investigatorId) => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/request/researcher/${investigatorId}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const GetRequestByRole = async (role, userId) => {
  if (role === "cuidador") {
    return GetRequestKeeper(userId);
  }
  if (role === "investigador") {
    return GetRequestInvestigator(userId);
  }
};

