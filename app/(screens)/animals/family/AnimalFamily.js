import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors, globalStyles } from "../../../../styles/globalStyles";
import AnimalInfoHeader from "../../../../components/specifics/headers/AnimalInfoHeader";
import AnimalsContainer from "../../../../components/specifics/AnimalsContainer";
import { Link } from "expo-router";
import { BackIcon } from "../../../../components/commons/Icons";
import { useState, useEffect } from "react";

export default function AnimalFamily({ animalSelected, animalFamily }) {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    if (
      animalFamily.parents.parent1 !== null &&
      animalFamily.parents.parent2 !== null
    ) {
      setParents([animalFamily.parents.parent1, animalFamily.parents.parent2]);
    }
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <Link href={`animals/${animalSelected.id}`}>
            <BackIcon color={colors.gray2} />
          </Link>
        </View>
        <AnimalInfoHeader animal={animalSelected} />
        <View style={styles.MainContainer}>
          <View>
            <View style={styles.titleBox}>
              <Text style={globalStyles.title}>Progenitores</Text>
            </View>
          </View>
          {parents.length > 0 ? (
            <AnimalsContainer animals={parents} />
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
          {animalFamily.offspring.length > 0 ? (
            <AnimalsContainer animals={animalFamily.offspring} />
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
  backButtonContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
