import { Slot } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { globalStyles, colors } from "../styles/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
        "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
        "Inter-Bold": require("../assets/fonts/Inter-SemiBold.ttf"),
        "Inter-SemiBold": require("../assets/fonts/Inter-Bold.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  const insets = useSafeAreaInsets();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      </View>
    );
  }

  return (
    <View
      style={{
        ...globalStyles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Slot name="content" />
    </View>
  );
}

