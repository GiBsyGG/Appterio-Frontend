import User from "./User";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { GetUsersDataById } from "../../../../services/gets/users";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../../../../styles/globalStyles";

export default function EditInvestigationScreen() {
  const { id } = useLocalSearchParams();
  const [userData, setUserData] = useState();

  useEffect(() => {
    GetUsersDataById(id, setUserData);
  }, [userData]);

  if (!userData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      </View>
    );
  }

  return (
    <User
      userId={userData.id}
      initialName={userData.name}
      initialMail={userData.email}
      initialRol={userData.rol}
    />
  );
}

