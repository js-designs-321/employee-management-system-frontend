import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
                <Route path="/" exact element = {<ListEmployeeComponent />} />
                <Route path="/employees" element={<ListEmployeeComponent />} />
                <Route path="/add-employee" element={<CreateEmployeeComponent />} />
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
