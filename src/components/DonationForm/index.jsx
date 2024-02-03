"use client";

import { useContext, useState } from "react";
import Input from "../TextInput";
import Checkbox from "../Checkbox";
import styles from "./donation.module.css";
import Button from "../Button";
import classNames from "@/hooks/classnames";
import useRedirectFunction from "@/hooks/useRedirectFunction";
import StoreContext from "../StoreContext";
import Toast from "../Toast";

let tabStyles = [styles.left, styles.right];


export default function DonationForm({ bg = "white" }) {
    const [type, changeType] = useState(0);
    const [custom, changeCustom] = useState("");
    const [monthly, changeMonthly] = useState(false);
    const [amount, changeAmount] = useState(5 * (1 + type * 99));
    const cartRedirect = useRedirectFunction("/checkout");
    const { addItem } = useContext(StoreContext);
    const [error, changeError] = useState(null);
    const [popup, changePopup] = useState(false);
    const customInput = (e) => {
        let value = e.target.value;
        if (value !== "" && value[0] === "$") {
            value = value.split("$")[1];
        }
        if (value !== "" && !/^\d+$/.test(value)) {
            value = custom;
        }
        changeCustom(value);
        changeAmount(0);
    }

    const defaultChoice = (val) => {
        changeAmount(val);
        changeCustom("");
    }

    const handleSubmit = () => {
        let contribution = -1;
        if (amount != 0) {
            contribution = amount;
        } else if (custom !== "" && parseInt(custom) !== 0) {
            contribution = parseInt(custom);
        }
        if (contribution !== -1) {
            addItem("donation", 1, contribution);
            cartRedirect();
        } else {
            changePopup(true);
            changeError("Must Select an Amount");
        }
    }
    let customVal = custom;
    if (custom === "$") {
        customVal = "";
    } else if (custom.length > 0 && custom[0] != "$") {
        customVal = "$" + custom;
    }
    return (
        <>
            <>
                <div className={classNames(styles.tabSelect, bg == "white" ? styles.whiteBg : undefined)}>
                    <div className={classNames(styles.tabBg, tabStyles[type])} />
                    <button tabIndex={0} className={classNames(styles.tab, type == 0 ? styles.active : undefined)} onClick={() => changeType(0)}><a>Individual</a></button>
                    <button tabIndex={0} className={classNames(styles.tab, type == 1 ? styles.active : undefined)} onClick={() => changeType(1)}><a>Corporate </a></button>
                </div>
                <div className={styles.donationForm}>
                    <div className={styles.defaults}>
                        <Amount curr={amount} onClick={defaultChoice} value={5 * (1 + type * 99)} />
                        <Amount curr={amount} onClick={defaultChoice} value={10 * (1 + type * 99)} />
                        <Amount curr={amount} onClick={defaultChoice} value={15 * (1 + type * 99)} />
                        <Amount curr={amount} onClick={defaultChoice} value={20 * (1 + type * 99)} />

                    </div>
                    <input value={customVal} placeholder="Custom Amount" onChange={customInput} />
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Checkbox onChange={changeMonthly} />
                    <p>Make Monthly</p>
                </div>
                <Button onClick={handleSubmit}>Donate</Button>
            </>
            <Toast
                changeError={changeError}
                message={"Added Donation"}
                toggleVisibility={changePopup}
                error={error}
                visible={popup}
            />
        </>
    )
}


const Amount = ({ curr, value, onClick }) => {

    return (
        <button tabIndex={0} onClick={() => {
            onClick(value);
        }} className={classNames(styles.donationAmount, value == curr ? styles.chosen : undefined)}><a>${value.toLocaleString('en-us')}</a></button>
    )
}