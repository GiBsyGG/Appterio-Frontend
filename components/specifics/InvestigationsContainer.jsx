import { View, StyleSheet } from "react-native";
import CardInvestigation from "./cards/CardInvestigation";

export default function InvestigationsContainer({ investigations }) {
  return (
    <View style={styles.container}>
      {investigations.map((investigation) => (
        <CardInvestigation
          investigation={investigation}
          key={investigation.id}
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
