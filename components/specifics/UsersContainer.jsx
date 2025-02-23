import { View, StyleSheet } from "react-native";
import CardUser from "./cards/CardUser";

export default function RequestsContainer({ users }) {
  return (
    <View style={styles.container}>
      {users.map((user) => (
        <CardUser user={user} key={user.id} />
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
