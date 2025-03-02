import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors, globalStyles } from "../../../styles/globalStyles";
import StatusItem from "../../commons/StatusItem";
import { Link } from "expo-router";
import { GetAnimalName } from "../../../utils/GetAnimalName";

const AnimalAvatar = require("../../../assets/images/Animal-Avatars.png");

export default function CardAnimal({ animal }) {
  return (
    <Link href={`/animals/${animal.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.titleBox}>
            <Text style={globalStyles.title}>
              Especimen {GetAnimalName(animal.id, animal.family)}
            </Text>
            <Image source={AnimalAvatar} style={styles.avatar} />
          </View>
          <View style={styles.cardInfoBox}>
            <Text style={globalStyles.smallText}>
              {animal.species} - {animal.sex}
            </Text>
            <StatusItem status={animal.health_status} />
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    height: 100,
    flex: 1,
    justifyContent: "space-around",
  },

  titleBox: {
    borderBottomWidth: 2,
    borderBottomColor: colors.gray1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  cardInfoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
