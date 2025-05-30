import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import { ThemeProvider } from "../themeContext/ThemeContext";
import bgImage from "../assets/bgMain.jpg";

const Home = () => {
  return (
    <ThemeProvider>
      <div
        className="flex min-h-screen bg-gray-100"
        style={{
          backgroundImage: `url(../assets/bgMain2.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Sidebar className="w-72" /> {/* Sidebar with fixed width */}
        <Dashboard className="flex-grow" />
        {/* Dashboard takes remaining space */}
      </div>
    </ThemeProvider>
  );
};

export default Home;
