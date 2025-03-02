import axios from "axios";
import config from "../config";

// Passing configuration object to axios
export const PostAnimal = async (animalData) => {
  try {
    const response = await axios.post(`${config.BASE_URL}/animal`, animalData);
    console.log("Respuesta del POST:", response.data);
  } catch (error) {
    console.error("Error en la petición POST:", error);
  }
};

