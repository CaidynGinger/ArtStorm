import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";
import { GetUser } from "../firebase/Users/userCollectionService";

export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  UserDetails: {},
  setUserDetailsHandler: (username, id) => {},
});

function AuthContentProvider({ children }) {
  const [AuthToken, setAuthToken] = useState(undefined);
  const [userDetails, setUserDetails] = useState({
    username: "",
    id: "",
    userRecord: {
      judge: false,
    },
  });

  function authenticate(token) {
    // console.log(token);
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
    setUserDetails({
      username: "",
      id: "",
      userRecord: {
        judge: false,
      },
    });
  }

  async function setUserDetailsHandler(username, id) {
    // console.log(id);
    const user = await GetUser(id);
    const { Judge } = user;
    // console.log(JSON.parse(user));

    setUserDetails({
      username: username,
      id: id,
      userRecord: {
        judge: Judge,
      },
    });
  }

  const value = {
    token: AuthToken,
    isAuthenticated: !!AuthToken,
    authenticate,
    logout,
    UserDetails: userDetails,
    setUserDetailsHandler,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContentProvider;
