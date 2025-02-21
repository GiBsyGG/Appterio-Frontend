import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors, globalStyles } from "../../../../styles/globalStyles";
import AnimalInfoHeader from "../../../../components/specifics/headers/AnimalInfoHeader";
import AnimalsContainer from "../../../../components/specifics/AnimalsContainer";
import CardAnimal from "../../../../components/specifics/cards/CardAnimal";
import { animals } from "../../../../data/mockData/Animals";

export default function AnimalFamily({ animalSelected }) {
  const animalChildrens = animals.filter(
    (animal) =>
      animal.parent1Id === animalSelected.id ||
      animal.parent2Id === animalSelected.id
  );

  const animalParents = animals.filter(
    (animal) =>
      animalSelected.parent1Id === animal.id ||
      animalSelected.parent2Id === animal.id
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <AnimalInfoHeader animal={animalSelected} />
        <View style={styles.MainContainer}>
          <View>
            <View style={styles.titleBox}>
              <Text style={globalStyles.title}>Progenitores</Text>
            </View>
          </View>
          {animalParents.length > 0 ? (
            <AnimalsContainer animals={animalParents} />
          ) : (
            <Text style={globalStyles.text}>No hay progenitores</Text>
          )}
        </View>
        <View style={styles.MainContainer}>
          <View>
            <View style={styles.titleBox}>
              <Text style={globalStyles.title}>Crías</Text>
            </View>
          </View>
          {animalChildrens.length > 0 ? (
            <AnimalsContainer animals={animalChildrens} />
          ) : (
            <Text style={globalStyles.text}>No hay crías</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    flex: 1,
    gap: 8,
  },

  MainContainer: {
    gap: 28,
    paddingHorizontal: 28,
    marginVertical: 28,
  },

  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: colors.primaryGreen,
    paddingBottom: 6,
  },

  familyContainer: {
    flex: 1,
    gap: 28,
    justifyContent: "space-between",
  },
});
