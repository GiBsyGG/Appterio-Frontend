import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { colors, globalStyles } from "../../styles/globalStyles";
import ButtonRegular from "../commons/Buttons/ButtonRegular";
import StatusItem from "./StatusItem";

export default function ModalDetails({
  title,
  description,
  buttonText,
  buttonAction,
  isModalOpen,
  SetIsModalOpen,
  subjectText,
  elementStatus,
  isEditable,
}) {
  return (
    <Modal visible={isModalOpen} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <View style={styles.titleBox}>
            <Text style={{ ...globalStyles.sectionTitle, width: "90%" }}>
              {title}
            </Text>
            <TouchableOpacity
              onPress={() => SetIsModalOpen(false)}
              style={styles.closeButton}
            >
              <Text style={globalStyles.text}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalInfoBox}>
            <Text style={globalStyles.text} numberOfLines={2}>
              {description}
            </Text>
            <View style={styles.subjectContainer}>
              <Text style={globalStyles.title}>{subjectText}</Text>
              <StatusItem status={elementStatus} />
            </View>
            {isEditable && (
              <ButtonRegular
                title={buttonText}
                ButtonAction={() => {
                  buttonAction();
                  SetIsModalOpen(false);
                }}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray4,
    opacity: 0.9,
  },
  titleBox: {
    borderBottomWidth: 2,
    borderBottomColor: colors.gray1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 28,
    height: 60,
  },
  modalInfoBox: {
    paddingHorizontal: 28,
    paddingBottom: 16,
    justifyContent: "space-between",
    alignContent: "center",
    flex: 1,
  },
  modalContainer: {
    gap: 16,
    backgroundColor: colors.white,
    width: "90%",
    height: "50%",
    opacity: 1,
    borderRadius: 20,
  },

  subjectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeButton: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
