import classes from './Auth.module.css';
import { UseDispatch, useDispatch } from 'react-redux';
import { authActions } from '../store/index.js';

const Auth = () => {
  const dispatch=useDispatch();
  const loginHandler=(event)=> {
event.preventDefault();
dispatch(authActions.login());

  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Loginn</button>
          <h1>hfbd</h1>
        </form>
      </section>
    </main>
  );
};

export default Auth;
