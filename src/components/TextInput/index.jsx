import styles from "./input.module.css";

function Input({ 
    placeholder = "Name"
}) {
    return (
        <input placeholder={placeholder} className={styles.input}/>
    )
}

export default Input;