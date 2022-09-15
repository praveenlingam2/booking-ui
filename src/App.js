
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

import RegisterPage from "./pages/RegisterPage"

import HotelPage from './pages/hotelPageView/HotelPage';
import AddHotel from './pages/hotelPageView/AddHotel';
import ProfilePage from './pages/hotelPageView/ProfilePage';
import ViewHistory from './pages/hotelPageView/ViewHistory';
import HotelModify from './pages/hotelPageView/HotelModify';

import AdminView from './pages/adminPage/AdminView';
import ProtectedRoutes from './utils/ProtectedRoutes';
import { UserContext } from "./context/UserContext";
import { useContext } from 'react';
import BookingComponent from '../src/components/hotel/BookingComponent';
import ConfirmCard from './bookingPage/ConfirmCard';
import HotelViewComponent from '../src/components/hotel/HotelViewComponent';
import CustomerViewPage from './pages/CustomerViewPage';
import EditProfile from './components/login/EditProfile';
import UserHistory from "./components/login/UserHistory";
import UserProfile from './components/login/UserProfile';
import CardFinished from './components/hotel/CardFinished';



function App() {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (

    <Routes>
      <Route path="/" element={< HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* <Route element={<ProtectedRoutes auth={loggedInUser.isLoggedIn} />}> */}

      <Route path="/admin" element={<AdminView />} />

      <Route path="/HotelPage" element={<HotelPage />} />
      <Route path="/bookingPage" element={<BookingComponent />} />
      <Route path="/confirm" element={<ConfirmCard />} />
      <Route path="/hotelList" element={<HotelViewComponent />} />
      <Route path="/addhotel" element={<AddHotel />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/viewhistory" element={<ViewHistory />} />
      <Route path="/modify" element={<HotelModify />} />
      <Route path="/card" element={<CardFinished/>} />



      <Route path="/userEdit" element={<EditProfile />} />
      <Route path="/userHistory" element={<UserHistory />} />
      <Route path="/userProfile" element={<UserProfile />} />
      <Route path="/customerPage" element={<CustomerViewPage />} />


      {/* </Route> */}
    </Routes>

  );
}

export default App;
