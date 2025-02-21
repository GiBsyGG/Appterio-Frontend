import { View, Text, StyleSheet, ScrollView } from "react-native";
import RequestsContainer from "../../components/specifics/RequestsContainer";
import { globalStyles } from "../../styles/globalStyles";
import CreateButton from "../../components/commons/Buttons/CreateButton";

export default function RequestsInvestigator({ requests }) {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={globalStyles.screenTitle}>Solicitudes Creadas</Text>
            <Text style={globalStyles.lightText}>
              Solicitudes: {requests.length}
            </Text>
          </View>
          <RequestsContainer requests={requests} isInvestigator={true} />
        </View>
      </ScrollView>
      <View style={styles.ButtonsContainer}>
        <CreateButton urlButton={"create/request"} />
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
