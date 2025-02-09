import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export const PetIcon = (props) => (
  <MaterialIcons name="pets" size={24} color="black" {...props} />
);

export const HomeIcon = (props) => (
  <Foundation name="home" size={24} color="black" {...props} />
);

export const ProfileIcon = (props) => (
  <FontAwesome name="user" size={24} color="black" {...props} />
);

export const checkListIcon = (props) => (
  <FontAwesome6 name="list-check" size={24} color="black" {...props} />
);

export const clipBoardIcon = (props) => (
  <FontAwesome5 name="clipboard-list" size={24} color="black" />
);
