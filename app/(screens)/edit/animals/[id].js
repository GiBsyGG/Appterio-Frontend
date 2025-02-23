import { animals } from "../../../../data/mockData/Animals";
import { useLocalSearchParams } from "expo-router/build/hooks";
import Animal from "./Animal";

export default function EditAnimalScreen() {
  const { id } = useLocalSearchParams();

  const animalSelected = animals.find((animal) => animal.id === Number(id));
  return (
    <Animal
      animalWeight={animalSelected.weight}
      animalDiet={animalSelected.details.dieta.description}
      animalObservations={
        animalSelected.details.ultimasObservaciones.description
      }
      animalSigns={animalSelected.details.signosClinicos.description}
      animalVaccines={animalSelected.details.vacunas.description}
      animalKeeper={animalSelected.keeperId}
    />
  );
}
