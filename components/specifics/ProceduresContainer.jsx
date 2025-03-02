import { View, StyleSheet } from "react-native";
import CardProcedure from "./cards/CardProcedure";
import ModalDetails from "../../components/commons/ModalDetails";
import { useState } from "react";
import { statusEnum } from "../../utils/StatusEnum";
import { GetAnimalName } from "../../utils/GetAnimalName";
import { UpdateProcedure } from "../../services/put/procedure";
import { useRouter } from "expo-router";

export default function ProceduresContainer({ procedures, onRefresh }) {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const [procedureOpen, setProcedureOpen] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
    specimenID: "",
  });

  const router = useRouter();

  const CompleteProcedure = (procedureId) => {
    UpdateProcedure(procedureId)
      .then(() => {
        SetIsModalOpen(false);
        onRefresh();
      })
      .catch((error) => {});
  };

  const OpenModal = (Modalprocedure) => {
    setProcedureOpen(Modalprocedure);
    SetIsModalOpen(true);
  };
  return (
    <View style={styles.container}>
      {procedures.map((procedure) => (
        <CardProcedure
          procedure={procedure}
          key={procedure.id}
          onPress={(procedure) => {
            const specimentID = GetAnimalName(
              procedure.specimen.id,
              procedure.specimen.family
            );
            const procedureInfo = {
              id: procedure.id,
              title: procedure.title,
              description: procedure.description,
              status: procedure.status,
              specimenID: specimentID,
            };
            OpenModal(procedureInfo);
          }}
        />
      ))}
      <ModalDetails
        title={procedureOpen.title}
        description={procedureOpen.description}
        buttonText={"Completar"}
        buttonAction={() => CompleteProcedure(procedureOpen.id)}
        isModalOpen={isModalOpen}
        SetIsModalOpen={SetIsModalOpen}
        elementStatus={procedureOpen.status}
        subjectText={`Especimen ${procedureOpen.specimenID}`}
        isEditable={procedureOpen.status !== statusEnum.HECHO}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
});

