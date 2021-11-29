import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import {createBrowserHistory} from 'history'

import Menu from './pages/Menu/Menu';
import Payment from './pages/Payment/Payment';
import AdminPage from './pages/AdminPage/AdminPage';

import MenuTemplate from './templates/MenuTemplate/MenuTemplate';
import {AdminTemplate} from './templates/AdminTemplate/AdminTemplate';
import QuanLyFood from './pages/AdminPage/QuanLyFood/QuanLyFood';
import UpdateFood from './pages/AdminPage/QuanLyFood/UpdateFood';
import AddFood from './pages/AdminPage/QuanLyFood/ThemFood';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
        <MenuTemplate exact path="/" component={Menu}/>
        <MenuTemplate exact path="/payment" component={Payment}/>
        <AdminTemplate exact path="/admin" component={AdminPage}/>
        <AdminTemplate exact path="/admin/food" component={QuanLyFood}/>
        <AdminTemplate exact path="/admin/updatefood/:id" component={UpdateFood}/>
        <AdminTemplate exact path="/admin/addfood" component={AddFood}/>
      </Switch>
    </Router>
  );
}

export default App;
