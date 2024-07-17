import { AuthProvider, useAuth } from "@/components/AuthContext";
import { Stack, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

function Layout() {
  const { authState } = useAuth();
  const navi = useNavigation<NativeStackNavigationProp<any>>();

  console.log(authState);

  useEffect(() => {
    if (authState?.authenticated === true) navi.navigate("(screen)");
    else navi.navigate("login");
  }, [authState]);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {authState?.authenticated === true ? (
        <Stack.Screen name="(screen)" />
      ) : (
        <Stack.Screen name="login" />
      )}
    </Stack>
  );
}
