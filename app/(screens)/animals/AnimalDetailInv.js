import { View, ScrollView, StyleSheet, Text } from "react-native";
import AnimalInfoHeader from "../../../components/specifics/headers/AnimalInfoHeader";
import CardObservation from "../../../components/specifics/cards/CardObservation";
import {
  SmallList,
  SmallHeart,
  SmallVaccine,
} from "../../../components/commons/Icons";
import CreateButton from "../../../components/commons/Buttons/CreateButton";
import InvestigationsContainer from "../../../components/specifics/InvestigationsContainer";
import { globalStyles, colors } from "../../../styles/globalStyles";
import FamilyButton from "../../../components/specifics/buttons/FamilyButton";
import { Link } from "expo-router";
import { BackIcon } from "../../../components/commons/Icons";

export default function AnimalDetailInv({ animal }) {
  const researchesModified = animal.researches.map((research) => {
    return {
      ...research,
      animalInfo: {
        id: animal.id,
        sex: animal.sex,
        family: animal.family,
        species: animal.species,
      },
    };
  });

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.backButtonContainer}>
            <Link href={"/animals"}>
              <BackIcon color={colors.gray2} />
            </Link>
          </View>
          <AnimalInfoHeader animal={animal} />
          <View style={styles.containerObservations}>
            <CardObservation
              title={"Últimas observaciones"}
              date={animal.details.last_observations.last_update}
              description={animal.details.last_observations.last_update}
              IconComponent={SmallList}
            />
            <CardObservation
              title={"Signos clínicos"}
              date={animal.details.clinical_signs.last_update}
              description={animal.details.clinical_signs.last_update}
              IconComponent={SmallHeart}
            />
            <CardObservation
              title={"Vacunas"}
              date={animal.details.vaccines.last_update}
              description={animal.details.vaccines.description}
              IconComponent={SmallVaccine}
            />
            <View style={styles.investigationsContainer}>
              <View style={styles.titleBox}>
                <Text style={globalStyles.title}>Investigaciones</Text>
              </View>
              {researchesModified.length > 0 ? (
                <InvestigationsContainer investigations={researchesModified} />
              ) : (
                <Text style={globalStyles.text}>
                  No se han registrado investigaciones
                </Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.ButtonsContainer}>
        <FamilyButton animalId={animal.id} />
        <CreateButton urlButton={"create/investigation"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    flex: 1,
    gap: 8,
    justifyContent: "flex-start",
  },
  backButtonContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  containerObservations: {
    flex: 1,
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

  investigationsContainer: {
    justifyContent: "space-between",
    alignContent: "center",
    gap: 28,
  },
  ButtonsContainer: {
    justifyContent: "space-between",
    alignContent: "center",
    gap: 28,
    position: "absolute",
    bottom: 40,
    right: 20,
  },
});
