import { View, StyleSheet } from "react-native";
import CardRequest from "./cards/CardRequest";

export default function RequestsContainer({ requests, isInvestigator }) {
  return (
    <View style={styles.container}>
      {requests.map((request) => (
        <CardRequest
          request={request}
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
