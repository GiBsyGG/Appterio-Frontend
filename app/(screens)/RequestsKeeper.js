import { View, Text, StyleSheet, ScrollView } from "react-native";
import RequestsContainer from "../../components/specifics/RequestsContainer";
import { globalStyles } from "../../styles/globalStyles";

export default function RequestsKeeper({ requests }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={globalStyles.screenTitle}>Solicitudes Asignadas</Text>
          <Text style={globalStyles.lightText}>
            Solicitudes: {requests.length}
          </Text>
        </View>
        <RequestsContainer requests={requests} isInvestigator={false} />
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
