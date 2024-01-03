import classes from './Counter.module.css';
import {useSelector, useDispatch, connect} from "react-redux";
import {Component} from "react";
import {counterActions} from "../store/counter-slice";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);

    const incrementsHandler = () => {
        dispatch(counterActions.increment());
    };
    const decrementsHandler = () => {
        dispatch(counterActions.decrement());
    };
    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementsHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementsHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};


// const Counter = () => {
//     const dispatch = useDispatch();
//     const counter = useSelector(state => state.counter);
//     const show = useSelector(state => state.showCounter);
//
//     const incrementsHandler = () => {
//         dispatch({type: 'increment'});
//     };
//     const decrementsHandler = () => {
//         dispatch({type: 'decrement'});
//     };
//     const increaseHandler = () => {
//         dispatch({type: 'increase', amount: 5});
//     };
//
//     const toggleCounterHandler = () => {
//         dispatch({type: 'toggle'});
//     };
//
//     return (
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             {show && <div className={classes.value}>{counter}</div>}
//             <div>
//                 <button onClick={incrementsHandler}>Increment</button>
//                 <button onClick={increaseHandler}>Increase by 5</button>
//                 <button onClick={decrementsHandler}>Decrement</button>
//             </div>
//             <button onClick={toggleCounterHandler}>Toggle Counter</button>
//         </main>
//     );
// };

// class Counter extends Component {
//     incrementsHandler = () => {
//         this.props.increment();
//     };
//     decrementsHandler = () => {
//         this.props.decrement();
//     };
//
//     toggleCounterHandler = () => {
//     };
//
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementsHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementsHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     };
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({type: 'increment'}),
//         decrement: () => dispatch({type: 'decrement'})
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
