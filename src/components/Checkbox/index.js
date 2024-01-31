"use client";

import classNames from "@/hooks/classnames";
import Icon from "../Icon";
import styles from "./checkbox.module.css";
import { useState } from "react";


export default function Checkbox({ onChange })  {
    const [checked, changeChecked] = useState(false);

    const handleClick = () => {
        console.log("Click");
        changeChecked(prev => !prev);
        onChange(checked);
    }
    return (
        <div className={classNames(styles.checkbox, checked ? styles.checkedRoot: false)} onClick={handleClick}>
            <div className={classNames(styles.bg, checked ? styles.checked: false)} />
            <Icon name="check" size={12} />
        </div>
    )
}