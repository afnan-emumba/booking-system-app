import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Tours from "./components/Tours";
import TourDetail from "./components/TourDetail";
import ErrorPage from "./components/ErrorPage";
import BookTour from "./components/BookTour";
import MyTours from "./components/MyTours";

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
          <Route path='/book-tour/:id' element={<BookTour />} />
          <Route path='/my-tours/' element={<MyTours />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
      <SpeedInsights />
    </div>
  );
}

export default App;
