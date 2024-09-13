import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home';
import SignUpForm from './Components/signup/SignUp.js'
function App() {
  return (
    // <BrowserRouter>
      <div className="App">
        {/* <Routes>
          <Route path="/src/expr.js" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes> */}
        <SignUpForm />
      </div>
    // </BrowserRouter>
  );
}

export default App;