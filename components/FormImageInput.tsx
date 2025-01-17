import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { colors, size } from "@/constants";
import { Entypo } from "@expo/vector-icons";
import {
  DocumentPickerSuccessResult,
  getDocumentAsync,
} from "expo-document-picker";

interface FormInputProps {
  title: string;
  height?: number;
  placeholder?: string;
  style?: ViewStyle;
  value: DocumentPickerSuccessResult | undefined;
  setValue: (value: DocumentPickerSuccessResult) => any;
}

const FormImageInput: React.FC<FormInputProps> = ({
  title,
  placeholder,
  style,
  height,
  value,
  setValue,
}) => {
  const handleCoverImageUpload = async () => {
    try {
      let result = await getDocumentAsync({ type: "image/*" });
      if (result.canceled != true) {
        setValue(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style}>
      <Text style={styles.labelText}>{title}</Text>
      <TouchableOpacity
        onPress={handleCoverImageUpload}
        activeOpacity={0.8}
        style={[styles.inputContainer, { height: height }]}
      >
        <View
          style={[
            styles.innerContainer,
            { backgroundColor: value?.assets[0].uri ? "#00000070" : "" },
          ]}
        >
          <Entypo name="upload" size={24} color={colors.secondary[500]} />
          <Text style={{ color: "white" }}>{placeholder}</Text>
        </View>
        {value?.assets[0].uri && (
          <Image
            source={{ uri: value?.assets[0].uri }}
            style={styles.imageContainer}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.gray[800],
    borderRadius: size.borderRadius.md,
    borderColor: colors.gray[600],
    borderWidth: 1,
    position: "relative",
    overflow: "hidden",
  } as ViewStyle,
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    zIndex: 20,
  } as ViewStyle,
  imageContainer: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    position: "absolute",
    zIndex: 10,
  },
  orangeBorder: {
    borderColor: colors.secondary[600],
  },
  labelText: {
    color: colors.gray[200],
    fontSize: size.fontSize.sm,
    fontWeight: size.fontWeight.semibold,
    marginBottom: size.margin.xs,
    elevation: 5,
  } as TextStyle,
});
export default FormImageInput;
