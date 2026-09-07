import { createContext, useContext, useState } from "react";
import { createToken, getStoredUser, users } from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);

  const login = (username, password) => {
    const foundUser = users.find(
      (item) =>
        item.username === username && item.password === password
    );

    if (!foundUser) {
      return false;
    }

    const token = createToken(foundUser);

    localStorage.setItem("token", token);

    setUser({
      id: foundUser.id,
      username: foundUser.username,
      role: foundUser.role,
    });

    return true;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};