"use client";

import { useState } from "react";
import styles from "./counter.module.css";

export default function Counter({ label, limit = 10 }) {
    const [value, changeValue] = useState(0);
    
    const updateCount = (val) => {
        changeValue(prev => {
            let newVal = prev + val;
            if(newVal < 0) {
                newVal = limit;
            }
            else if(newVal > limit) {
                newVal = 0;
            }
            return newVal;
        })
    }

    return (
        <div className={styles.counterRoot}>
            <p className="caption">{label}</p>
            <div className={styles.counter}>
                <div className={styles.button} onClick={() => updateCount(-1)}><p className="caption">-</p></div>
                <div className={styles.button}><p className="caption">{value}</p></div>
                <div className={styles.button} onClick={() => updateCount(1)}><p className="caption">+</p></div>
            </div>
        </div>
    )
}