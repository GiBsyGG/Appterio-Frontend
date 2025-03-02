import axios from "axios";
import config from "../config";

export const CreateProcedure = async (title, description, specimen_id, user_id, status) => {
  try {
    const data = {
      title,
      description,
      specimen_id, 
      user_id,     
      status      
    };
    const response = await axios.post(`${config.BASE_URL}/procedure`, data);
    console.log("Respuesta del POST:", response.data);
    return response;
  } catch (error) {
    console.error("Error en la petición POST:", error);
    throw error;
  }
};
