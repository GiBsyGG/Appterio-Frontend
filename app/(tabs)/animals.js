import { View } from "react-native";
import AnimalsInvestigator from "../(screens)/AnimalsInvestigator";
import AnimalsKeeper from "../(screens)/AnimalsKeeper";
import { animals } from "../../data/mockData/Animals";

export default function Index() {
  const isIvestigator = true;

  return (
    <View>
      {!isIvestigator ? (
        <AnimalsKeeper animals={animals} />
      ) : (
        <AnimalsInvestigator animals={animals} />
      )}
    </View>
  );
}
