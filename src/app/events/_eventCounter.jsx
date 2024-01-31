"use client";

import Counter from "@/components/Counter";
import Button from "@/components/Button";
import StoreContext from "@/components/StoreContext";
import { useContext, useState } from "react";
import styles from "./events.module.css"
import Toast from "@/components/Toast";

export default function EventCounter() {
    const { addItem } = useContext(StoreContext);
    const [adults, changeAdults] = useState(0);
    const [children, changeChildren] = useState(0);
    const [toast, changeToast] = useState(false);
    const [error, changeError] = useState(false);

    const handleRegistration = () => {
        console.log(adults, children);
        if (adults == 0 && children == 0) {
            changeError("Please choose the size of your party first");
        } else {
            if (adults > 0) {
                addItem("galaAdult", adults, 20);
            }
            if (children > 0) {
                addItem("galaChild", children, 10);
            }
            
        }
        changeAdults(0);
        changeChildren(0);
        changeToast(true);
    }

    return (
        <>
            <div className={styles.ticketCounters}>
                <Counter val={adults} label="Adults" onChange={changeAdults} />
                <Counter val={children} label="Children" onChange={changeChildren} />
            </div>
            <Button onClick={handleRegistration}>Register</Button>
            <Toast 
                visible={toast} 
                error={error}
                changeError={changeError} 
                message="Success! Added Tickets to Card" 
                toggleVisibility={changeToast}
            />
        </>
    )
}