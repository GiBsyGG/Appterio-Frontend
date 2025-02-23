import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { globalStyles, colors } from "../../../styles/globalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonRegular from "../../../components/commons/Buttons/ButtonRegular";
import { BackIcon } from "../../../components/commons/Icons";
import { Link, useRouter } from "expo-router";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedRol, setSelectedRol] = useState(null);
  const [roles, setRoles] = useState([
    { label: "Cuidador", value: "cuidador" },
    { label: "Investigador", value: "Investigador" },
    { label: "Administrador", value: "administrador" },
  ]);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateFields = () => {
    const newErrors = {};
    if (!userName.trim()) newErrors.userName = "El nombre es obligatorio";
    if (!mail.trim()) newErrors.mail = "El correo es obligatorio";
    if (!password.trim()) newErrors.password = "La contraseña es obligatoria";
    if (!confirmPassword.trim())
      newErrors.confirmPassword =
        "La confirmación de contraseña es obligatoria";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    if (!selectedRol) newErrors.selectedRol = "El rol es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log("Formulario válido:", {
        userName,
        mail,
        password,
        confirmPassword,
        selectedRol,
      });
      router.push("/users");
    } else {
      console.log("Formulario inválido");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Link href={"/users"}>
          <BackIcon color={colors.gray2} />
        </Link>
      </View>
      <Text style={globalStyles.screenTitle}>Crear Usuario</Text>
      <View>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
          placeholder="Nombre"
        />
        {errors.userName && (
          <Text style={styles.errorText}>{errors.userName}</Text>
        )}
      </View>

      <View>
        <TextInput
          style={styles.input}
          value={mail}
          onChangeText={setMail}
          placeholder="Correo"
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

      <View>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirmar Contraseña"
          secureTextEntry
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        )}
      </View>

      <View>
        <DropDownPicker
          open={open}
          value={selectedRol}
          items={roles}
          setOpen={setOpen}
          setValue={setSelectedRol}
          setItems={setRoles}
          placeholder="Seleccione un Rol"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={{ ...globalStyles.grayTitle, textAlign: "left" }}
        />
        {errors.selectedRol && (
          <Text style={styles.errorText}>{errors.selectedRol}</Text>
        )}
      </View>

      <ButtonRegular
        title={"Crear Usuario"}
        ButtonAction={() => handleSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 28,
    justifyContent: "space-between",
    gap: 20,
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
  multilineInput: {
    height: 260,
    textAlignVertical: "top",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderBottomColor: colors.primaryBlue,
    marginBottom: 10,
    borderRadius: 8,
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  backButton: {
    width: 40,
    height: 40,
  },
  dropdown: {
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: "transparent",
    borderBottomWidth: 3,
    borderColor: colors.primaryBlue,
    borderBottomColor: colors.primaryRed,
    paddingHorizontal: 0,
  },
  errorText: {
    color: colors.primaryRed,
    fontSize: 12,
    marginBottom: 10,
  },
});

export default UserForm;
