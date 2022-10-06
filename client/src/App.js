import './App.css';
import SignUp from './component/SignUp'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './component/Login';
import Home from './component/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/signup'element={<SignUp />} />
          <Route path='/login'element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
