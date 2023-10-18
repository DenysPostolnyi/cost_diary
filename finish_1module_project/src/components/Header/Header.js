import logo from "../../assets/investment-calculator-logo.png";
import module from "../../index.module.css"

const Header = () => {
    return (
        <header className={module.header}>
            <img src={logo} alt="logo"/>
            <h1>Investment Calculator</h1>
        </header>
    );
}

export default Header;