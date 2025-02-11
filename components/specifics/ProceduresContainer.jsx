import { View, StyleSheet } from "react-native";
import CardProcedure from "./cards/CardProcedure";

export default function ProceduresContainer({ procedures }) {
  return (
    <View style={styles.container}>
      {procedures.map((procedure) => (
        <CardProcedure procedure={procedure} key={procedure.id} />
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
