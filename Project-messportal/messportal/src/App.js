import logo from './logo.svg';
import './App.css';
import WelcomeComp from './Components/WelcomeComp';
import RoutingComp from './Components/RoutingComp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import SignUp from './Components/SignUp';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = localStorage.getItem("user");

    // If the token/email does not exist, mark the user as logged out
    if (!user) {
      setLoggedIn(false)
      return
    }else{
      setLoggedIn(true)
      setEmail(user);
    }

  }, [])
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
        <Layout  email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/login" element={<Login  />} />
            <Route path="/signup" element={<SignUp  />} />
            <Route path="/home" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          </Routes>
        </Layout>
        </BrowserRouter>
      </div>
      {/* ); */}


    </div>
  );
}

export default App;
