import module from "../../index.module.css"

const NewInvestmentForm = () => {
    return (
        <form className={module.form}>
            <div className={module.inputGroup}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings"/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution"/>
                </p>
            </div>
            <div className={module.inputGroup}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return"/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration"/>
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
    );
}

export default NewInvestmentForm;