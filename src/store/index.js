import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit'
const initialState = { counter: 0, showCounter: true,isAuthenticated: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state, action) {
            state.counter += action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        increaseBy5(state) {
            state.counter += 5;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});
const initialAuthState={
    isAuthenticated: false
}
const authSlice=createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated=true;
        },
        logout(state) {
            state.isAuthenticated=false;
        }
    }
});
const store = configureStore({
    reducer: {counter: counterSlice.reducer,auth: authSlice.reducer}
});
export const authActions=authSlice.actions
export const counterActions = counterSlice.actions;
export default store;

// const initialState={counter: 0,showCounter: true}
// const counterSlice=createSlice({
//     name: 'counter',
//     initialState: 'initialState',
//     reducers: {
//    increment(state,action) {
//     state.counter+=action.payload;

//    },
//    decrement(state) {
//     state.counter--;
//    },
//    increaseby5(state) {

//    },
//    toggle(state) {
//     state.showCounter=!state.showCounter;
//    }
//     }
// })
// const countReducer=(state=initialState,action) => {
//     if(action.type==='increment') {
//         return {
//             counter: state.counter+action.amount,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type==="decrement") {
//         return {
//             counter: state.counter-1
//         };
    
//     }
//     if(action.type==="increaseby5") {
//         return {
//             counter: state.counter+5
//         };
    
//     }
//     if(action.type==="toggle") {
//         return {
//            showCounter: !state.showCounter,
//            counter: state.counter
//         };
    
//     }
//     return state;
// }
// counterSlice.actions.toggle()
// const store=configureStore({
//     reducer: counterSlice.reducer
// })
// export const counterActions=counterSlice.actions;
// const store=createStore(counterSlice.reducer);
// export default store;