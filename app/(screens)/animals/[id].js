import AnimalDetail from "./AnimalDetail";
import AnimalDetailInv from "./AnimalDetailInv";
import { animals } from "../../../data/mockData/Animals";
import { useLocalSearchParams } from "expo-router/build/hooks";

export default function AnimalScreen() {
  const { id } = useLocalSearchParams();

  const isInvestigator = false;

  const animalSelected = animals.find((animal) => animal.id === Number(id));

  if (!isInvestigator) {
    return <AnimalDetail animal={animalSelected} />;
  } else {
    return <AnimalDetailInv animal={animalSelected} />;
  }
}
