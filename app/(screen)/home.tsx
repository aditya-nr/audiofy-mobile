import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { Stack, Tabs, useRouter } from "expo-router";
import { colors, size } from "@/constants";
import { SearchInput } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/components/AuthContext";

const Home = () => {
  const { onLogout } = useAuth();
  const navi = useRouter();
  const onCLickSearch = () => {};
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTextSmall}>Welcome Back</Text>
          <Text style={styles.headerTextLarge}>Aditya</Text>
        </View>
        <View style={styles.avatar}>
          <Text>Ad</Text>
        </View>
      </View>
      {/* search */}
      <SearchInput onSearch={onCLickSearch} placeholder="Search for audio" />

      {/* option */}
      <View style={styles.optionContainer}>
        <TouchableOpacity activeOpacity={0.9} style={[styles.option]}>
          <Ionicons
            name="add-outline"
            size={24}
            color={colors.secondary[800]}
          />
          <Text style={styles.optionText}>Add Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={[styles.option]}>
          <Ionicons
            name="file-tray-full-outline"
            size={24}
            color={colors.secondary[800]}
          />
          <Text style={styles.optionText}>Your Uploads</Text>
        </TouchableOpacity>
      </View>

      {/* most popular playlists */}
      {/* popular audio */}
      <View>
        <Button
          title="logout"
          onPress={() => {
            onLogout && onLogout();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: size.margin["3xl"],
    paddingTop: size.margin["xl"],
  } as ViewStyle,
  headerLeft: {} as ViewStyle,
  headerTextSmall: {
    color: colors.gray[200],
    fontSize: size.fontSize["sm"],
    fontWeight: size.fontWeight.normal,
  } as TextStyle,
  headerTextLarge: {
    color: colors.white,
    fontSize: size.fontSize["2xl"],
    fontWeight: size.fontWeight.bold,
  } as TextStyle,
  avatar: {
    backgroundColor: colors.gray[300],
    borderRadius: size.borderRadius["2xl"],
    padding: 10,
    elevation: 5,
    shadowColor: colors.white,
  } as ViewStyle,
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: size.padding.xl,
    gap: size.gap.lg,
    paddingTop: size.margin.sm,
  } as ViewStyle,
  optionContainer: {
    gap: size.gap.sm,
    flexWrap: "wrap",
    flexDirection: "row",
  } as ViewStyle,
  option: {
    flexGrow: 1,
    backgroundColor: colors.gray[300],
    alignItems: "center",
    paddingVertical: size.padding.md,
    borderRadius: size.borderRadius.xl,
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
    borderColor: colors.secondary[900],
    borderWidth: 0.9,
  } as ViewStyle,
  optionText: {
    fontSize: size.fontSize.sm,
    fontWeight: size.fontWeight.normal,
  } as TextStyle,
});
export default Home;
