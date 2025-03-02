import axios from "axios";
import config from "../config";

export const UpdateProcedure = async (researchId) => {
  const newStatus = {
    status: "COMPLETA",
  };
  try {
    const response = await axios.put(
      `${config.BASE_URL}/research/${researchId}`,
      newStatus
    );
    console.log("Usuario actualizado:", response.data);
  } catch (error) {
    console.error("Error en la actualización de usuario:", error);
  }
};
