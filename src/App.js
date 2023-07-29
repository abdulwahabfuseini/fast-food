import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PageContent from "./Pages/PageContent";
import StartPage from "./Pages/StartPage";
import Login from "./Pages/Account/Login";
import Aos from "aos";
import "aos/dist/aos.css";
import LoadingRedirect from "./Pages/LoadingRedirect";

Aos.init();

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="login" element={<Login />} />
            <Route path="loadingRedirect" element={<LoadingRedirect />} />
            <Route exact path="pageContent" element={<PageContent />} />
           
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
