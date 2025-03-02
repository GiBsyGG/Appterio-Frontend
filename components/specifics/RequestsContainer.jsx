import { View, StyleSheet } from "react-native";
import CardRequest from "./cards/CardRequest";
import ModalDetails from "../../components/commons/ModalDetails";
import { useState } from "react";
import { statusEnum } from "../../utils/StatusEnum";
import { UpdateRequest } from "../../services/put/request";

export default function RequestsContainer({ requests, onRefresh }) {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const [requestOpen, setRequestOpen] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
  });

  const OpenModal = (modalRequest) => {
    setRequestOpen(modalRequest);
    SetIsModalOpen(true);
  };

  const CompleteRequest = (requestId) => {
    UpdateRequest(requestId)
      .then(() => {
        SetIsModalOpen(false);
        onRefresh();
      })
      .catch((error) => {});
  };

  return (
    <View style={styles.container}>
      {requests.map((request) => (
        <CardRequest
          request={request}
          key={request.id}
          onPress={(request) => OpenModal(request)}
        />
      ))}
      <ModalDetails
        title={requestOpen.title}
        description={requestOpen.description}
        buttonText={"Completar"}
        buttonAction={() => CompleteRequest(requestOpen.id)}
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
