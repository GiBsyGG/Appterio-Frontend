import { View } from "react-native";
import ProceduresKeeper from "../(screens)/ProceduresKeeper";
import ProceduresInvestigator from "../(screens)/ProceduresInverstigator";
import { proceduresData } from "../../data/mockData/procedures";

export default function Index() {
  const isIvestigator = true;

  return (
    <View style={{ flex: 1 }}>
      {!isIvestigator ? (
        <ProceduresKeeper procedures={proceduresData} />
      ) : (
        <ProceduresInvestigator procedures={proceduresData} />
      )}
    </View>
  );
}
