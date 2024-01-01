import {useState} from "react";
import Input from "./Input.jsx";
import {hasMinLength, isEmail, isNotEmpty} from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";

export default function StateLogin() {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [enteredValues, setEnteredValues] = useState({
    //     email: '',
    //     password: ''
    // });
    // const [didEdit, setDidEdit] = useState({
    //     email: false,
    //     password: false
    // });

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailIsInvalid
    } = useInput('', (value) => {
        // ...
        return !isEmail(value) && !isNotEmpty(value);
    });
    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordIsInvalid
    } = useInput('', (value) => !hasMinLength(value, 6));

    function handleSubmit(event) {
        event.preventDefault();

        if (emailIsInvalid || passwordIsInvalid){
            return;
        }
        console.log("Sent");
    }

    // function handleEmailChange(event) {
    //     setEnteredEmail(event.target.value)
    // }
    //
    // function handlePasswordChange(event) {
    //     setEnteredEmail(event.target.value)
    // }

    // const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
    // const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

    // function handleInputChange(identifier, event) {
    //     setEnteredValues(prevState => ({
    //         ...prevState,
    //         [identifier]: event.target.value
    //     }));
    //
    //     setDidEdit(prevState => ({
    //         ...prevState,
    //         [identifier]: false
    //     }))
    // }
    //
    // function handleInputBlur(identifier) {
    //     setDidEdit(prevState => ({
    //         ...prevState,
    //         [identifier]: true
    //     }));
    // }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleEmailChange}
                    value={emailValue}
                    onBlur={handleEmailBlur}
                    error={emailIsInvalid && 'Enter valid email'}
                />
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    onBlur={handlePasswordBlur}
                    error={passwordIsInvalid && 'Enter valid password'}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button type="submit" className="button">Login</button>
            </p>
        </form>
    );
}
