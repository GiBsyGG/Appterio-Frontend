import axios from "axios";
import config from "../config";

export const GetProcedureKeeper = async (keeperId) => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/procedure/keeper/${keeperId}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const GetProcedureInvestigator = async (investigatorId) => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/procedure/researcher/${investigatorId}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const GetProcedureByRole = async (role, userId) => {
  if (role === "cuidador") {
    return GetProcedureKeeper(userId);
  }
  if (role === "investigador") {
    return GetProcedureInvestigator(userId);
  }
};
