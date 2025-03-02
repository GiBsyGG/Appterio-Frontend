import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { globalStyles, colors } from "../../../../styles/globalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonRegular from "../../../../components/commons/Buttons/ButtonRegular";
import { BackIcon } from "../../../../components/commons/Icons";
import { Link, useRouter } from "expo-router";
import { UpdateUser } from "../../../../services/put/users";

const UserForm = ({ userId, initialName, initialMail, initialRol }) => {
  const [userName, setUserName] = useState(initialName || "");
  const [mail, setMail] = useState(initialMail || "");
  const [open, setOpen] = useState(false);
  const [selectedRol, setSelectedRol] = useState(initialRol || "");
  const [roles, setRoles] = useState([
    { label: "Cuidador", value: "cuidador" },
    { label: "Investigador", value: "investigador" },
    { label: "Administrador", value: "administrador" },
  ]);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const validateFields = () => {
    const newErrors = {};
    if (!userName.trim()) newErrors.userName = "El nombre es obligatorio";
    if (!mail.trim()) newErrors.mail = "El correo es obligatorio";
    if (!selectedRol) newErrors.selectedRol = "El rol es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };
  const [loadingRequest, setLoadingRequest] = useState(false);

  const handleSubmit = () => {
    if (validateFields()) {
      const newData = {
        name: userName,
        email: mail,
        role: selectedRol,
      };
      setLoadingRequest(true);
      UpdateUser(userId, newData).then(() => {
        setLoadingRequest(false);
        router.push("/users");
      });
    } else {
      console.log("Formulario inválido");
    }
  };

  if (loadingRequest) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Link href={"/users"}>
          <BackIcon color={colors.gray2} />
        </Link>
      </View>
      <Text style={globalStyles.screenTitle}>Editar Usuario</Text>
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
        title={"Editar Usuario"}
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

