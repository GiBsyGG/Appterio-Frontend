import { View, ActivityIndicator } from "react-native";
import RequestsInvestigator from "../(screens)/RequestsInvestigator";
import RequestsKeeper from "../(screens)/RequestsKeeper";
import useAuthStore from "../../Auth/authStore";
import { rolesEnum } from "../../utils/RolesEnum";
import { GetRequestByRole } from "../../services/gets/requests";
import { useEffect, useState } from "react";
import { colors } from "../../styles/globalStyles";
import { set } from "react-hook-form";

export default function Index() {
  const { user } = useAuthStore();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prev) => !prev); // Cambia el estado para forzar la recarga
  };

  useEffect(() => {
    GetRequestByRole(user.role, user.userId).then((response) => {
      setLoading(false);
      if (response.status === 404) {
        setRequests([]);
        console.log(requests);
      } else {
        setRequests(response.data);
        console.log(requests);
      }
    });
  }, [refresh]);

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      </View>
    );

  return (
    <View>
      {user.role === rolesEnum.CUIDADOR && (
        <RequestsKeeper requests={requests} onRefresh={handleRefresh} />
      )}
      {user.role === rolesEnum.INVESTIGADOR && (
        <RequestsInvestigator requests={requests} onRefresh={handleRefresh} />
      )}
    </View>
  );
}

