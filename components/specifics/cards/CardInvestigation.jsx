import { View, Text, StyleSheet } from "react-native";
import { colors, globalStyles } from "../../../styles/globalStyles";

export default function CardInvestigation({ investigation }) {
  return (
    <View style={styles.card}>
      <View style={styles.titleBox}>
        <Text style={globalStyles.title}>{investigation.name}</Text>
      </View>
      <View style={styles.cardInfoBox}>
        <Text style={globalStyles.smallText}>{investigation.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "space-around",
  },

  titleBox: {
    borderBottomWidth: 2,
    borderBottomColor: colors.gray1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  cardInfoBox: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
