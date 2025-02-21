import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, globalStyles } from "../../../styles/globalStyles";
import StatusItem from "../../commons/StatusItem";

export default function CardInvestigation({ investigation, OnPress }) {
  return (
    <TouchableOpacity
      onPress={() => {
        OnPress(investigation);
      }}
    >
      <View style={styles.card}>
        <View style={styles.titleBox}>
          <Text style={globalStyles.title} numberOfLines={2}>
            {investigation.title}
          </Text>
        </View>
        <View style={styles.cardInfoBox}>
          <Text style={globalStyles.smallText} numberOfLines={3}>
            {investigation.description}
          </Text>
          <StatusItem status={investigation.status} />
        </View>
      </View>
    </TouchableOpacity>
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
    justifyContent: "space-between",
    gap: 16,
  },
});
