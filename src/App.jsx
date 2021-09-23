import 'styles/App.css';
import Index from 'pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BorderCollieInfoPage from 'pages/borderCollie';

function App() {
  return (
    <div classNameName="App">
        <Router>
            <Switch>
                <Route path='/BorderCollieInfoPage'>
                    <BorderCollieInfoPage />
                </Route>
                <Route path=''>
                    <Index />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}


export default App;
