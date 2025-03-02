import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { globalStyles, colors } from "../../../styles/globalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonRegular from "../../../components/commons/Buttons/ButtonRegular";
import { BackIcon } from "../../../components/commons/Icons";
import { Link, useRouter } from "expo-router";
import { PostRequest } from "../../../services/posts/request";
import { GetKeepersData } from "../../../services/gets/users";
import useAuthStore from "../../../Auth/authStore";

const RequestForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedKeeper, setSelectedKeeper] = useState(null);
  const [keepers, setKeepers] = useState([]);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();

  const getKeepers = () => {
    GetKeepersData().then((response) => {
      const keepersChoices = response.map((keeper) => ({
        label: keeper.name,
        value: keeper.id,
      }));
      setKeepers(keepersChoices);
      setLoading(false);
    });
  };

  useEffect(() => {
    getKeepers();
  }, []);

  const validateFields = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "El título es obligatorio";
    if (!description.trim())
      newErrors.description = "La descripción es obligatoria";
    if (!selectedKeeper)
      newErrors.selectedSpecimen = "El espécimen es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = () => {
    if (validateFields()) {
      const newData = {
        title: title,
        description: description,
        researcher_id: user.userId,
        keeper_id: selectedKeeper,
        status: "PENDIENTE",
      };
      PostRequest(newData).then(() => {
        router.push("/");
      });
      router.push("/");
    } else {
      console.log("Formulario inválido");
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Link href={"/requests"}>
          <BackIcon color={colors.gray2} />
        </Link>
      </View>
      <Text style={globalStyles.screenTitle}>Crear Solicitud</Text>
      <View>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Ingrese el título"
        />
        {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
      </View>

      <View>
        <TextInput
          style={styles.multilineInput}
          value={description}
          onChangeText={setDescription}
          placeholder="Ingrese la descripción"
          multiline
          numberOfLines={4}
        />
        {errors.description && (
          <Text style={styles.errorText}>{errors.description}</Text>
        )}
      </View>

      <View>
        <DropDownPicker
          open={open}
          value={selectedKeeper}
          items={keepers}
          setOpen={setOpen}
          setValue={setSelectedKeeper}
          setItems={setKeepers}
          placeholder="Seleccione un Cuidador"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={{ ...globalStyles.grayTitle, textAlign: "left" }}
        />
        {errors.selectedSpecimen && (
          <Text style={styles.errorText}>{errors.selectedSpecimen}</Text>
        )}
      </View>

      <ButtonRegular
        title={"Crear Solicitud"}
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

export default RequestForm;

