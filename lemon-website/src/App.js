import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><HomePage /><Footer/></>,
    },
    {
      path: "/booking",
      element: <><Header /><BookingPage /><Footer/></>,
    },
    {
      path: "/confirmedBooking",
      element: <><Header /><ConfirmedBooking /><Footer/></>
    },
  ]);



  return (


    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
