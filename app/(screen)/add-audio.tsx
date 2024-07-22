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
import { DocumentPickerSuccessResult } from "expo-document-picker";
import { API } from "@/services/api";

const AddAudio = () => {
  const [title, setTitle] = useState<string>();
  const [image, setImage] = useState<DocumentPickerSuccessResult | undefined>();
  const [audio, setAudio] = useState<DocumentPickerSuccessResult | undefined>();
  const [link, setLink] = useState<string>("");
  const [type, setType] = useState<"LINK" | "FILE">("LINK");

  const handleSubmit = async () => {
    // verify
    if (!image) return;
    try {
      // upload image
      let res = await API.putToS3(image);
      console.log("Image Upload :: ", res);
      // check the type
      // if type file
      if (type == "FILE") {
      } else {
      }
      // then get presigned url, then upload, then return back the url
      // if type link
      // then send the link , and get url
      // at the end, crate a entry in db, about it
    } catch (error) {}
  };

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
          value={image}
          setValue={(val) => setImage(val)}
        />
        <AudioLinkInput
          title="Select Upload Option"
          audio={audio}
          setAudio={(val) => setAudio(val)}
          link={link}
          setLink={(val) => setLink(val)}
          setType={(val: "LINK" | "FILE") => setType(val)}
          type={type}
        />
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
