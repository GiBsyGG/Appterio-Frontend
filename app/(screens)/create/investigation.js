import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Switch } from "react-native";
import { globalStyles, colors } from "../../../styles/globalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonRegular from "../../../components/commons/Buttons/ButtonRegular";
import { BackIcon } from "../../../components/commons/Icons";
import { Link } from "expo-router";

const InvestigationForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedSpecimen, setSelectedSpecimen] = useState(null);
  const [specimens, setSpecimens] = useState([
    { label: "Ratón", value: "Ratón" },
    { label: "Cobaya", value: "Cobaya" },
    { label: "Conejo", value: "Conejo" },
    { label: "Zebrafish", value: "Zebrafish" },
    // Agrega más elementos aquí
  ]);
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "El título es obligatorio";
    if (!description.trim())
      newErrors.description = "La descripción es obligatoria";
    if (!selectedSpecimen)
      newErrors.selectedSpecimen = "El espécimen es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log("Formulario válido:", {
        title,
        description,
        selectedSpecimen,
      });
    } else {
      console.log("Formulario inválido");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Link href={"/animals"}>
          <BackIcon color={colors.gray2} />
        </Link>
      </View>
      <Text style={globalStyles.screenTitle}>Abrir Investigación</Text>
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
          value={selectedSpecimen}
          items={specimens}
          setOpen={setOpen}
          setValue={setSelectedSpecimen}
          setItems={setSpecimens}
          placeholder="Seleccione un espécimen"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />
        {errors.selectedSpecimen && (
          <Text style={styles.errorText}>{errors.selectedSpecimen}</Text>
        )}
      </View>

      <ButtonRegular
        title={"Abrir Investigación"}
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
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default InvestigationForm;
