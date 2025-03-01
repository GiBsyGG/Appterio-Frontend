import axios from "axios";
import config from "../config";

// Passing configuration object to axios
export const PostUser = async (name, email, password, role) => {
  try {
    const data = {
      name: name,
      email: email,
      password: password,
      role: role,
    };
    const response = await axios.post(`${config.BASE_URL}/user`, data);
    console.log("Respuesta del POST:", response.data);
  } catch (error) {
    console.error("Error en la petición POST:", error);
  }
};
