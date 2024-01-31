
import classNames from "@/hooks/classnames";
import styles from "./toast.module.css";
import Icon from "../Icon";


export default function Toast({ type = "success", visible = false, message, toggleVisibility }) {
    return (
        <>
        {visible &&
            <div className={classNames(styles.toast, type == "success" ? styles.success : styles.error)}>
                <a>{message}</a>
                <Icon size={20} name="close" onClick={() => toggleVisibility(false)}/>
            </div>
        }
        </>
    )

}