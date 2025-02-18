import AnimalDetail from "./AnimalDetail";
import { animals } from "../../../data/mockData/Animals";
import { useLocalSearchParams } from "expo-router/build/hooks";

export default function AnimalScreen() {
  const { id } = useLocalSearchParams();

  const animalSelected = animals.find((animal) => animal.id === Number(id));
  return <AnimalDetail animal={animalSelected} />;
}
