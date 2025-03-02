import { View } from "react-native";
import AnimalsInvestigator from "../(screens)/AnimalsInvestigator";
import AnimalsKeeper from "../(screens)/AnimalsKeeper";
import useAuthStore from "../../Auth/authStore";
import { rolesEnum } from "../../utils/RolesEnum";
import { GetAnimalsByRole } from "../../services/gets/animals";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "../../styles/globalStyles";

export default function Index() {
  const { user } = useAuthStore();
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetAnimalsByRole(user.role, user.userId).then((data) => {
      setAnimals(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      </View>
    );
  }

  return (
    <View>
      {user.role === rolesEnum.CUIDADOR && <AnimalsKeeper animals={animals} />}
      {user.role === rolesEnum.INVESTIGADOR && (
        <AnimalsInvestigator animals={animals} />
      )}
    </View>
  );
}
