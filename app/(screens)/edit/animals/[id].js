import { useLocalSearchParams } from "expo-router/build/hooks";
import Animal from "./Animal";
import { GetAnimalById } from "../../../../services/gets/animals";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../../../../styles/globalStyles";

export default function EditAnimalScreen() {
  const { id } = useLocalSearchParams();
  const [animalSelected, setAnimalSelected] = useState();
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
  }

  return (
    <Animal
      animalWeight={animalSelected.weight}
      animalDiet={animalSelected.details.diet.description}
      animalObservations={animalSelected.details.last_observations.description}
      animalSigns={animalSelected.details.clinical_signs.description}
      animalVaccines={animalSelected.details.vaccines.description}
      animalKeeper={animalSelected.keeperId}
      animalState={animalSelected.health_status}
      animalId={animalSelected.id}
      animalAge={animalSelected.age}
    />
  );
}

