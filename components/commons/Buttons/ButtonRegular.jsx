import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";

export default function ButtonRegular({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
