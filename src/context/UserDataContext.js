import React, { createContext, useContext, useState } from 'react';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [userGoals, setUserGoals] = useState({});
  const [bodyCount, setBodyCount] = useState({});

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
        userGoals,
        setUserGoals,
        bodyCount,
        setBodyCount,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useData = () => {
  return useContext(UserDataContext);
};
