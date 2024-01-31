"use client";


import classNames from "@/hooks/classnames";
import styles from "./toast.module.css";
import Icon from "../Icon";
import { useEffect } from "react";


export default function Toast({ error=null, changeError, visible = false, message, toggleVisibility }) {
    useEffect(() => {
        if(visible == true) {
            setTimeout(() => {
                changeError(false);
                toggleVisibility(false);
            }, 5000);
        }
    }, [visible, toggleVisibility, changeError]);
    
    return (
        <>
        {visible &&
            <div className={classNames(styles.toast, error ? styles.error:  styles.success)}>
                <a>{error ? error: message}</a>
                <Icon size={20} name="close" onClick={() => toggleVisibility(false)}/>
            </div>
        }
        </>
    )

}