import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProceduresContainer from "../../components/specifics/ProceduresContainer";
import { globalStyles } from "../../styles/globalStyles";
import CreateButton from "../../components/commons/Buttons/CreateButton";

export default function ProceduresKeeper({ procedures, onRefresh }) {
  return (
    <View style={{ height: "100%", position: "relative" }}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={globalStyles.screenTitle}>
              Procedimientos Asignados
            </Text>
            <Text style={globalStyles.lightText}>
              Procedimientos: {procedures.length}
            </Text>
          </View>
          <ProceduresContainer procedures={procedures} onRefresh={onRefresh} />
        </View>
      </ScrollView>
      <View style={styles.ButtonsContainer}>
        <CreateButton urlButton={"create/procedure"} />
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
