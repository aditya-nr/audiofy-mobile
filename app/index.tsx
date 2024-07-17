import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "@/components/AuthContext";
import { colors, size } from "@/constants";
import { AmberButton } from "@/components";
import { useNavigation } from "expo-router";

const index = () => {
  const navi = useNavigation();
  return (
    <View
      style={{
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: size.fontSize["3xl"],
          fontWeight: size.fontWeight.bold,
          color: colors.secondary[500],
        }}
      >
        Audiofy
      </Text>
      <AmberButton
        style={{
          margin: size.margin.xl,
          padding: size.margin.xl,
        }}
        title="Get Started"
        onPress={() => {
          navi.navigate("login");
        }}
      />
    </View>
  );
};
export default index;
