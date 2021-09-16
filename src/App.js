import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavbarMain  from './components/NavbarMain';
import HomePage from './components/HomePage';
import SetupForm  from './components/SetupForm';

import { DAppProvider, useConnect } from './dapp/dapp'
import { APP_NAME, NETWORK } from './dapp/default';



function App() {
  return (
    <DAppProvider appName={APP_NAME}>
      <React.Suspense fallback={null}>
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
    </React.Suspense>
    </DAppProvider>
      );
}

export default App;
