import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { globalStyles, colors } from "../../styles/globalStyles";
import CreateButton from "../../components/commons/Buttons/CreateButton";
import UsersContainer from "../../components/specifics/UsersContainer";
import { useEffect, useState } from "react";
import { GetUsersData } from "../../services/gets/users";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetUsersData(setUsers);
  }, [users]);

  if (users.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      </View>
    );
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={globalStyles.screenTitle}>Usuarios</Text>
          </View>
          <UsersContainer users={users} />
        </View>
      </ScrollView>
      <View style={styles.ButtonsContainer}>
        <CreateButton urlButton={"create/user"} />
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
