import { View, ScrollView, StyleSheet, Text } from "react-native";
import AnimalInfoHeader from "../../../components/specifics/headers/AnimalInfoHeader";
import CardObservation from "../../../components/specifics/cards/CardObservation";
import {
  SmallFood,
  SmallList,
  SmallHeart,
  SmallVaccine,
} from "../../../components/commons/Icons";
import ProceduresContainer from "../../../components/specifics/ProceduresContainer";
import { globalStyles, colors } from "../../../styles/globalStyles";
import EditButton from "../../../components/specifics/buttons/EditButton";
import FamilyButton from "../../../components/specifics/buttons/FamilyButton";
import { Link } from "expo-router";
import { BackIcon } from "../../../components/commons/Icons";

export default function AnimalDetail({ animal }) {
  //const [animalProcedures, setAnimalProcedures] = useState([]);

  const proceduresModified = animal.procedures.map((procedure) => {
    return {
      ...procedure,
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
              title={"Dieta"}
              date={animal.details.diet.last_update}
              description={animal.details.diet.description}
              IconComponent={SmallFood}
            />
            <CardObservation
              title={"Últimas observaciones"}
              date={animal.details.last_observations.last_update}
              description={animal.details.last_observations.description}
              IconComponent={SmallList}
            />
            <CardObservation
              title={"Signos clínicos"}
              date={animal.details.clinical_signs.last_update}
              description={animal.details.clinical_signs.description}
              IconComponent={SmallHeart}
            />
            <CardObservation
              title={"Vacunas"}
              date={animal.details.vaccines.last_update}
              description={animal.details.vaccines.description}
              IconComponent={SmallVaccine}
            />
            <View style={styles.proceduresContainer}>
              <View style={styles.titleBox}>
                <Text style={globalStyles.title}>
                  Procedimientos Pendientes
                </Text>
              </View>
              {proceduresModified.length > 0 ? (
                <ProceduresContainer procedures={proceduresModified} />
              ) : (
                <Text style={globalStyles.text}>
                  No hay procedimientos pendientes
                </Text>
              )}
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
