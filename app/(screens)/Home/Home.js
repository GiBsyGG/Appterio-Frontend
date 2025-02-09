import React from "react";
import { Text, View, Image } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";
import { homeStyles } from "./Home.styles";

const logo = require("../../../assets/images/Logo.png");

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Image source={logo} style={homeStyles.homeImage}></Image>
      <Text style={globalStyles.mainTitle}>Bienvenido</Text>
      <Text style={globalStyles.grayTitle}>
        ¡Cuidamos tus datos, cuidamos tu bioterio!
      </Text>
    </View>
  );
}
