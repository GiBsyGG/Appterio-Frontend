import axios from "axios";
import config from "../config";

export const GetAliveAnimalsData = async () => {
  try {
    const response = await axios.get(`${config.BASE_URL}/animal/alive`);
    return response.data;
  } catch (error) {
    console.error("Error en la petición:", error);
  }
};

export const GetAnimalsKeeper = async (keeperId) => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/animal/keeper/${keeperId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error en la petición:", error);
  }
};

export const GetAnimalById = async (animalId) => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/animal/detail/${animalId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error en la petición:", error);
  }
};
