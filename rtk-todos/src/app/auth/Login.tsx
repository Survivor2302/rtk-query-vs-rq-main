import { AuthCredentials, authApi } from "../../lib";
function Login() {
  const [login] = authApi.useSignInMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const authCredentials: AuthCredentials = {
      email,
      password,
    };

    login(authCredentials);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" />
        <input type="text" name="password" />
        <input type="submit" />
      </form>
    </div>
  );
}
export default Login;
