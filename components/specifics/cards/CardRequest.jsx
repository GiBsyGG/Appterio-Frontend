import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, globalStyles } from "../../../styles/globalStyles";
import { profiles } from "../../../data/mockData/Profiles";
import ProfileResume from "../resumeInfo/ProfileResume";
import StatusItem from "../../commons/StatusItem";

export default function CardRequest({ request, isInvestigator, onPress }) {
  const GetProfileById = (id) => {
    return profiles.find((profile) => profile.id === id);
  };

  var profileInfo = null;

  if (isInvestigator) {
    profileInfo = GetProfileById(request.adignadoID);
  } else {
    profileInfo = GetProfileById(request.solicitanteID);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.titleBox}>
          <Text style={globalStyles.title}>{request.titulo}</Text>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={globalStyles.text} numberOfLines={3}>
            {request.descripcion}
          </Text>
        </View>
        <View style={styles.cardInfoBox}>
          <ProfileResume profile={profileInfo} />
          <StatusItem status={request.status} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    height: 180,
    flex: 1,
    justifyContent: "space-around",
  },

  titleBox: {
    borderBottomWidth: 2,
    borderBottomColor: colors.gray1,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  descriptionBox: {
    paddingHorizontal: 16,
    height: 80,
    paddingTop: 8,
  },

  cardInfoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
  },
});
