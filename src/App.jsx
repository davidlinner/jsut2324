import './App.css';
import {Route, Link} from 'wouter';
import Home from './views/Home/Home';
import SignUp from "./views/SignUp/SignUp.jsx";
import CardList from "./views/CardList/CardList.jsx";
import Counter from "./views/Counter/Counter.jsx";

function App() {
  return <>
  <nav>
    <Link href='/'>Home</Link>
    <Link href='/sign-up'>Sign Up Form</Link>
    <Link href='/card-list'>Card List</Link>
    <Link href='/counter'>Counter</Link>
  </nav>
    <Route path='/' component={Home}/>
    <Route path='/sign-up' component={SignUp}/>
    <Route path='/card-list' component={CardList}/>
    <Route path='/counter' component={Counter}/>
  </>
}

export default App
