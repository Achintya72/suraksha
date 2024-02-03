"use client";

import { useEffect, useState } from "react";
import styles from "./counter.module.css";
import classNames from "@/hooks/classnames";

export default function Counter({ val = 0, label, limit = 1000, onChange, type = "regular" }) {

    const updateCount = (v) => {
        if (val + v >= 0 && val + v <= limit) {
            onChange(val + v);
        }
    }

    return (
        <div className={styles.counterRoot}>
            {label != undefined &&
                <p className="caption">{label}</p>
            }
            <div className={styles.counter}>
                <button className={classNames(styles.button, type == "regular" ? styles.regular : styles.tinted)} onClick={() => updateCount(-1)}><p className="caption">-</p></button>
                <div className={classNames(styles.button, type == "regular" ? styles.regular : styles.tinted)}><p className="caption">{val}</p></div>
                <button className={classNames(styles.button, type == "regular" ? styles.regular : styles.tinted)} onClick={() => updateCount(1)}><p className="caption">+</p></button>
            </div>
        </div>
    )
}