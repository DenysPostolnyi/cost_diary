import {createStore} from 'redux';
import {configureStore, createSlice} from "@reduxjs/toolkit";
import counter from "../components/Counter";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";






// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// };
//

// const store = createStore(counterReducer);


const store = configureStore({
    reducer: {
        counter: counterSlice,
        authentication: authSlice
    }
    // reducer: counterSlice.reducer
});
export default store;
