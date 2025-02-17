import { View, Text, StyleSheet } from "react-native";
import { globalStyles, colors } from "../../../styles/globalStyles";
import { GetInitials } from "../../../utils/GetInitials";

export default function ProfileResume({ profile }) {
  const profileInitials = GetInitials(profile.nombre);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarInitials}>{profileInitials}</Text>
      </View>
      <View>
        <Text style={globalStyles.smallTitle}>{profile.nombre}</Text>
        <View>
          <Text style={globalStyles.smallText}>{profile.rol}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryBlue,
    justifyContent: "center",
    alignContent: "center",
  },

  avatarInitials: {
    fontSize: 16,
    fontWeight: 700,
    color: colors.white,
    textAlign: "center",
  },
});
