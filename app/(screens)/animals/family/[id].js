import AnimalFamily from "./AnimalFamily";
import { animals } from "../../../../data/mockData/Animals";
import { useLocalSearchParams } from "expo-router/build/hooks";

export default function AnimalFamilyScreen() {
  const { id } = useLocalSearchParams();

  const animalSelected = animals.find((animal) => animal.id === Number(id));

  return <AnimalFamily animalSelected={animalSelected} />;
}
