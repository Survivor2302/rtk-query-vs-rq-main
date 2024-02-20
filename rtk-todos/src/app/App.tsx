import { Providers } from "../lib/providers";
import { SupabaseAuthProvider } from "../lib/supabaseAuthGuard";
import Logout from "./auth/Logout";
import TodoApp from "./todo/Todo";

function App() {
  return (
    <Providers>
      <SupabaseAuthProvider>
        <TodoApp />
        <Logout />
      </SupabaseAuthProvider>
    </Providers>
  );
}

export default App;
