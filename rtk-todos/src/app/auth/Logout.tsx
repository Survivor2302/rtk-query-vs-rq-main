import { authApi } from "../../lib";
function SignOut() {
  const [signOut] = authApi.useSignOutMutation();

  return <button onClick={signOut}>Sign Out</button>;
}
export default SignOut;
