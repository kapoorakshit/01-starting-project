import classes from './Counter.module.css';

import { useSelector,connect,useDispatch } from 'react-redux';

import { counterActions } from '../store';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter.counter);
 const show=useSelector(state=>state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
const incrementHandler=()=> {
dispatch(counterActions.increment(10));
}
const decrementhandler=()=> {
  dispatch(counterActions.decrement());

}
const increaseByfive=()=> {
  dispatch({type: 'increaseby5'});
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        show&&<div className={classes.value}>{counter}</div>
      }
      
      <div className='counter'>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementhandler}>Decrement</button>
        <button onClick={increaseByfive}>Increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;



// import React, { Component } from 'react';
// import classes from './Counter.module.css';
// import { connect } from 'react-redux';

// class Counter extends Component {
//   render() {
//     const { counter, incrementHandler, decrementHandler, toggleCounterHandler } = this.props;
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{counter}</div>
//         <div className='counter'>
//           <button onClick={incrementHandler}>Increment</button>
//           <button onClick={decrementHandler}>Decrement</button>
//         </div>
//         <button onClick={toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     incrementHandler: () => dispatch({ type: 'increment' }),
//     decrementHandler: () => dispatch({ type: 'decrement' }),
//     toggleCounterHandler: () => {} // You can define toggleCounterHandler functionality here if needed
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

