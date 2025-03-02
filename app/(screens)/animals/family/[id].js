import AnimalFamily from "./AnimalFamily";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { GetAnimalFamily } from "../../../../services/gets/animals";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../../../../styles/globalStyles";

export default function AnimalFamilyScreen() {
  const { id } = useLocalSearchParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetAnimalFamily(id).then((data) => {
      setLoading(false);
      setData(data);
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      </View>
    );
  }

  return (
    <AnimalFamily
      animalSelected={data.animalSelected}
      animalFamily={data.animalFamily}
    />
  );
}
