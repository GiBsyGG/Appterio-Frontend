import { View, ScrollView, StyleSheet } from "react-native";
import AnimalInfoHeader from "../../../components/specifics/headers/AnimalInfoHeader";

export default function AnimalDetail({ animal }) {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <AnimalInfoHeader animal={animal} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    flex: 1,
    gap: 8,
  },
});

