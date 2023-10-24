import Header from "./components/Header/Header";
import NewInvestmentForm from "./components/NewInvestment/NewInvestmentForm";
import Table from "./components/Table/Table";
import {useState} from "react";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
    const [userInput, setUserInput] = useState(null);
    const [error, setError] = useState(null);

    const calculateHandler = (userInput) => {
        if (userInput['current-savings'] instanceof Number) {
            setUserInput(userInput);
        } else {
            setError({
                title: "Incorrect input",
                message: "Enter number"
            });
        }
    };

    const yearlyData = [];

    if (userInput) {
        let currentSavings = +userInput['current-savings'];
        const yearlyContribution = +userInput['yearly-savings'];
        const expectedReturn = +userInput['expected-interest'] / 100;
        const duration = +userInput['duration'];

        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
    }

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal onClose={errorHandler} title={error.title} message={error.message}/>}

            <Header/>

            <NewInvestmentForm onCalculate={calculateHandler}/>
            {!userInput && <p style={{textAlign: 'center'}}>No investment calculated</p>}
            {userInput && <Table data={yearlyData} initialInvestement={userInput['current-savings']}/>}
            <Table/>
        </div>
    );
}

export default App;
