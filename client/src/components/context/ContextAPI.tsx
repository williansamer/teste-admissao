import React, { createContext } from 'react';
import { useCustom } from './hooks/useCustom';

type GetOperations = {
  id: string;
  name_operation: string;
  value: number;
  preference: number;
  qtt_notes: number;
  qtt_packages: number;
}

type TestType = {
  isLoged: boolean;
  setIsLoged: React.Dispatch<React.SetStateAction<boolean>>;
  getOperations: GetOperations[];
  setGetOperations: React.Dispatch<React.SetStateAction<GetOperations[]>>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext <TestType>({} as TestType);

export const ContextAPI: React.FC<TestType> = ({ children }) => {
  const { isLoged, setIsLoged, getOperations, setGetOperations, user, setUser } = useCustom();

  return (
    <Context.Provider value={{ isLoged, setIsLoged, getOperations, setGetOperations, user, setUser }}>
      {children}
    </Context.Provider>
  );
};