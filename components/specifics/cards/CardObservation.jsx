import { View, Text, StyleSheet } from "react-native";
import { colors, globalStyles } from "../../../styles/globalStyles";

export default function CardObservation({
  title,
  date,
  description,
  IconComponent,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.titleBox}>
        <Text style={globalStyles.title}>{title}</Text>
        <IconComponent />
      </View>
      <View style={styles.cardInfoBox}>
        <Text style={globalStyles.lightText}>Ultima Actualizacion: {date}</Text>
        <Text style={globalStyles.text}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
  },

  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: colors.primaryGreen,
    paddingBottom: 6,
  },

  cardInfoBox: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 6,
  },
});

