import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  PetIcon,
  HomeIcon,
  ProfileIcon,
  CheckListIcon,
  ClipBoardIcon,
} from "../../components/commons/Icons";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        sceneStyle: { padding: insets.top, paddingTop: insets.top },
      }}
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
          tabBarIconStyle: styles.tabItem,
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
          tabBarIconStyle: styles.tabItem,
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
          tabBarIconStyle: styles.tabItem,
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
          tabBarIconStyle: styles.tabItem,
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
          tabBarIconStyle: styles.tabItem,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: colors.primaryBlue,
    justifyContent: "space-around",
    height: 80,
  },
  tabItem: {
    width: 54,
    height: 54,
    borderRadius: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
