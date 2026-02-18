import './App.css';
import SignIn from './components/SignIn';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatScreen from './components/ChatScreen';
import SignUp from './components/SignUp';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useSnackbar } from 'notistack';
import Profile from './components/Profile';
import Settings from './components/Settings';


function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const shouldShowSidebar = () =>
    location.pathname !== '/' && location.pathname !== '/signup';



  useEffect(() => {
    const cookie = new Cookies();

    if (!cookie.get('token') && location.pathname !== '/' && location.pathname !== '/signup') {
      navigate("/");
    }

    if (cookie.get('token') && (location.pathname === '/' || location.pathname === '/signup')) {
      enqueueSnackbar("User already logged in", { variant: "info" });
      navigate("/dashboard")
    }
  }, [location.pathname, enqueueSnackbar, navigate]);

  return (
    <>
      {shouldShowSidebar() && <Sidebar />}

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<ChatScreen />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
