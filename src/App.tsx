import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Tours from "./components/Tours";
import TourDetail from "./components/TourDetail";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/explore-tours' element={<Explore />} />
          <Route path='/tours' element={<Tours />} />
          <Route path='/tours/:city' element={<Tours />} />
          <Route path='/tour/:id' element={<TourDetail />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
