import 'styles/App.css';
import Index from 'pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import BorderCollieInfoPage from 'pages/borderCollie';
import Pastoraleman from 'pages/Pastoraleman';
import Cavalierking from 'pages/Cavalierking';
import Bulldogs from 'pages/Bulldogs';
import Layout from 'layouts/Layout';
import Goldenretriver from 'pages/Goldenretriver';


function App() {
  return (
    <div classNameName="App">
        <Router>
          <Layout>
            <Switch>
                  <Route path='/BorderCollieInfoPage'>
                      <BorderCollieInfoPage />
                  </Route>
                  <Route path='/Pastoraleman'>
                      <Pastoraleman />
                  </Route>
                  <Route path='/Goldenretriver'>
                      <Goldenretriver />
                  </Route>
                  <Route path='/Cavalierking'>
                      <Cavalierking />
                  </Route>
                  <Route path='/Bulldogs'>
                      <Bulldogs />
                  </Route>
                  <Route path=''>
                      <Index />
                  </Route>
            </Switch>
          </Layout>
        </Router>
    </div>
  );
}


export default App;
