import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

export const PetIcon = (props) => (
  <MaterialIcons name="pets" style={styles.icon} {...props} />
);

export const HomeIcon = (props) => (
  <Foundation name="home" style={styles.icon} {...props} />
);

export const ProfileIcon = (props) => (
  <FontAwesome name="user" style={styles.icon} {...props} />
);

export const UsersIcon = (props) => (
  <MaterialIcons name="groups" style={styles.icon} {...props} />
);

export const CheckListIcon = (props) => (
  <FontAwesome6 name="list-check" style={styles.icon} {...props} />
);

export const ClipBoardIcon = (props) => (
  <FontAwesome5 name="clipboard-list" style={styles.icon} {...props} />
);

export const AddIcon = (props) => (
  <Entypo name="plus" style={styles.icon} {...props} />
);

export const EditIcon = (props) => (
  <Feather name="edit" style={styles.icon} {...props} />
);

export const BranchIcon = (props) => (
  <Feather name="git-branch" style={styles.icon} {...props} />
);

export const BackIcon = (props) => (
  <Ionicons name="chevron-back" style={styles.icon} {...props} />
);

export const SmallCircleUser = (props) => (
  <FontAwesome5 name="user-circle" style={styles.smallIcon} {...props} />
);

export const SmallEmail = (props) => (
  <Entypo name="mail" style={styles.smallIcon} {...props} />
);

export const SmallGear = (props) => (
  <FontAwesome6 name="user-gear" style={styles.smallIcon} {...props} />
);

export const SmallFood = (props) => (
  <MaterialCommunityIcons
    name="food-apple-outline"
    style={styles.smallIcon}
    {...props}
  />
);

export const SmallHeart = (props) => (
  <FontAwesome5 name="heartbeat" style={styles.smallIcon} {...props} />
);

export const SmallList = (props) => (
  <Foundation name="clipboard-notes" style={styles.smallIcon} {...props} />
);

export const SmallVaccine = (props) => (
  <MaterialIcons name="vaccines" style={styles.smallIcon} {...props} />
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

  smallIcon: {
    width: 32,
    height: 32,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 32,
    borderRadius: 8,
    color: colors.gray3,
  },
});
