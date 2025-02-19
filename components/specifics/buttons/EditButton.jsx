import { View, StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";
import { EditIcon } from "../../commons/Icons";
import { Link } from "expo-router";

export default function EditButton({ animalId }) {
  return (
    <Link href={`animals/edit/${animalId}`} style={styles.button}>
      <View style={styles.buttonIconContainer}>
        <EditIcon color={colors.white} />
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 12,
    width: 60,
    height: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 8,
  },
  buttonIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 8,
  },
});
