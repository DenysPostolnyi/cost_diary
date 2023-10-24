import module from "./ErrorModal.module.css";

const ErrorModal = props => {
    return (<div onClick={props.onClose}>
        <div className={module.backdrop}>
        </div>
        <div className={module.modal}>
            <header className={module.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={module.content}>
                <p>{props.message}</p>
            </div>
            <footer className={module.actions}>
                <button onClick={props.onClose}>Close</button>
            </footer>
        </div>

    </div>);
}

export default ErrorModal;