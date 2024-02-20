import { ReactElement, createContext, useEffect, useState } from "react";
import Login from "../app/auth/Login";
import { supabase } from "./supabase";
import { Session } from "@supabase/supabase-js";

interface SupabaseAuthGuardProps {
  children: ReactElement | ReactElement[];
}

const SupabaseAuthContext = createContext<null | Session>(null);
function SupabaseAuthProvider({
  children,
}: SupabaseAuthGuardProps): ReactElement | null {
  const [session, setSession] = useState<null | Session>(null);
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!session) {
    return <Login />;
  }

  // User is authenticated, render the children components
  return (
    <SupabaseAuthContext.Provider value={session}>
      {children}
    </SupabaseAuthContext.Provider>
  );
}

export { SupabaseAuthContext, SupabaseAuthProvider };
