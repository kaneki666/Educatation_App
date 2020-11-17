import React, {useEffect, createContext} from 'react';
const authContext = {
  isSignedIn: false,
};

export const AuthContext = createContext(authContext);
