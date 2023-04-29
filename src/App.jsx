
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';
import SinglePage from './pages/SinglePage';

function App() {

  const { isLogin } = useContext(LoginContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/single/:id' element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
