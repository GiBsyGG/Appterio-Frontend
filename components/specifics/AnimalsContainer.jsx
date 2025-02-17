import { View, StyleSheet } from "react-native";
import CardAnimal from "./cards/CardAnimal";

export default function AnimalsContainer({ animals, isInvestigator }) {
  return (
    <View style={styles.container}>
      {animals.map((request) => (
        <CardAnimal
          animal={request}
          isInvestigator={isInvestigator}
          key={request.id}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
});
