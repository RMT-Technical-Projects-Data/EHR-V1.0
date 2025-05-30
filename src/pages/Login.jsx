import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import bg from '/src/assets/bg-ehr-v1.jpg';
import logo from "/src/assets/TeleHealth_Logo(1).png";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Admin" && password === "123") {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100 p-4"
        //  style={{ backgroundImage: `url(${bg})` }}
        style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #013550 0%, #00b6b6 100%)',
      }}
    >
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-md p-6 shadow-2xl bg-white/100 backdrop-blur-md border border-white/30 rounded-2xl">
         <img
    src={logo}
    alt="Logo"
    className="mx-auto mb-4 w-24 h-auto"
  />
        <h2 className="text-2xl font-bold mb-6 text-left">Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label className="block mb-2 text-sm font-bold">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00b6b6] text-white mt-6 p-2 rounded hover:bg-[#006973] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
