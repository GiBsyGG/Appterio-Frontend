import AnimalDetail from "./AnimalDetail";
import AnimalDetailInv from "./AnimalDetailInv";
import { useLocalSearchParams } from "expo-router/build/hooks";
import useAuthStore from "../../../Auth/authStore";
import { rolesEnum } from "../../../utils/RolesEnum";
import { GetAnimalById } from "../../../services/gets/animals";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../../../styles/globalStyles";

export default function AnimalScreen() {
  const { id } = useLocalSearchParams();

  const { user } = useAuthStore();

  const [animalSelected, setAnimalSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetAnimalById(id).then((data) => {
      setAnimalSelected(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      </View>
    );
  } else {
    if (user.role === rolesEnum.CUIDADOR) {
      return <AnimalDetail animal={animalSelected} />;
    } else if (user.role === rolesEnum.INVESTIGADOR) {
      return <AnimalDetailInv animal={animalSelected} />;
    }
  }
}
