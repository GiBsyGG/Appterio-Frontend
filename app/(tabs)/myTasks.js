import { View, ActivityIndicator } from "react-native";
import ProceduresKeeper from "../(screens)/ProceduresKeeper";
import ProceduresInvestigator from "../(screens)/ProceduresInverstigator";
import useAuthStore from "../../Auth/authStore";
import { rolesEnum } from "../../utils/RolesEnum";
import { GetProcedureByRole } from "../../services/gets/procedure";
import { useEffect, useState } from "react";
import { colors } from "../../styles/globalStyles";

export default function Index() {
  const { user } = useAuthStore();
  const [proceduresData, setProceduresData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prev) => !prev); // Cambia el estado para forzar la recarga
  };

  useEffect(() => {
    GetProcedureByRole(user.role, user.userId).then((response) => {
      setLoading(false);
      if (response.status === 404) {
        setProceduresData([]);
      } else if (response.status === 200) {
        setProceduresData(response.data);
      } else {
        console.log("Error al obtener los procedimientos");
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
    <View style={{ flex: 1 }}>
      {user.role === rolesEnum.CUIDADOR && (
        <ProceduresKeeper
          procedures={proceduresData}
          onRefresh={handleRefresh}
        />
      )}
      {user.role === rolesEnum.INVESTIGADOR && (
        <ProceduresInvestigator
          procedures={proceduresData}
          onRefresh={handleRefresh}
        />
      )}
    </View>
  );
}

