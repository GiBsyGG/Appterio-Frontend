import { View } from "react-native";
import Users from "../(screens)/Users";
import { profiles } from "../../data/mockData/Profiles";

export default function Index() {
  const users = profiles;

  return (
    <View style={{ flex: 1 }}>
      <Users users={users} />
    </View>
  );
}
