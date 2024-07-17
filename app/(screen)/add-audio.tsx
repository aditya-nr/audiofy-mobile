import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AddAudio = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true }} />
      <Text>AddAudio</Text>
    </View>
  );
};

export default AddAudio;
