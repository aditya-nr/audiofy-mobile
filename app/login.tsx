import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { AmberButton, FormInput } from "@/components";
import { colors, size } from "@/constants";
import { useAuth } from "@/components/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuth();

  const handleSubmit = async () => {
    onLogin && (await onLogin("ad@mgail.com", "123445"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Audiofy</Text>
      </View>
      <Text style={styles.titleText}>Sign in</Text>
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
        placeholder=""
      />
      <Link href={"#"} style={{ alignSelf: "flex-end" }}>
        <Text style={[styles.textGraySmall]}>Forgot Password?</Text>
      </Link>

      <AmberButton
        title={"Sign in"}
        isLoading={loading}
        onPress={handleSubmit}
      />
      <Text style={[styles.textGraySmall, { textAlign: "center" }]}>
        Don't have an account?
        <Link href={"/signup"}>
          <Text style={styles.signupText}>Signup</Text>
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
export default Login;
