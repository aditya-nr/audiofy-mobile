import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "my-jwt";
export const API_URL = "";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: false,
  });

  const register = async (email: string, password: string) => {
    try {
      // register
    } catch (error) {
      console.log("error");
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // login
      await AsyncStorage.setItem(
        "authState",
        JSON.stringify({
          authenticated: true,
          token: "jwt-token",
        })
      );
      setAuthState({
        authenticated: true,
        token: "jwt-token",
      });
      console.log("Login Success");
    } catch (error) {
      console.log("error");
    }
  };

  const logut = async () => {
    try {
      // logout
      await AsyncStorage.setItem(
        "authState",
        JSON.stringify({
          authenticated: false,
          token: "",
        })
      );
      setAuthState({
        authenticated: false,
        token: null,
      });
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    const authStateLoad = async () => {
      const authStatePrev = await AsyncStorage.getItem("authState");
      if (!authStatePrev) {
        setAuthState({
          authenticated: false,
          token: null,
        });
      } else {
        setAuthState(JSON.parse(authStatePrev));
      }
    };

    authStateLoad();
  }, []);

  const value: AuthProps = {
    authState,
    onRegister: register,
    onLogin: login,
    onLogout: logut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
