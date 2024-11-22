import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Explore from "./components/Explore";

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/explore-tours' element={<Explore />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
