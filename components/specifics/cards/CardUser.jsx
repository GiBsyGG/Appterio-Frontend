import { View, Text, StyleSheet } from "react-native";
import { colors, globalStyles } from "../../../styles/globalStyles";
import ButtonRegular from "../../commons/Buttons/ButtonRegular";
import { useRouter } from "expo-router";

export default function CardUser({ user }) {
  const router = useRouter();
  return (
    <View style={styles.card}>
      <View style={styles.titleBox}>
        <Text style={globalStyles.title} numberOfLines={2}>
          {user.name}
        </Text>
      </View>
      <View style={styles.descriptionBox}>
        <Text style={globalStyles.text} numberOfLines={3}>
          {user.role}
        </Text>
        <ButtonRegular
          title={"Editar"}
          ButtonAction={() => router.push(`edit/users/${user.id}`)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    height: 120,
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
    height: 60,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
