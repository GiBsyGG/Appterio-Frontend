import { View } from "react-native";
import RequestsInvestigator from "../(screens)/RequestsInvestigator";
import RequestsKeeper from "../(screens)/RequestsKeeper";
import { requests } from "../../data/mockData/requests";
import useAuthStore from "../../Auth/authStore";
import { rolesEnum } from "../../utils/RolesEnum";

export default function Index() {
  const { user } = useAuthStore();

  return (
    <View>
      {user.role === rolesEnum.CUIDADOR && (
        <RequestsKeeper requests={requests} />
      )}
      {user.role === rolesEnum.INVESTIGADOR && (
        <RequestsInvestigator requests={requests} />
      )}
    </View>
  );
}
