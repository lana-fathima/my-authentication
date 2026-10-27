import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/Context";

function Login() {
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (name.trim() && email.trim() && pass.trim()) {
      setUser({ name: name.trim(), email: email.trim() });
      navigate("/home");
    } else {
      alert("Please fill in all the fields.");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Login;