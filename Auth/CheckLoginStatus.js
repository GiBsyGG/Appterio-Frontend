import AsyncStorage from "@react-native-async-storage/async-storage";

export const CheckLoginStatus = async () => {
  try {
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    const username = await AsyncStorage.getItem("username");
    const role = await AsyncStorage.getItem("role");
    const userId = await AsyncStorage.getItem("userId");

    if (isLoggedIn === "true") {
      return { isLoggedIn: true, username, role, userId };
    } else {
      return { isLoggedIn: false };
    }
  } catch (error) {
    console.error("Error retrieving data", error);
    return { isLoggedIn: false };
  }
};
