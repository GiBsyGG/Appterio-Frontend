import { View, Text, StyleSheet, ScrollView } from "react-native";
import AnimalsContainer from "../../components/specifics/AnimalsContainer";
import { globalStyles } from "../../styles/globalStyles";
import CreateButton from "../../components/commons/Buttons/CreateButton";

export default function AnimalsKeeper({ animals }) {
  return (
    <View style={{ height: "100%", position: "relative" }}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={globalStyles.screenTitle}>Animales Asignados</Text>
            <Text style={globalStyles.lightText}>
              Animales: {animals.length}
            </Text>
          </View>
          <AnimalsContainer animals={animals} />
        </View>
      </ScrollView>
      <View style={styles.ButtonsContainer}>
        <CreateButton urlButton={"create/animal"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 28,
    flex: 1,
    gap: 8,
  },
  ButtonsContainer: {
    justifyContent: "space-between",
    alignContent: "center",
    gap: 28,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
