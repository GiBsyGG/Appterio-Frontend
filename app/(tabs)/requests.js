import { View } from "react-native";
import RequestsInvestigator from "../(screens)/RequestsInvestigator";
import RequestsKeeper from "../(screens)/RequestsKeeper";
import { requests } from "../../data/mockData/requests";

export default function Index() {
  const isInvestigator = true;

  return (
    <View>
      {!isInvestigator ? (
        <RequestsKeeper requests={requests} />
      ) : (
        <RequestsInvestigator requests={requests} />
      )}
    </View>
  );
}
