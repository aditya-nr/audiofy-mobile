import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors, size } from "@/constants";

const TabIcon = ({
  icon,
  color,
  name,
}: {
  color: string;
  icon: any;
  name: string;
}) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", gap: 2 }}>
      <Ionicons name={icon} size={23} color={color} />
      <Text style={{ color: color, fontSize: size.fontSize.xs }}>{name}</Text>
    </View>
  );
};

const ScreenLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.secondary[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.gray[600],
          height: 70,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} name={"Home"} icon="home-sharp" />
          ),
        }}
      />
      <Tabs.Screen
        name="add-audio"
        options={{
          title: "Add",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name={"Add"} icon="add-circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name={"Library"} icon="library" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name={"Search"} icon="search" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default ScreenLayout;
