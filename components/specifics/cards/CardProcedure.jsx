import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, globalStyles } from "../../../styles/globalStyles";
import { animals } from "../../../data/mockData/Animals";
import AnimalResume from "../resumeInfo/AnimalResume";
import StatusItem from "../../commons/StatusItem";

export default function CardProcedure({ procedure, onPress }) {
  const GetAnimalById = (id) => {
    return animals.find((animal) => animal.id === id);
  };

  const animalInfo = GetAnimalById(procedure.specimenID);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress(procedure);
      }}
    >
      <View style={styles.card}>
        <View style={styles.titleBox}>
          <Text style={globalStyles.title} numberOfLines={2}>
            {procedure.title}
          </Text>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={globalStyles.text} numberOfLines={3}>
            {procedure.description}
          </Text>
        </View>
        <View style={styles.cardInfoBox}>
          <AnimalResume animal={animalInfo} />
          <StatusItem status={procedure.status} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    height: 200,
    flex: 1,
    justifyContent: "space-around",
  },

  titleBox: {
    borderBottomWidth: 2,
    borderBottomColor: colors.gray1,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  descriptionBox: {
    paddingHorizontal: 16,
    height: 80,
    paddingTop: 8,
  },

  cardInfoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
  },
});
