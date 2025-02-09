import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

