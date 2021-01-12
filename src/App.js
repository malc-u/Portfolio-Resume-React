import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import './App.css';

function App() {
  return (
    <>   
      <div className="App container-fluid px-0">
        <Sidebar />
        <Homepage />
      </div>
    </>
  );
}

export default App;
