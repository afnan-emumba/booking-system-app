import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
