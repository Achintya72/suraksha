import styles from "./input.module.css";

function Input(props) {
    return (
        <input {...props} className={styles.input}/>
    )
}

export default Input;