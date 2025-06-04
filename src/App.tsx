import Layout from 'components/Layout';
import CreateOrderPage from 'pages/CreateOrder';
import CreateServicePage from 'pages/CreateService';
import LoginPage from 'pages/Login';
import OrdersPage from 'pages/Orders';
import ProfilePage from 'pages/Profile';
import RegistrationPage from 'pages/Registration';
import ServicePage from 'pages/Services';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Navigate replace to='/profile' />} path='/' />

        <Route element={<LoginPage />} path='/login' />
        <Route element={<RegistrationPage />} path='/register' />

        <Route element={<Layout />}>
          <Route element={<ProfilePage />} path='/profile' />
          <Route element={<OrdersPage />} path='/orders' />
          <Route element={<CreateOrderPage />} path='/createOrder' />
          <Route element={<ServicePage />} path='/service' />
          <Route element={<CreateServicePage />} path='/createService' />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
