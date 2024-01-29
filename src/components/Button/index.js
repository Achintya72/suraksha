import classNames from "@/hooks/classnames";
import styles from "./button.module.css"

function Button({ type="primary", iconOnly=false, children, ...props }) {
    return (
        <div {...props} className={classNames(type == "primary" ? styles.primary : styles.secondary, iconOnly ? styles.iconOnly: styles.regular)}>
            {children}
        </div>
    )
}

export default Button;