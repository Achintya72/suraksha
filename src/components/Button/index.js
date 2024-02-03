"use client";
import classNames from "@/hooks/classnames";
import styles from "./button.module.css"
import useRedirectFunction from "@/hooks/useRedirectFunction";
import { useState } from "react";

const colorStyles = {
    primary: {
        noSelect: styles.primary,
        unselected: styles.primary,
        selected: styles.primarySelected
    },
    secondary: {
        noSelect: styles.secondary,
        unselected: styles.secondary,
        selected: styles.secondarySelected
    }
}

function Button({ type="primary", selectable = false, selectText = "", iconOnly=false, children, redirect, onClick, ...props }) {
    const redirectFunction = useRedirectFunction(redirect);
    const [sel, changeSel] = useState(false);

    const handleClick = () => {
        if(selectable) {
            changeSel(prev => !prev);
        }
        if(redirect != null && !sel) {
            redirectFunction();
        } else if(onClick != null){
            onClick();
        }
    }

    const colorStyle = colorStyles[type][selectable ? (sel ? "selected": "unselected") : "noSelect"];
    
    return (
        <button onClick={handleClick} {...props} className={classNames(colorStyle, iconOnly ? styles.iconOnly: styles.regular)}>
            {selectable ? (sel ? selectText: children):children}
        </button>
    )
}

export default Button;