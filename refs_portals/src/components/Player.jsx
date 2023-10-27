import {useState, useRef} from "react";

export default function Player() {
    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    function handleChanges(event) {
        setSubmitted(false);
        setEnteredPlayerName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setEnteredPlayerName(playerName.current.valueOf());
        playerName.current.value = ''
    }

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
            <p>
                <input ref={playerName} onChange={handleChanges} type="text"/>
                <button onClick={handleSubmit}>Set Name</button>
            </p>
        </section>
    );
}
