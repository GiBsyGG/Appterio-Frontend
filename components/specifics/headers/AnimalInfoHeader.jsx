import { View, Text, StyleSheet, Image } from "react-native";
import { colors, globalStyles } from "../../../styles/globalStyles";
import StatusItem from "../../commons/StatusItem";
import { GetAnimalName } from "../../../utils/GetAnimalName";

const avatar = require("../../../assets/images/Animal-Avatars.png");

export default function AnimalInfoHeader({ animal }) {
  return (
    <View style={styles.headerContainer}>
      <View>
        <View style={styles.MainInfo}>
          <Text style={globalStyles.sectionTitle}>Especimen</Text>
          <Text style={globalStyles.sectionTitle}>
            {GetAnimalName(animal.id, animal.family)}
          </Text>
        </View>
        <Text style={globalStyles.text}>
          {animal.species} - {animal.sex}
        </Text>
        <Text style={globalStyles.text}>Peso: {animal.weight} gr</Text>
        <Text style={globalStyles.text}>Edad: {animal.age}</Text>
        <Text style={globalStyles.text}>Procedencia: {animal.origin}</Text>
      </View>
      <View style={styles.generalInfo}>
        <Image source={avatar} style={styles.avatar} />
        <StatusItem status={animal.health_status} />
        <View style={styles.generalInfoText}>
          <Text style={globalStyles.text}>Familia</Text>
          <Text style={globalStyles.text}>{animal.family}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBlockColor: colors.primaryGreen,
    borderBottomWidth: 4,
    paddingHorizontal: 28,
    paddingBottom: 16,
  },
  MainInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  generalInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },

  generalInfoText: {
    justifyContent: "center",
    alignItems: "center",
  },
});

