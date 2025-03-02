export const GetProcedureKeeper = async (keeperId) => {
    try {
      const response = await axios.get(
        `${config.BASE_URL}/procedure/keeper/${keeperId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };
  
  export const GetProcedureInvestigator = async (investigatorId) => {
    try {
      const response = await axios.get(
        `${config.BASE_URL}/procedure/researcher/${investigatorId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };
  
  export const GetProcedureByRole = async (role, userId) => {
    if (role === "cuidador") {
      return GetProcedureKeeper(userId);
    }
    if (role === "investigador") {
      return GetProcedureInvestigator(userId);
    }
  };