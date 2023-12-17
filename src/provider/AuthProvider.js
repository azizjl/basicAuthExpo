import React, { createContext, useState, useEffect } from "react";
import { supabase } from "../initSupabase";
import { Session } from "@supabase/supabase-js";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  // user null = loading
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setSession(session);
    setUser(session ? true : false);
    const { authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`Supabase auth event: ${event}`);
        setSession(session);
        setUser(session ? true : false);
      }
    );
    return () => {
      authListener?.unsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
