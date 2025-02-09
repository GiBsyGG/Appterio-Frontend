import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Home from "./(screens)/Home/Home";

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Home />
    </View>
  );
}
