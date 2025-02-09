import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { globalStyles } from "./styles/globalStyles";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={globalStyles.container}>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}
