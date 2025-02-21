import Investigation from "./Investigation";
import { investigations } from "../../../../data/mockData/Investigations";
import { useLocalSearchParams } from "expo-router/build/hooks";

export default function AnimalFamilyScreen() {
  const { id } = useLocalSearchParams();

  const investigationSelected = investigations.find(
    (investigation) => investigation.id === Number(id)
  );

  return (
    <Investigation
      investigationId={investigationSelected.id}
      investigationTitle={investigationSelected.title}
      investigationDescription={investigationSelected.description}
    />
  );
}
