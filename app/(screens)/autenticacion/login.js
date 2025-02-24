import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { globalStyles, colors } from "../../../styles/globalStyles";
import ButtonRegular from "../../../components/commons/Buttons/ButtonRegular";
import { BackIcon } from "../../../components/commons/Icons";
import { Link, useRouter } from "expo-router";
import { profiles } from "../../../data/mockData/Profiles";
import useAuthStore from "../../../Auth/authStore";

const smallLogo = require("../../../assets/images/Logo-Mini.png");

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const { login } = useAuthStore();

  const validateFields = () => {
    const newErrors = {};
    if (!mail.trim()) newErrors.mail = "El correo es obligatorio";
    if (!password.trim()) newErrors.password = "La contraseña es obligatoria";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = () => {
    if (validateFields()) {
      const currentProfile = profiles.find(
        (profile) => profile.correo === mail
      );
      if (currentProfile.contrasena === password) {
        login(
          currentProfile.nombre,
          currentProfile.rol,
          currentProfile.correo,
          toString(currentProfile.id)
        );
        router.push("/");
      } else {
        const newErrors = {};
        newErrors.invalidUser = "Usuario o contraseña incorrectos";
        setErrors(newErrors);
      }
    } else {
      console.log("Formulario inválido");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Link href={"/"}>
          <BackIcon color={colors.gray2} />
        </Link>
      </View>
      <View style={styles.logoContainer}>
        <Image source={smallLogo} style={styles.smallLogo} />
      </View>
      <View style={styles.inputsContainer}>
        {errors.invalidUser && (
          <Text style={styles.errorText}>{errors.invalidUser}</Text>
        )}
        <View>
          <TextInput
            style={styles.input}
            value={mail}
            onChangeText={setMail}
            placeholder="Correo Electrónico"
          />
          {errors.mail && <Text style={styles.errorText}>{errors.mail}</Text>}
        </View>

        <View>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
            secureTextEntry
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
        </View>
      </View>

      <ButtonRegular
        title={"Iniciar Sesión"}
        ButtonAction={() => handleSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 28,
    justifyContent: "space-between",
    gap: 80,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: colors.primaryBlue,
    marginBottom: 10,
    fontSize: 20,
    fontFamily: "inter-regular",
  },
  inputsContainer: {
    justifyContent: "space-between",
    alignContent: "center",
    gap: 20,
  },
  backButton: {
    width: 40,
    height: 40,
  },
  errorText: {
    color: colors.primaryRed,
    fontSize: 12,
    marginBottom: 10,
  },
  smallLogo: {
    width: 200,
    height: 120,
    resizeMode: "contain",
  },
  logoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Login;
