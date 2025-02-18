import { View, Text, StyleSheet, ScrollView } from "react-native";
import AnimalsContainer from "../../components/specifics/AnimalsContainer";
import { globalStyles } from "../../styles/globalStyles";
import CreateButton from "../../components/commons/Buttons/CreateButton";

export default function AnimalsKeeper({ animals }) {
  return (
    <View>
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
      <CreateButton onPress={() => console.log("Create Animal")} />
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
});

