import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavbarMain  from './components/NavbarMain';
import HomePage from './components/HomePage';
import SetupForm  from './components/SetupForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Route 
          path='/'
          exact
          render={(props) => (
            <>
              <NavbarMain />
              <HomePage />
            </>
          )} />
        <Route 
          path='/setup'
          exact
          render={(props) => (
            <>
              <NavbarMain />
              <SetupForm />
            </>
          )} />
        
        
      </Router>
    </div>
  );
}

export default App;
