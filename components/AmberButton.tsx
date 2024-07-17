import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors, size } from "@/constants";

interface AmberButtonProps {
  title: String;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  onPress: () => void;
  isLoading?: boolean;
}
const AmberButton: React.FC<AmberButtonProps> = ({
  title,
  style,
  titleStyle,
  onPress,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, style, isLoading && styles.opacity]}
      disabled={isLoading}
    >
      <Text style={[styles.text, titleStyle, isLoading && styles.hidden]}>
        {title}
      </Text>

      {isLoading && <ActivityIndicator size={"small"} color={colors.white} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary[500],
    paddingVertical: size.padding.md,
    borderRadius: size.borderRadius.md,
    opacity: 1,
    elevation: 5,
    shadowColor: colors.white,
  } as ViewStyle,
  opacity: {
    opacity: 0.5,
  },
  hidden: {
    display: "none",
  },
  text: {
    color: colors.black,
    textAlign: "center",
    fontWeight: size.fontWeight.semibold,
  } as TextStyle,
});

export default AmberButton;
