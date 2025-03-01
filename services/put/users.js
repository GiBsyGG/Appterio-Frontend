import axios from "axios";
import config from "../config";

export const UpdateUser = async (userId, newData) => {
  try {
    const response = await axios.put(
      `${config.BASE_URL}/user/${userId}`,
      newData
    );
    console.log("Usuario actualizado:", response.data);
  } catch (error) {
    console.error("Error en la actualización de usuario:", error);
  }
};
