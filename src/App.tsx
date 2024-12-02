import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Explore from "./components/explore/Explore";
import Tours from "./components/tours/Tours";
import TourDetail from "./components/tourDetail/TourDetail";
import ErrorPage from "./components/errorPage/ErrorPage";
import BookTour from "./components/bookTour/BookTour";
import MyTours from "./components/myTours/MyTours";

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
    </div>
  );
}

export default App;
