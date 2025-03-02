import { View, Text } from "react-native";
import { statusEnum } from "../../data/mockData/procedures";
import { animalStatus } from "../../utils/AnimalsStatusEnum";
import { investigationEnum } from "../../data/mockData/Investigations";
import { colors, globalStyles } from "../../styles/globalStyles";

export default function StatusItem({ status }) {
  const getColorByStatus = (status) => {
    switch (status) {
      case statusEnum.NUEVO:
        return colors.primaryBlue;
      case statusEnum.PENDIENTE:
        return colors.primaryGreen;
      case statusEnum.HECHO:
        return colors.gray4;
      case animalStatus.SALUDABLE:
        return colors.primaryGreen;
      case animalStatus.CUIDADO:
        return colors.primaryOrange;
      case animalStatus.DESCESO:
        return colors.primaryRed;
      case investigationEnum.ENCURSO:
        return colors.primaryGreen;
      case investigationEnum.CERRADA:
        return colors.gray4;
      default:
        return colors.gray4;
    }
  };

  const getBackgroundByStatus = (status) => {
    switch (status) {
      case statusEnum.NUEVO:
        return colors.lightBlue;
      case statusEnum.PENDIENTE:
        return colors.lightGreen;
      case statusEnum.HECHO:
        return colors.gray1;
      case animalStatus.SALUDABLE:
        return colors.lightGreen;
      case animalStatus.CUIDADO:
        return colors.lightOrange;
      case animalStatus.DESCESO:
        return colors.lightRed;
      case investigationEnum.ENCURSO:
        return colors.lightGreen;
      case investigationEnum.CERRADA:
        return colors.gray1;
      default:
        return colors.gray1;
    }
  };

  const currentColor = getColorByStatus(status);
  const currentBackground = getBackgroundByStatus(status);

  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 16,
        backgroundColor: currentBackground,
        color: currentColor,
        width: 120,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 50,
          backgroundColor: currentColor,
          position: "absolute",
          left: 12,
        }}
      ></View>
      <Text
        style={{
          ...globalStyles.smallTitle,
          textAlign: "center",
          color: currentColor,
        }}
      >
        {status}
      </Text>
    </View>
  );
}

