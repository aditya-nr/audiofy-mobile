import {
  View,
  ScrollView,
  ViewStyle,
  StyleSheet,
  Text,
  TextStyle,
} from "react-native";
import React, { useState } from "react";
import { colors, size } from "@/constants";
import {
  AmberButton,
  AudioLinkInput,
  FormImageInput,
  FormInput,
} from "@/components";

const AddAudio = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {};

  return (
    <ScrollView style={styles.container}>
      <View style={{ gap: 20 }}>
        <Text
          style={
            {
              fontSize: size.fontSize["2xl"],
              fontWeight: size.fontWeight.semibold,
              color: "white",
              paddingBottom: 20,
            } as TextStyle
          }
        >
          Upload Audio
        </Text>
        <FormInput
          title="Audio Title"
          placeholder="Give your audio a title..."
          type="Text"
          value={title}
          onChange={(text) => setTitle(text)}
          placeholderTextColor={colors.gray[300]}
        />
        <FormImageInput
          title="Cover Image"
          placeholder="Choose a image"
          height={150}
        />
        <AudioLinkInput title="Select Upload Option" />
        <AmberButton title={"Upload"} onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: "100%",
    paddingTop: 60,
    paddingHorizontal: 20,
  } as ViewStyle,
});
export default AddAudio;
