import { View, StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";
import { BranchIcon } from "../../commons/Icons";
import { Link } from "expo-router";

export default function EditButton({ animalId }) {
  return (
    <Link href={`animals/family/${animalId}`} style={styles.button}>
      <View style={styles.buttonIconContainer}>
        <BranchIcon color={colors.white} />
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryGreen,
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
    paddingTop: 4,
  },
});
