import { View } from "react-native";
import Home from "../(screens)/Home";
import { GetUsersData } from "../../services/gets/users";
import { useEffect } from "react";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Home />
    </View>
  );
}
