import './App.css';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/booking",
      element: <BookingPage />,
    },
    {
      path: "/confirmedBooking",
      element: <ConfirmedBooking />
    },
  ]);



  return (


    <>
      <Header />
      <nav>
        <ul>
          <li>
            Item 1
          </li>
          <li>
            Item 2
          </li>
          <li>
            Item 3
          </li>
        </ul>
      </nav>
      <main>
        <RouterProvider router={router} />

      </main>
      <footer>
        My FOOTER
      </footer>
    </>
  );
}

export default App;
