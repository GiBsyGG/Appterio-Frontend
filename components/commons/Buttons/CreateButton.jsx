import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";

export default function CreateButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 5,
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 20,
    right: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: colors.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 64,
  },
});
