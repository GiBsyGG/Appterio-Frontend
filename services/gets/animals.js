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

export const GetAnimalsInvestigator = async (investigatorId) => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/animal/researcher/${investigatorId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error en la petición:", error);
  }
};

export const GetAnimalsByRole = async (role, userId) => {
  if (role === "cuidador") {
    return GetAnimalsKeeper(userId);
  }
  if (role === "investigador") {
    return GetAnimalsInvestigator(userId);
  }
};

export const GetAnimalFamily = async (animalId) => {
  try {
    const returnData = {
      animalFamily: {
        parents: [],
        offspring: [],
      },
      animalSelected: {},
    };
    const response = await axios
      .get(`${config.BASE_URL}/animal/family/${animalId}`)
      .then((response) => {
        returnData.animalFamily = response.data;
      })
      .then(() => {
        return GetAnimalById(animalId).then((animal) => {
          returnData.animalSelected = animal;
        });
      });
    return returnData;
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
