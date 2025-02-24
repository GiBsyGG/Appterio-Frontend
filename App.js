import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}
