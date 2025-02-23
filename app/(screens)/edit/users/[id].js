import User from "./User";
import { profiles } from "../../../../data/mockData/Profiles";
import { useLocalSearchParams } from "expo-router/build/hooks";

export default function EditInvestigationScreen() {
  const { id } = useLocalSearchParams();

  const profileSelected = profiles.find((profile) => profile.id === Number(id));

  return (
    <User
      initialName={profileSelected.nombre}
      initialMail={profileSelected.correo}
      initialRol={profileSelected.rol}
    />
  );
}
