import { View } from "react-native";
import ProceduresKeeper from "../(screens)/ProceduresKeeper";
import ProceduresInvestigator from "../(screens)/ProceduresInverstigator";
import { proceduresData } from "../../data/mockData/procedures";
import useAuthStore from "../../Auth/authStore";
import { rolesEnum } from "../../utils/RolesEnum";

export default function Index() {
  const { user } = useAuthStore();

  return (
    <View style={{ flex: 1 }}>
      {user.role === rolesEnum.CUIDADOR && (
        <ProceduresKeeper procedures={proceduresData} />
      )}
      {user.role === rolesEnum.INVESTIGADOR && (
        <ProceduresInvestigator procedures={proceduresData} />
      )}
    </View>
  );
}
