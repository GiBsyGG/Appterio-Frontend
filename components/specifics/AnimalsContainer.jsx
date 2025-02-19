import { View, StyleSheet } from "react-native";
import CardAnimal from "./cards/CardAnimal";

export default function AnimalsContainer({ animals }) {
  return (
    <View style={styles.container}>
      {animals.map((animal) => (
        <CardAnimal animal={animal} key={animal.id} />
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
