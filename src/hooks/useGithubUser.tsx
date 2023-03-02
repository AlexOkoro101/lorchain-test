import { User } from "@/types";
import { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from "react";

const GithubUserContext = createContext({});

export const GithubUserProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<User>({});
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState(null);

  const memoedValue = useMemo(() => {
    return {
      user, setUser,isLoading, setIsLoading, error, setError
    }
  }, [user, isLoading, error, setUser])

  return (
    <GithubUserContext.Provider value={memoedValue}>
      { children }
    </GithubUserContext.Provider>
  );
}

export default function useGithubUser() {
  return useContext(GithubUserContext)
}