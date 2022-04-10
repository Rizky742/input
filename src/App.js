import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Register from './page/Register';
import Login from './page/login';
import Dashboard from './page/Dashboard';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
