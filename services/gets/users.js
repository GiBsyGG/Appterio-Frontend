import axios from "axios";
import config from "../config";
import { set } from "react-hook-form";

// Passing configuration object to axios
export const GetUsersData = async (setAllUsers) => {
  const roles = ["investigador", "cuidador", "administrador"];
  const allUsers = [];

  try {
    for (const role of roles) {
      const response = await axios.get(`${config.BASE_URL}/user/?role=${role}`);
      allUsers.push(...response.data);
    }
    setAllUsers(allUsers);
  } catch (error) {
    console.error("Error en la petición de usuarios:", error);
  }
};

export const GetUsersDataById = async (userId, setUserData) => {
  try {
    const response = await axios.get(`${config.BASE_URL}/user/${userId}`);
    setUserData(response.data);
  } catch (error) {
    console.error("Error en la petición de usuario por ID:", error);
  }
};
