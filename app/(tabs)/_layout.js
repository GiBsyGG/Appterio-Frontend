import { Tabs } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../styles/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { rolesEnum } from "../../utils/RolesEnum";
import useAuthStore from "../../Auth/authStore";

import {
  PetIcon,
  HomeIcon,
  ProfileIcon,
  CheckListIcon,
  ClipBoardIcon,
  UsersIcon,
} from "../../components/commons/Icons";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const { user } = useAuthStore();
  // Componente personalizado para el botón de la barra de pestañas
  const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={styles.tabButton}
      activeOpacity={1} // Desactiva el efecto de pulsación
    >
      {children}
    </TouchableOpacity>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        sceneStyle: { padding: insets.top, paddingTop: insets.top },
      }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="myTasks"
        options={{
          tabBarIcon: ({ focused }) => (
            <CheckListIcon
              color={focused ? colors.primaryBlue : colors.white1}
              backgroundColor={focused ? colors.lightBlue : colors.primaryBlue}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          ...(user.role !== rolesEnum.UNLOGED &&
          user.role !== rolesEnum.ADMINISTRADOR
            ? { tabBarItemStyle: styles.tabItem }
            : { tabBarItemStyle: styles.hiddenIcon }),
        }}
      />
      <Tabs.Screen
        name="requests"
        options={{
          tabBarIcon: ({ focused }) => (
            <ClipBoardIcon
              color={focused ? colors.primaryBlue : colors.white1}
              backgroundColor={focused ? colors.lightBlue : colors.primaryBlue}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          ...(user.role !== rolesEnum.UNLOGED &&
          user.role !== rolesEnum.ADMINISTRADOR
            ? { tabBarItemStyle: styles.tabItem }
            : { tabBarItemStyle: styles.hiddenIcon }),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          tabBarIcon: ({ focused }) => (
            <UsersIcon
              color={focused ? colors.primaryBlue : colors.white1}
              backgroundColor={focused ? colors.lightBlue : colors.primaryBlue}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          ...(user.role === rolesEnum.ADMINISTRADOR
            ? { tabBarItemStyle: styles.tabItem }
            : { tabBarItemStyle: styles.hiddenIcon }),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              color={focused ? colors.primaryBlue : colors.white1}
              backgroundColor={focused ? colors.lightBlue : colors.primaryBlue}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarItemStyle: styles.tabItem,
        }}
      />

      <Tabs.Screen
        name="animals"
        options={{
          tabBarIcon: ({ focused }) => (
            <PetIcon
              color={focused ? colors.primaryBlue : colors.white1}
              backgroundColor={focused ? colors.lightBlue : colors.primaryBlue}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          ...(user.role !== rolesEnum.UNLOGED &&
          user.role !== rolesEnum.ADMINISTRADOR
            ? { tabBarItemStyle: styles.tabItem }
            : { tabBarItemStyle: styles.hiddenIcon }),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              color={focused ? colors.primaryBlue : colors.white1}
              backgroundColor={focused ? colors.lightBlue : colors.primaryBlue}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarItemStyle: styles.tabItem,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: colors.primaryBlue,
    justifyContent: "center",
    height: 80,
    alignItems: "center",
  },
  tabItem: {
    width: 54,
    height: 54,
    borderRadius: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hiddenIcon: {
    display: "none",
    width: 0,
    height: 0,
    position: "absolute",
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
