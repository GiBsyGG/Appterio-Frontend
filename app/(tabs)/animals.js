import { View } from "react-native";
import AnimalsInvestigator from "../(screens)/AnimalsInvestigator";
import AnimalsKeeper from "../(screens)/AnimalsKeeper";
import { animals } from "../../data/mockData/Animals";
import useAuthStore from "../../Auth/authStore";
import { rolesEnum } from "../../utils/RolesEnum";

export default function Index() {
  const { user } = useAuthStore();

  return (
    <View>
      {user.role === rolesEnum.CUIDADOR && <AnimalsKeeper animals={animals} />}
      {user.role === rolesEnum.INVESTIGADOR && (
        <AnimalsInvestigator animals={animals} />
      )}
    </View>
  );
}
