import axios from "axios";
import config from "../config";

// Passing configuration object to axios
export const PostResearch = async (newData) => {
  try {
    const response = await axios.post(`${config.BASE_URL}/research`, newData);
    console.log("Respuesta del POST:", response.data);
  } catch (error) {
    console.error("Error en la petición POST:", error);
  }
};
