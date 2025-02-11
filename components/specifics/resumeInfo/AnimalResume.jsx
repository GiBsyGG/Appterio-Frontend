import { View, Text, Image, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";

const AnimalAvatar = require("../../../assets/images/Animal-Avatars.png");

export default function AnimalResume({ animal }) {
  return (
    <View style={styles.container}>
      <Image source={AnimalAvatar} style={styles.avatar} />
      <View>
        <Text style={globalStyles.smallTitle}>Espécimen {animal.id}</Text>
        <View>
          <Text style={globalStyles.smallText}>
            {animal.species} - {animal.sex}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
