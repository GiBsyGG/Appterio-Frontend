import axios from "axios";
import config from "../config";

export const UpdateRequest = async (requestId) => {
  const newStatus = {
    status: "HECHO",
  };
  try {
    const response = await axios.put(
      `${config.BASE_URL}/request/${requestId}`,
      newStatus
    );
    console.log("Usuario actualizado:", response.data);
  } catch (error) {
    console.error("Error en la actualización de usuario:", error);
  }
};
