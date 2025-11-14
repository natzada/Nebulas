import "./App.css";
// import Chatbot from './components/ChatBot';
// import Profile from './components/Profile';
import Header from "./components/Header";
import NewPharm from "./components/NewPharm";
import VerticalBar from "./components/VerticalBar";
// import Auth from "./pages/Auth";

// import Auth from './pages/Auth';

function App() {
  return (
    <div className="flex h-screen bg-primary">
      {/* <div>
        <Auth/>
      </div> */}
      <VerticalBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex justify-start items-start w-5xl h-screen ml-20 mt-20 mb-20 rounded-3xl">
          <NewPharm />
        </div>
      </div>
      {/* <Chatbot /> */}
    </div>
  );
}

export default App;
