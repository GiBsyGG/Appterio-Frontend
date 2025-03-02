import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProceduresContainer from "../../components/specifics/ProceduresContainer";
import { globalStyles } from "../../styles/globalStyles";

export default function ProceduresKeeper({ procedures, onRefresh }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={globalStyles.screenTitle}>Procedimientos Asignados</Text>
          <Text style={globalStyles.lightText}>
            Procedimientos: {procedures.length}
          </Text>
        </View>
        <ProceduresContainer procedures={procedures} onRefresh={onRefresh} />
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

