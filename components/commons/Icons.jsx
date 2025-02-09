import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StyleSheet } from "react-native";

export const PetIcon = (props) => (
  <MaterialIcons name="pets" style={styles.icon} {...props} />
);

export const HomeIcon = (props) => (
  <Foundation name="home" style={styles.icon} {...props} />
);

export const ProfileIcon = (props) => (
  <FontAwesome name="user" style={styles.icon} {...props} />
);

export const CheckListIcon = (props) => (
  <FontAwesome6 name="list-check" style={styles.icon} {...props} />
);

export const ClipBoardIcon = (props) => (
  <FontAwesome5 name="clipboard-list" style={styles.icon} {...props} />
);

const styles = StyleSheet.create({
  icon: {
    width: 54,
    height: 54,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 40,
    borderRadius: 8,
  },
});
