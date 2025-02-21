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
import { investigations } from "../../../data/mockData/Investigations";
import FamilyButton from "../../../components/specifics/buttons/FamilyButton";

export default function AnimalDetailInv({ animal }) {
  const animalInvestigations = investigations.filter(
    (investigation) => investigation.animalId === animal.id
  );

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <AnimalInfoHeader animal={animal} />
          <View style={styles.containerObservations}>
            <CardObservation
              title={"Últimas observaciones"}
              date={animal.details.ultimasObservaciones.lastUpdate}
              description={animal.details.ultimasObservaciones.description}
              IconComponent={SmallList}
            />
            <CardObservation
              title={"Signos clínicos"}
              date={animal.details.signosClinicos.lastUpdate}
              description={animal.details.signosClinicos.description}
              IconComponent={SmallHeart}
            />
            <CardObservation
              title={"Vacunas"}
              date={animal.details.vacunas.lastUpdate}
              description={animal.details.vacunas.description}
              IconComponent={SmallVaccine}
            />
            <View style={styles.investigationsContainer}>
              <View style={styles.titleBox}>
                <Text style={globalStyles.title}>Investigaciones</Text>
              </View>
              <InvestigationsContainer investigations={animalInvestigations} />
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
