import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>
    

          <Switch>
           <Route path="/" exact component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>

         </Switch>


    </div>
  );
}

export default App;
