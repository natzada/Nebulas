import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NewPharm from "./components/NewPharm";
import VerticalBar from "./components/VerticalBar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div
      className={`
        flex h-screen transition-all duration-500 ease-in-out
        ${isDarkMode ? "bg-[#464646] text-[#cecece]" : "bg-primary text-text1"}
      `}
    >
      {/* Passa o estado e a função pro sidebar */}
      <VerticalBar />

      <div className="flex-1 flex flex-col mt-5">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <div
          className={`
            flex justify-start items-start w-5xl h-screen ml-20 mt-10 mb-20 
            rounded-3xl p-8 overflow-y-auto transition-all duration-500 
          `}
        >
          <NewPharm isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;