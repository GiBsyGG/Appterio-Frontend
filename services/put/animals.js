import axios from "axios";
import config from "../config";

export const UpdateAnimal = async (animalId, newData) => {
  try {
    const response = await axios.patch(
      `${config.BASE_URL}/animal/${animalId}`,
      newData
    );
    console.log("Usuario actualizado:", response.data);
  } catch (error) {
    console.error("Error en la actualización de usuario:", error);
  }
};
