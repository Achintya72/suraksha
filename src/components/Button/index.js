import styles from "./button.module.css"

function Button({ type="primary", children }) {
    return (
        <div className={type == "primary" ? styles.primary : styles.secondary}>
            <a>{children}</a>
        </div>
    )
}

export default Button;