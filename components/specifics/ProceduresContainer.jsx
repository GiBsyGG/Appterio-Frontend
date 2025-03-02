import { View, StyleSheet } from "react-native";
import CardProcedure from "./cards/CardProcedure";
import ModalDetails from "../../components/commons/ModalDetails";
import { useState } from "react";
import { statusEnum } from "../../data/mockData/procedures";

export default function ProceduresContainer({ procedures }) {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const [procedureOpen, setProcedureOpen] = useState({
    title: "",
    description: "",
    status: "",
    specimenID: "",
  });

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
          onPress={(procedure) => OpenModal(procedure)}
        />
      ))}
      <ModalDetails
        title={procedureOpen.title}
        description={procedureOpen.description}
        buttonText={"Completar"}
        buttonAction={() => console.log("Procedimiento completado")}
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
