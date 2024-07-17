import {
  View,
  Text,
  TextInput,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors, size } from "@/constants";
import { useSafeAreaFrame } from "react-native-safe-area-context";

interface SearchInputProps {
  placeholder?: string;
  onSearch: (text: string) => any;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  placeholder,
  style,
  textStyle,
}) => {
  const [value, setValue] = useState("");
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[styles.textStyle, textStyle]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray[400]}
        value={value}
        onChangeText={(text) => setValue(text)}
        cursorColor={colors.secondary[600]}
      />
      <Ionicons
        name="search-outline"
        size={24}
        color={colors.secondary[600]}
        onPress={() => onSearch(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[800],
    paddingVertical: size.padding.sm,
    paddingHorizontal: size.padding.lg,
    borderRadius: size.borderRadius.md,
    borderColor: colors.gray[600],
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: colors.white,
  } as ViewStyle,
  textStyle: {
    color: colors.white,
    fontSize: size.fontSize.md,
    height: "100%",
    width: "92%",
  } as TextStyle,
});
export default SearchInput;
