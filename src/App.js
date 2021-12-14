import { Route, Switch } from 'react-router-dom';

import  { AuthProvider } from './contexts/AuthContext';
import './App.css';

import Footer  from './components/Footer/Footer';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Login from './components/Login/Login';
import PostCreate from './components/PostCreate/PostCreate';
import Register from './components/Register/Register';
import PostDetails from './components/PostDetails/PostDetails';
import PostEdit from './components/PostEdit/PostEdit';
import MyPosts from './components/MyPosts/MyPosts';
import Logout from './components/Logout/Logout';

function App() { 
  
  return (
    
<AuthProvider>
    <div className="App">
      <Header />
      
          <Switch>
           <Route path="/" exact component={Posts}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/details/:id" component={PostDetails}/>
          <Route path="/create" component={PostCreate}/>
          <Route path="/edit/:id" component={PostEdit}/>
          <Route path="/my-posts" component={MyPosts}/>
                 
         </Switch>


         <Footer/>

    </div>
 </AuthProvider>
 
  );
}

export default App;
