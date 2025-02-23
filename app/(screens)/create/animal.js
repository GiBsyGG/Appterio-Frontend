import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  ScrollView,
} from "react-native";
import { globalStyles, colors } from "../../../styles/globalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonRegular from "../../../components/commons/Buttons/ButtonRegular";
import { BackIcon } from "../../../components/commons/Icons";
import { Link, useRouter } from "expo-router";
import { profiles } from "../../../data/mockData/Profiles";
import { animals } from "../../../data/mockData/Animals";

const RequestForm = () => {
  const [family, setFamily] = useState("");
  const [weight, setWeight] = useState("");
  const [diet, setDiet] = useState("");
  const [observations, setObservations] = useState("");
  const [clinicSigns, setClinicSigns] = useState("");
  const [vaccines, setVaccines] = useState("");
  const [openSpecies, setOpenSpecies] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  const [openKeepers, setOpenKeepers] = useState(false);
  const [openSpecimens1, setOpenSpecimens1] = useState(false);
  const [openSpecimens2, setOpenSpecimens2] = useState(false);
  const [isBornInLab, setIsBornInLab] = useState(false);
  const [selectedKeeper, setSelectedKeeper] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [labAnimals, setLabAnimals] = useState([]);
  const [parent1Id, setParent1Id] = useState(0);
  const [parent2Id, setParent2Id] = useState(0);
  const [keepers, setKeepers] = useState([]);
  const [species, setSpecies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const getKeepers = () => {
    const keepers = profiles.filter((profile) => profile.rol === "cuidador");

    const keepersChoices = keepers.map((profile) => ({
      label: profile.nombre,
      value: profile.id,
    }));
    setKeepers(keepersChoices);
  };

  const getSpecies = () => {
    const species = [
      { label: "Rata", value: "Rata" },
      { label: "Conejo", value: "Conejo" },
      { label: "Cobayo", value: "Cobayo" },
      { label: "Hamster", value: "Hamster" },
    ];
    setSpecies(species);
  };

  const getLabAnimals = () => {
    const labAnimals = animals.map((animal) => ({
      label: animal.id,
      value: animal.id,
    }));
    setLabAnimals(labAnimals);
  };

  const getGenres = () => {
    const genres = [
      { label: "Macho", value: "Macho" },
      { label: "Hembra", value: "Hembra" },
    ];
    setGenres(genres);
  };

  useEffect(() => {
    getKeepers();
    getSpecies();
    getGenres();
    getLabAnimals();
  }, []);

  const validateFields = () => {
    const newErrors = {};
    if (!family.trim()) newErrors.family = "La familia es obligatorio";
    if (!weight.trim()) newErrors.weight = "El peso es obligatoria";
    if (!diet.trim()) newErrors.diet = "La dieta es obligatoria";
    if (!observations.trim())
      newErrors.observations = "Las observaciones son obligatorias";
    if (!clinicSigns.trim())
      newErrors.clinicSigns = "Los signos clínicos son obligatorios";
    if (!vaccines.trim()) newErrors.vaccines = "Las vacunas son obligatorias";
    if (!selectedSpecies)
      newErrors.selectedSpecies = "La especie es obligatoria";
    if (!selectedGenre) newErrors.selectedGenre = "El género es obligatorio";
    if (!selectedKeeper)
      newErrors.selectedKeeper = "El cuidador es obligatorio";
    if (isBornInLab && !parent1Id)
      newErrors.selectedParent1 = "El campo es obligatorio";
    if (isBornInLab && !parent2Id)
      newErrors.selectedParent2 = "El campo es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log("Formulario válido:", {
        selectedSpecies,
        selectedGenre,
        family,
        weight,
        diet,
        observations,
        clinicSigns,
        vaccines,
        isBornInLab,
        parent1Id,
        parent2Id,
        selectedKeeper,
      });
      router.push("/animals");
    } else {
      console.log("Formulario inválido");
    }
  };

  return (
    <ScrollView
      scrollEnabled={
        !openSpecies &&
        !openGenre &&
        !openKeepers &&
        !openSpecimens1 &&
        !openSpecimens2
      }
      nestedScrollEnabled={true}
    >
      <View style={styles.container}>
        <View style={styles.backButton}>
          <Link href={"/animals"}>
            <BackIcon color={colors.gray2} />
          </Link>
        </View>
        <Text style={globalStyles.screenTitle}>Nuevo Animal</Text>
        <View>
          <DropDownPicker
            open={openSpecies}
            value={selectedSpecies}
            items={species}
            setOpen={setOpenSpecies}
            setValue={setSelectedSpecies}
            setItems={setSpecies}
            placeholder="Seleccione una especie"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={{ ...globalStyles.grayTitle, textAlign: "left" }}
          />
          {errors.selectedSpecies && (
            <Text style={styles.errorText}>{errors.selectedSpecies}</Text>
          )}
        </View>
        <View>
          <DropDownPicker
            open={openGenre}
            value={selectedGenre}
            items={genres}
            setOpen={setOpenGenre}
            setValue={setSelectedGenre}
            setItems={setGenres}
            placeholder="Seleccione un género"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={{ ...globalStyles.grayTitle, textAlign: "left" }}
          />
          {errors.selectedGenre && (
            <Text style={styles.errorText}>{errors.selectedGenre}</Text>
          )}
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={family}
            onChangeText={setFamily}
            placeholder="Ingrese la familia"
          />
          {errors.family && (
            <Text style={styles.errorText}>{errors.family}</Text>
          )}
        </View>
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

        <View style={styles.checkContainer}>
          <Text>Nació en el Bioterio</Text>
          <Switch
            value={isBornInLab}
            onValueChange={(value) => setIsBornInLab(value)}
          />
        </View>
        {isBornInLab && (
          <View>
            <DropDownPicker
              open={openSpecimens1}
              value={parent1Id}
              items={labAnimals}
              setOpen={setOpenSpecimens1}
              setValue={setParent1Id}
              setItems={setLabAnimals}
              placeholder="Seleccione un espécimen"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              textStyle={{ ...globalStyles.grayTitle, textAlign: "left" }}
            />
            {errors.selectedParent1 && (
              <Text style={styles.errorText}>{errors.selectedParent1}</Text>
            )}
          </View>
        )}
        {isBornInLab && (
          <View>
            <DropDownPicker
              open={openSpecimens2}
              value={parent2Id}
              items={labAnimals}
              setOpen={setOpenSpecimens2}
              setValue={setParent2Id}
              setItems={setLabAnimals}
              placeholder="Seleccione un espécimen"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              textStyle={{ ...globalStyles.grayTitle, textAlign: "left" }}
            />
            {errors.selectedParent2 && (
              <Text style={styles.errorText}>{errors.selectedParent2}</Text>
            )}
          </View>
        )}

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

export default RequestForm;
