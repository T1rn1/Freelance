import LoginPage from 'pages/Login';
import RegistrationPage from 'pages/Registration';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Navigate replace to='/login' />} path='/' />
        <Route element={<LoginPage />} path='/login' />
        <Route element={<RegistrationPage />} path='/register' />
      </Routes>
    </Router>
  );
};

export default App;
