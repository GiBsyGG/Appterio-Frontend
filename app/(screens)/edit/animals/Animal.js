import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { globalStyles, colors } from "../../../../styles/globalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonRegular from "../../../../components/commons/Buttons/ButtonRegular";
import { BackIcon } from "../../../../components/commons/Icons";
import { Link, useRouter } from "expo-router";
import { profiles } from "../../../../data/mockData/Profiles";

const AnimalForm = ({
  animalId,
  animalWeight,
  animalDiet,
  animalObservations,
  animalSigns,
  animalVaccines,
  animalKeeper,
}) => {
  const getKeepers = () => {
    const keepers = profiles.filter((profile) => profile.rol === "cuidador");

    const keepersChoices = keepers.map((profile) => ({
      label: profile.nombre,
      value: profile.id,
    }));
    setKeepers(keepersChoices);
  };

  useEffect(() => {
    getKeepers();
  }, []);

  const [weight, setWeight] = useState(animalWeight + "");
  const [diet, setDiet] = useState(animalDiet);
  const [observations, setObservations] = useState(animalObservations);
  const [clinicSigns, setClinicSigns] = useState(animalSigns);
  const [vaccines, setVaccines] = useState(animalVaccines);
  const [openKeepers, setOpenKeepers] = useState(false);
  const [selectedKeeper, setSelectedKeeper] = useState(animalKeeper);
  const [keepers, setKeepers] = useState([]);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateFields = () => {
    const newErrors = {};
    if (!weight.trim()) newErrors.weight = "El peso es obligatoria";
    if (!diet.trim()) newErrors.diet = "La dieta es obligatoria";
    if (!observations.trim())
      newErrors.observations = "Las observaciones son obligatorias";
    if (!clinicSigns.trim())
      newErrors.clinicSigns = "Los signos clínicos son obligatorios";
    if (!vaccines.trim()) newErrors.vaccines = "Las vacunas son obligatorias";
    if (!selectedKeeper)
      newErrors.selectedKeeper = "El cuidador es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log("Formulario válido:", {
        weight,
        diet,
        observations,
        clinicSigns,
        vaccines,
        selectedKeeper,
      });
      router.push("/animals");
    } else {
      console.log("Formulario inválido");
    }
  };

  return (
    <ScrollView scrollEnabled={!openKeepers} nestedScrollEnabled={true}>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <Link href={"/animals"}>
            <BackIcon color={colors.gray2} />
          </Link>
        </View>
        <Text style={globalStyles.screenTitle}>Editar Animal</Text>
        <View>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
            placeholder="Ingrese el Peso (Gramos)"
          />
          {errors.weight && (
            <Text style={styles.errorText}>{errors.weight}</Text>
          )}
        </View>

        <View>
          <TextInput
            style={styles.multilineInput}
            value={diet}
            onChangeText={setDiet}
            placeholder="Dieta del espécimen"
            multiline
            numberOfLines={4}
          />
          {errors.diet && <Text style={styles.errorText}>{errors.diet}</Text>}
        </View>
        <View>
          <TextInput
            style={styles.multilineInput}
            value={observations}
            onChangeText={setObservations}
            placeholder="Observaciones"
            multiline
            numberOfLines={4}
          />
          {errors.observations && (
            <Text style={styles.errorText}>{errors.observations}</Text>
          )}
        </View>
        <View>
          <TextInput
            style={styles.multilineInput}
            value={clinicSigns}
            onChangeText={setClinicSigns}
            placeholder="Signos clínicos"
            multiline
            numberOfLines={4}
          />
          {errors.clinicSigns && (
            <Text style={styles.errorText}>{errors.clinicSigns}</Text>
          )}
        </View>
        <View>
          <TextInput
            style={styles.multilineInput}
            value={vaccines}
            onChangeText={setVaccines}
            placeholder="Vacunas"
            multiline
            numberOfLines={4}
          />
          {errors.vaccines && (
            <Text style={styles.errorText}>{errors.vaccines}</Text>
          )}
        </View>
        <View>
          <DropDownPicker
            open={openKeepers}
            value={selectedKeeper}
            items={keepers}
            setOpen={setOpenKeepers}
            setValue={setSelectedKeeper}
            setItems={setKeepers}
            placeholder="Seleccione un Cuidador"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={{ ...globalStyles.grayTitle, textAlign: "left" }}
          />
          {errors.selectedKeeper && (
            <Text style={styles.errorText}>{errors.selectedKeeper}</Text>
          )}
        </View>

        <ButtonRegular
          title={"Registrar Animal"}
          ButtonAction={() => handleSubmit()}
        />
      </View>
    </ScrollView>
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
    zIndex: 0,
  },
  multilineInput: {
    height: 120,
    textAlignVertical: "top",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderBottomColor: colors.primaryBlue,
    marginBottom: 10,
    borderRadius: 8,
    zIndex: 0,
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
    zIndex: 0,
  },
  errorText: {
    color: colors.primaryRed,
    fontSize: 12,
    marginBottom: 10,
  },
});

export default AnimalForm;
