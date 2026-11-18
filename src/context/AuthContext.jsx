import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { getMyProfile } from "../api/userApi";
import { loginUser, logoutUser, registerUser } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication when the app loads
  const checkAuth = useCallback(async () => {
    try {
      const res = await getMyProfile();

      const currentUser = res.data.user ?? res.data;
      setUser(currentUser);

      return currentUser;
    } catch (error) {
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Login user
  const login = async (credentials) => {
    const res = await loginUser(credentials);
    await checkAuth();

    return res;
  };

  // Register user
  const register = async (userData) => {
    return await registerUser(userData);
  };

  // Logout user
  const logout = async () => {
    try {
      await logoutUser();
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        register,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
