import styles from "./button.module.css"

function Button({ type, children }) {
    return (
        <div className={type == "primary" ? styles.primary : styles.secondary}>
            <a>{children}</a>
        </div>
    )
}

Button.defaultProps = {
    type: "primary"
}

export default Button;