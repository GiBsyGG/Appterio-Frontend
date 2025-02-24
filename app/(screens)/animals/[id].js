import AnimalDetail from "./AnimalDetail";
import AnimalDetailInv from "./AnimalDetailInv";
import { animals } from "../../../data/mockData/Animals";
import { useLocalSearchParams } from "expo-router/build/hooks";
import useAuthStore from "../../../Auth/authStore";
import { rolesEnum } from "../../../utils/RolesEnum";

export default function AnimalScreen() {
  const { id } = useLocalSearchParams();

  const { user } = useAuthStore();

  const animalSelected = animals.find((animal) => animal.id === Number(id));

  if (user.role === rolesEnum.CUIDADOR) {
    return <AnimalDetail animal={animalSelected} />;
  } else if (user.role === rolesEnum.INVESTIGADOR) {
    return <AnimalDetailInv animal={animalSelected} />;
  }
}
