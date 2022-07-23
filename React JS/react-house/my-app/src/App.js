import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MainPage from './pages/MainPage';
import LoginPages from './pages/LoginPages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoardPage from './pages/DashBoardPage';
import NotFoundPage from './pages/notFoundPage';
import HousePage from './pages/HousePage';
import LastPage from './pages/LastPage';
 
function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPages />} />
          <Route path='/dashboard' element={<DashBoardPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/house/:ID' element={<HousePage />} />
          <Route path='/last' element={<LastPage />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
