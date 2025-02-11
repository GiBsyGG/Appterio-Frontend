import { View } from "react-native";
import ProceduresKeeper from "../(screens)/ProceduresKeeper";
import { proceduresData } from "../../data/mockData/procedures";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <ProceduresKeeper procedures={proceduresData} />
    </View>
  );
}
