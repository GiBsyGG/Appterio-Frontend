import { View, StyleSheet } from "react-native";
import CardRequest from "./cards/CardRequest";
import ModalDetails from "../../components/commons/ModalDetails";
import { useState } from "react";
import { statusEnum } from "../../data/mockData/procedures";

export default function RequestsContainer({ requests, isInvestigator }) {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const [requestOpen, setRequestOpen] = useState({
    title: "",
    description: "",
    status: "",
  });

  const OpenModal = (modalRequest) => {
    setRequestOpen(modalRequest);
    SetIsModalOpen(true);
  };
  return (
    <View style={styles.container}>
      {requests.map((request) => (
        <CardRequest
          request={request}
          isInvestigator={isInvestigator}
          key={request.id}
          onPress={(request) => OpenModal(request)}
        />
      ))}
      <ModalDetails
        title={requestOpen.title}
        description={requestOpen.description}
        buttonText={"Completar"}
        buttonAction={() => console.log("Solicitud completado")}
        isModalOpen={isModalOpen}
        SetIsModalOpen={SetIsModalOpen}
        elementStatus={requestOpen.status}
        subjectText={`Estado`}
        isEditable={requestOpen.status !== statusEnum.HECHO}
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
