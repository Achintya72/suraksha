"use client";

import { useState } from "react";
import Input from "../TextInput";
import styles from "./donation.module.css";
import Button from "../Button";

export default function DonationForm() {
    const [chosenAmount, changeChosenAmount] = useState(5);
    return (
        <div className={styles.form}>
            <div className={styles.options}>
                <a className={styles.option}>$5</a>
                <a className={styles.option}>$10</a>
                <a className={styles.option}>$15</a>
                <a className={styles.option}>$20</a>
            </div>
            <Input placeholder="Custom Amount" type="number" />
            <div>
                <input name="recurring" id="recurring" type="checkbox" />
                <label for="recurring">Make this a monthly donation.</label>
            </div>
            <Button>Donate</Button>
        </div>

    )
}