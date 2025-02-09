import { Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Home from "../screens/home/home";

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Home />
    </View>
  );
}

