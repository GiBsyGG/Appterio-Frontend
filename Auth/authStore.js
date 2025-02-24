// authStore.js
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { rolesEnum } from "../utils/RolesEnum";

const useAuthStore = create((set) => ({
  user: {
    username: "",
    email: "",
    role: rolesEnum.UNLOGED,
    userId: -1,
  },
  login: async (username, role, email, userId) => {
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("role", role);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("userId", userId);
    await AsyncStorage.setItem("isLoggedIn", "true");
    set({ user: { username, email, role, userId } });
  },
  logout: async () => {
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("role");
    await AsyncStorage.removeItem("email");
    await AsyncStorage.removeItem("userId");
    await AsyncStorage.removeItem("isLoggedIn");
    set({
      user: {
        username: "generic",
        email: "",
        role: rolesEnum.UNLOGED,
        userId: -1,
      },
    });
  },
}));

export default useAuthStore;
