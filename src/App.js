import './index.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './login';
import Mainpage from './mainpage';
import Dashboard from './dashboard';
import BluePage from './bluepages';
import OnboardingSeparation from './joinleave';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route element={<Mainpage/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/bluepage' element={<BluePage/>}/>
            <Route path='/onboardingseparation' element={<OnboardingSeparation/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
