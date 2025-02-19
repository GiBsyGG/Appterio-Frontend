import { View, ScrollView, StyleSheet, Text } from "react-native";
import AnimalInfoHeader from "../../../components/specifics/headers/AnimalInfoHeader";
import CardObservation from "../../../components/specifics/cards/CardObservation";
import {
  SmallFood,
  SmallList,
  SmallHeart,
  SmallVaccine,
} from "../../../components/commons/Icons";
import { proceduresData, statusEnum } from "../../../data/mockData/procedures";
import ProceduresContainer from "../../../components/specifics/ProceduresContainer";
import { globalStyles, colors } from "../../../styles/globalStyles";
import EditButton from "../../../components/specifics/buttons/EditButton";
import FamilyButton from "../../../components/specifics/buttons/FamilyButton";

export default function AnimalDetail({ animal }) {
  const animalProcedures = proceduresData.filter(
    (procedure) =>
      procedure.specimenID === animal.id &&
      (procedure.status === statusEnum.NUEVO ||
        procedure.status === statusEnum.PENDIENTE)
  );

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <AnimalInfoHeader animal={animal} />
          <View style={styles.containerObservations}>
            <CardObservation
              title={"Dieta"}
              date={animal.details.dieta.lastUpdate}
              description={animal.details.dieta.description}
              IconComponent={SmallFood}
            />
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
            <View style={styles.proceduresContainer}>
              <View style={styles.titleBox}>
                <Text style={globalStyles.title}>
                  Procedimientos Pendientes
                </Text>
              </View>
              <ProceduresContainer procedures={animalProcedures} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.ButtonsContainer}>
        <FamilyButton animalId={animal.id} />
        <EditButton animalId={animal.id} />
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

  proceduresContainer: {
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
