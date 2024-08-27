
import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialCounterState = { counter: 0, showCounter: true };

// createSlice automatically creates unique action identifiers for our different reducers
const counterSlice = createSlice({        // using return value of calling return createslice
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    //a map of all the reducers this state slice needs
    increment(state) {
      state.counter = state.counter + 2;
    },
    decrement(state) {
      state.counter = state.counter - 2;
    }, // every method automatically receives the latest state, these methods will be called by redux
    // for us and they will receive the current state;   these methods are called bases on which method was trigerred
    increase(state, action) {
        state.counter = state.counter + action.payload
    },
    decrease(state, action){
        state.counter = state.counter - action.payload
    },
    toggleCounter(state) {
        state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 2,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 2,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'decrease') {
//     return {
//       counter: state.counter - action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterSlice.reducer);    // only one reducer can be passed to createStore, with multiple slices we have multiple reducers which we access with .reducer on the different slices

// configureStore like createStore  creates a store but makes merging multiple reducers into one reducer easier there after



const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer}
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
