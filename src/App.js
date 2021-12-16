import { Route, Switch } from 'react-router-dom';

import  { AuthProvider } from './contexts/AuthContext';
import './App.css';

import Footer  from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Logout from './components/Auth/Logout/Logout';
import Posts from './components/Post/Posts/Posts';
import PostCreate from './components/Post/PostCreate/PostCreate';
import PostDetails from './components/Post/PostDetails/PostDetails';
import PostEdit from './components/Post/PostEdit/PostEdit';
import MyPosts from './components/Post/MyPosts/MyPosts';
import Guard from './hoc/guard';
import Home from './components/Home/Home';

function App() { 
  
  return (
    
<AuthProvider>
    <div className="App">
      <Header />
      
          <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/posts" exact component={Posts}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/details/:id" component={PostDetails}/>
          <Route path="/create" component={Guard(PostCreate)}/>
          <Route path="/edit/:id" component={Guard(PostEdit)}/>
          <Route path="/my-posts" component={Guard(MyPosts)}/>
         </Switch>

       <Footer/>
    </div>
 </AuthProvider>
 
  );
}

export default App;
