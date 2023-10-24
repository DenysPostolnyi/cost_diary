import module from "./NewInvestement.module.css"
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const initialUserInput = {
    'current-savings': 0,
    'yearly-savings': 0,
    'expected-interest': 0,
    'duration': 0
}

const NewInvestmentForm = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);
    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
        resetHandler(event);
    }

    const resetHandler = (event) => {
        event.preventDefault();
        setUserInput(initialUserInput);
    }

    const inputChangeHandler = (input, value) => {
            setUserInput((prevInput) => {
                return {
                    ...prevInput,
                    [input]: +value,
                };
            });
    };

    return (
        <div>
            <form className={module.form} onSubmit={submitHandler} onReset={resetHandler}>
                <div className={module['input-group']}>
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="current-savings"
                               value={userInput['current-savings'] ? userInput['current-savings'].toString() : ''}
                               onChange={(event) => {
                                   inputChangeHandler('current-savings', event.target.value)
                               }}/>
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearly-contribution"
                               value={userInput['yearly-savings'] ? userInput['yearly-savings'].toString() : ''}
                               onChange={(event) => {
                                   inputChangeHandler('yearly-savings', event.target.value)
                               }}/>
                    </p>
                </div>
                <div className={module['input-group']}>
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input type="number" id="expected-return"
                               value={userInput['expected-interest'] ? userInput['expected-interest'].toString() : ''}
                               onChange={(event) => {
                                   inputChangeHandler('expected-interest', event.target.value)
                               }}/>
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="duration"
                               value={userInput['duration'] ? userInput['duration'].toString() : ''}
                               onChange={(event) => {
                                   inputChangeHandler('duration', event.target.value)
                               }}/>
                    </p>
                </div>
                <p className={module.actions}>
                    <button type="reset" className={module.buttonAlt}>
                        Reset
                    </button>
                    <button type="submit" className={module.button}>
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    );
}

export default NewInvestmentForm;