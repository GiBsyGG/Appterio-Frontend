import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProceduresContainer from "../../components/specifics/ProceduresContainer";
import { globalStyles } from "../../styles/globalStyles";
import CreateButton from "../../components/commons/Buttons/CreateButton";

export default function ProceduresInvestigator({ procedures }) {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={globalStyles.screenTitle}>Procedimientos Creados</Text>
            <Text style={globalStyles.lightText}>
              Procedimientos: {procedures.length}
            </Text>
          </View>
          <ProceduresContainer procedures={procedures} />
        </View>
      </ScrollView>
      <CreateButton onPress={() => console.log("Create Procedure")} />
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
