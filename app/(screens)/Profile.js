import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { globalStyles, colors } from "../../styles/globalStyles";
import { GetInitials } from "../../utils/GetInitials";
import {
  SmallCircleUser,
  SmallEmail,
  SmallGear,
} from "../../components/commons/Icons";
import ButtonRegular from "../../components/commons/Buttons/ButtonRegular";
import useAuthStore from "../../Auth/authStore";
import { useRouter } from "expo-router";

const smallLogo = require("../../assets/images/Logo-Mini.png");

export default function Profile() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const profileInitials = GetInitials(user.username);

  return (
    <View style={styles.container}>
      <View>
        <Image source={smallLogo} style={styles.smallLogo} />
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarInitials}>{profileInitials}</Text>
        </View>
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.infoContainer}>
          <View>
            <View style={styles.infoHeader}>
              <Text style={globalStyles.sectionTitle}>Nombre</Text>
              <SmallCircleUser />
            </View>
            <View style={styles.infoDescription}>
              <Text style={globalStyles.text}>{user.username}</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <View style={styles.infoHeader}>
              <Text style={globalStyles.sectionTitle}>Correo</Text>
              <SmallEmail />
            </View>
            <View style={styles.infoDescription}>
              <Text style={globalStyles.text}>{user.email}</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <View style={styles.infoHeader}>
              <Text style={globalStyles.sectionTitle}>Rol</Text>
              <SmallGear />
            </View>
            <View style={styles.infoDescription}>
              <Text style={globalStyles.text}>{user.role}</Text>
            </View>
          </View>
        </View>
      </View>
      <ButtonRegular
        title="Cerrar Sesion"
        ButtonAction={() => {
          logout();
          router.push("/autenticacion/login"); // Redirige a la pantalla de inicio
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingVertical: 28,
    gap: 40,
  },
  logoContainer: {
    flexDirection: "row",
    width: "100%",
  },
  smallLogo: {
    width: 200,
    height: 120,
    resizeMode: "contain",
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 80,
    backgroundColor: colors.primaryBlue,
    justifyContent: "center",
    alignContent: "center",
  },
  avatarInitials: {
    fontSize: 28,
    fontWeight: 700,
    color: colors.white,
    textAlign: "center",
  },
  profileInfoContainer: {
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    gap: 20,
  },
  infoContainer: {
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
  },
  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: colors.primaryGreen,
    paddingBottom: 6,
  },
  infoDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 6,
  },
});
