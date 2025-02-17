import { View, Text, StyleSheet, ScrollView } from "react-native";
import AnimalsContainer from "../../components/specifics/AnimalsContainer";
import { globalStyles } from "../../styles/globalStyles";

export default function AnimalsInvestigator({ animals }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={globalStyles.screenTitle}>Especimenes Investigados</Text>
          <Text style={globalStyles.lightText}>
            Procedimientos: {animals.length}
          </Text>
        </View>
        <AnimalsContainer animals={animals} />
      </View>
    </ScrollView>
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
