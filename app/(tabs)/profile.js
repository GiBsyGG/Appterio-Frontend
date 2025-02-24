import { View } from "react-native";
import Profile from "../(screens)/Profile";
import useAuthStore from "../../Auth/authStore";
import { rolesEnum } from "../../utils/RolesEnum";
import Login from "../(screens)/autenticacion/login";

export default function Index() {
  const { user } = useAuthStore();

  return (
    <View>{user.role === rolesEnum.UNLOGED ? <Login /> : <Profile />}</View>
  );
}
