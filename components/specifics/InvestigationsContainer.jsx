import { View, StyleSheet } from "react-native";
import CardInvestigation from "./cards/CardInvestigation";
import { useState } from "react";
import { investigationEnum } from "../../utils/ResearchStatusEnum";
import ModalDetails from "../commons/ModalDetails";
import { useRouter } from "expo-router";
import { UpdateProcedure } from "../../services/put/research";

export default function InvestigationsContainer({ investigations }) {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const [investigationOpen, setInvestigationOpen] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
  });

  const router = useRouter();

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
        buttonText={"Cerrar"}
        buttonAction={() => {
          console.log(investigationOpen.id);
          UpdateProcedure(investigationOpen.id);
          router.replace("/animals");
        }}
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

