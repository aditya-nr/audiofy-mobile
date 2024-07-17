import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  TextStyle,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { colors, size } from "@/constants";
import { Ionicons } from "@expo/vector-icons";

interface FormInputProps {
  title: string;
  placeholder?: string;
  placeholderTextColor?: string;
  style?: ViewStyle;
  value: any;
  onChange: (value: string) => any;
  type: "Password" | "Text";
}
const FormInput: React.FC<FormInputProps> = ({
  onChange,
  title,
  type,
  value,
  placeholder,
  placeholderTextColor,
  style,
}) => {
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <View style={style}>
      <Text style={styles.labelText}>{title}</Text>
      <View style={[styles.inputContainer, focus && styles.orangeBorder]}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChange}
          secureTextEntry={type == "Password" && !show}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {type == "Password" && (
          <Ionicons
            name={!show ? "eye-off-outline" : "eye-outline"}
            size={24}
            color={colors.gray[300]}
            onPress={() => setShow((pre) => !pre)}
            style={{ marginLeft: -20 }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.gray[800],
    paddingVertical: size.padding.sm,
    paddingHorizontal: size.padding.lg,
    borderRadius: size.borderRadius.md,
    borderColor: colors.gray[600],
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  } as ViewStyle,
  orangeBorder: {
    borderColor: colors.secondary[600],
  },
  labelText: {
    color: colors.gray[200],
    fontSize: size.fontSize.sm,
    fontWeight: size.fontWeight.semibold,
    marginBottom: size.margin.xs,
  } as TextStyle,

  textInput: {
    color: colors.white,
    fontSize: size.fontSize.md,
    height: "100%",
    width: "100%",
  },
});
export default FormInput;
