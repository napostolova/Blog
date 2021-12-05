import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Login from './components/Login/Login';
import PostCreate from './components/PostCreate/PostCreate';
import Register from './components/Register/Register';
import PostDetails from './components/PostDetails/PostDetails';
import PostEdit from './components/PostEdit/PostEdit';


function App() {
  return (
    <div className="App">
      <Header></Header>
    

          <Switch>
           <Route path="/" exact component={Posts}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/create" component={PostCreate}/>
          <Route path="/details/:id" component={PostDetails}/>
          <Route path="/edit/:id" component={PostEdit}/>
         </Switch>


         <Footer/>


    </div>
  );
}

export default App;
