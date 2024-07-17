import { View, Text, StyleSheet, TextStyle, ViewStyle } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { AmberButton, FormInput } from "@/components";
import { colors, size } from "@/constants";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Audiofy</Text>
      </View>
      <Text style={styles.titleText}>Sign up</Text>
      <FormInput
        onChange={(v) => setName(v)}
        title={"Name"}
        placeholder={"Enter Full Name"}
        type="Text"
        value={name}
        placeholderTextColor={"#7B7B8B"}
      />

      <FormInput
        onChange={(v) => setUsername(v)}
        title={"Email"}
        placeholder={"email@example.com"}
        type="Text"
        value={username}
        placeholderTextColor={"#7B7B8B"}
      />
      <FormInput
        onChange={(v) => setPassword(v)}
        title={"Password"}
        type="Password"
        value={password}
        placeholderTextColor={"#7B7B8B"}
      />
      <Link href={"#"} style={{ alignSelf: "flex-end" }}>
        <Text style={[styles.textGraySmall]}>Forgot Password?</Text>
      </Link>

      <AmberButton
        title={"Sign up"}
        isLoading={loading}
        onPress={handleSubmit}
      />
      <Text style={[styles.textGraySmall, { textAlign: "center" }]}>
        Already have an account?
        <Link href={"/login"}>
          <Text style={styles.signupText}>Login</Text>
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    rowGap: size.gap.xl,
    backgroundColor: colors.background,
    paddingHorizontal: size.padding.xl,
  } as ViewStyle,

  logoContainer: {} as ViewStyle,

  logoText: {
    fontWeight: size.fontWeight.extrabold,
    color: colors.secondary[300],
    fontSize: size.fontSize["2xl"],
  } as TextStyle,

  titleText: {
    color: colors.white,
    fontWeight: size.fontWeight.bold,
    fontSize: size.fontSize["xl"],
    marginBottom: size.margin.lg,
  } as TextStyle,

  textGraySmall: {
    color: colors.gray[300],
    fontSize: size.fontSize.xs,
  } as TextStyle,

  signupText: {
    color: colors.secondary[700],
    fontWeight: size.fontWeight.semibold,
  } as TextStyle,
});
export default Signup;
