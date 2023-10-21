import Header from "./components/Header/Header";
import NewInvestmentForm from "./components/NewInvestment/NewInvestmentForm";
import Table from "./components/Table/Table";
import {useState} from "react";

function App() {
    const [userInput, setUserInput] = useState(null);
    const calculateHandler = (userInput) => {
        setUserInput(userInput);
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

    return (
        <div>
            <Header/>

            <NewInvestmentForm onCalculate={calculateHandler}/>
            {!userInput && <p>No investment calculated</p>}
            {userInput && <Table data={yearlyData} initialInvestement={userInput['current-savings']}/>}
            <Table/>
        </div>
    );
}

export default App;
