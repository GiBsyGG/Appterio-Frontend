import { View, StyleSheet } from "react-native";
import CardInvestigation from "./cards/CardInvestigation";
import { useState } from "react";
import { investigationEnum } from "../../data/mockData/Investigations";
import ModalDetails from "../commons/ModalDetails";

export default function InvestigationsContainer({ investigations }) {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const [investigationOpen, setInvestigationOpen] = useState({
    title: "",
    description: "",
    status: "",
  });

  const OpenModal = (modalInvestigation) => {
    setInvestigationOpen(modalInvestigation);
    SetIsModalOpen(true);
  };
  return (
    <View style={styles.container}>
      {investigations.map((investigation) => (
        <CardInvestigation
          investigation={investigation}
          key={investigation.id}
          OnPress={(investigation) => OpenModal(investigation)}
        />
      ))}
      <ModalDetails
        title={investigationOpen.title}
        description={investigationOpen.description}
        buttonText={"Editar"}
        buttonAction={() => console.log("Editar Investigación")}
        isModalOpen={isModalOpen}
        SetIsModalOpen={SetIsModalOpen}
        elementStatus={investigationOpen.status}
        subjectText={`Estado`}
        isEditable={investigationOpen.status !== investigationEnum.CERRADA}
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
