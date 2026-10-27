import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/Context";

function Home() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  function logout() {
    setUser(null);
    navigate("/");
  }

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>

      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default Home;
