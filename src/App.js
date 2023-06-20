import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp;

function App() {

    useEffect(()=>{
        tg.ready()
    },[])

    const OnClose = () => {
        tg.close();
    }

  return (
    <div className="App">
      <button onClick={OnClose}>Close</button>
    </div>
  );
}

export default App;
