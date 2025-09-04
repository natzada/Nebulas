import './App.css';
// import Profile from './components/Profile';
import Header from './components/Header';
import VerticalBar from './components/VerticalBar';
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
      </div>  
    </div>
  );
}

export default App;