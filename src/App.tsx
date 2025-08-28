import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import VerticalBar from './components/VerticalBar';
import Auth from './pages/Auth';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <div>
        <Auth/>
      </div>

      {/* <VerticalBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          <Profile />
          {/* Add pharmacy cards or other content here */}
        {/* </div>
      </div> */} 
    </div>
  );
}

export default App;