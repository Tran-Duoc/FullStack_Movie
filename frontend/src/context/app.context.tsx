import { createContext, useState } from "react";
import { User } from "../types/auth.type";
import { getAccessToken, getProfileFromLS } from "../utils/LocalStorage.util";

interface TypeAppProvider {
  children: React.ReactNode;
}
interface AppContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  profile: Pick<User, "name"> | null;
  setProfile: React.Dispatch<React.SetStateAction<Pick<User, "name"> | null>>;
}

const initialState: AppContextType = {
  isAuthenticated: Boolean(getAccessToken()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = ({ children }: TypeAppProvider) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialState.isAuthenticated
  );
  const [profile, setProfile] = useState<Pick<User, "name"> | null>(
    initialState.profile
  );

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
