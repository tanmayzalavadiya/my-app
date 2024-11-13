import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpForm";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<SignInPage />} /> {/* Default to SignInPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
