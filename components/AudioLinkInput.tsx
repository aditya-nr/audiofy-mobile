import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  TextInput,
  TextStyle,
} from "react-native";
import React, { useState } from "react";
import { colors, size } from "@/constants";
import * as DocumentPicker from "expo-document-picker";

const AudioLinkInput = ({ title }: { title: string }) => {
  const [mode, setMode] = useState(false);
  const [externalUrl, setExternalUrl] = useState("");
  const [audio, setAudio] =
    useState<DocumentPicker.DocumentPickerSuccessResult>();
  const handleAudioPick = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({ type: "audio/*" });
      if (result.canceled != true) {
        console.log(result.assets[0]);
        setAudio(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text style={styles.labelText}>{title}</Text>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => setMode(true)}
            style={[styles.buttonStyle, mode && styles.activeButton]}
          >
            <Text
              style={[styles.buttonTextStyle, mode && styles.activeTextStyle]}
            >
              File
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setMode(false)}
            style={[styles.buttonStyle, !mode && styles.activeButton]}
          >
            <Text
              style={[styles.buttonTextStyle, !mode && styles.activeTextStyle]}
            >
              Link
            </Text>
          </TouchableOpacity>
        </View>

        {/* Audio */}
        {mode && (
          <TouchableOpacity
            onPress={handleAudioPick}
            style={{
              padding: 14,
              backgroundColor: colors.gray[300],
              borderRadius: size.borderRadius.md,
              alignItems: "center",
            }}
            activeOpacity={0.8}
          >
            <Text
              style={{
                color: colors.gray[700],
                overflow: "hidden",
              }}
            >
              {audio && audio.assets[0].name
                ? audio.assets[0].name
                : "Choose Audio File"}
            </Text>
          </TouchableOpacity>
        )}

        {!mode && (
          <TextInput
            value={externalUrl}
            onChangeText={(v) => setExternalUrl(v)}
            placeholder="Paste the link here..."
            placeholderTextColor={colors.gray[600]}
            style={{
              padding: 10,
              backgroundColor: colors.gray[300],
              color: "black",
              borderRadius: size.borderRadius.md,
            }}
            cursorColor={colors.black}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[800],
    borderRadius: size.borderRadius.md,
    overflow: "hidden",
    borderColor: colors.gray[600],
    borderWidth: 1,
    padding: 7,
    gap: 7,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: colors.gray[700],
    borderRadius: size.borderRadius.md,
    overflow: "hidden",
    padding: 5,
  } as ViewStyle,
  buttonStyle: {
    flex: 1,
  },
  activeButton: {
    backgroundColor: colors.gray[300],
    borderRadius: size.borderRadius.md,
  },
  buttonTextStyle: {
    color: colors.gray[300],
    textAlign: "center",
    paddingVertical: size.padding.sm,
  },
  activeTextStyle: {
    color: colors.black,
    fontWeight: size.fontWeight.semibold,
    fontSize: size.fontSize.md,
  } as TextStyle,
  labelText: {
    color: colors.gray[200],
    fontSize: size.fontSize.sm,
    fontWeight: size.fontWeight.semibold,
    marginBottom: size.margin.xs,
    elevation: 5,
  } as TextStyle,
});
export default AudioLinkInput;
