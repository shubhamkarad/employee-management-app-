import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListEmployeeComponent from './components/listEmployeeComponent';
import createEmployeeComponent from './components/createEmployeeComponent';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import UpdateEmployeeComponent from './components/updateEmployeeComponent';
import ViewComponent from './components/viewComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
    <div className="container">
      <Switch>
        <Route path="/" exact component={ListEmployeeComponent}></Route>
        <Route path="/employees" component={ListEmployeeComponent}></Route>
        <Route path="/add-employee" component={createEmployeeComponent}></Route>
        <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
        <Route path="/view-employee/:id" component={ViewComponent}></Route>
        {/*  id will change dynamically */}
      </Switch>

      {/* <ListEmployeeComponent/> */}
    </div>
    <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
