import Counter from './components/Counter';
import Header from './components/Header';
import { Fragment } from 'react';
import { UseSelector, useSelector } from 'react-redux';
import Auth from './components/Auth.js';
import UserProfile from './components/UserProfile.js';
function App() {
  const isAuth=useSelector(state=>state.auth.isAuthenticated)
  return (
    <>
    <Header/>
    {!isAuth&& <Auth/>}
   {isAuth&&    <Counter />}

    </>
   
  );
}


export default App;
