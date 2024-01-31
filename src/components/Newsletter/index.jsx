"use client";


import Input from "../TextInput"
import Button from "../Button"
import Toast from "../Toast"
import styles from "./newsletter.module.css";
import classNames from "@/hooks/classnames";
import { useState } from "react";

export default function NewsLetter() {
    const [popup, changePopup] = useState(false);
    const [contact, changeContact] = useState({
        fname: "",
        lname: "",
        email: ""
    });
    const [error, changeError] = useState(false);

    const handleChange = (e) => {
        changeContact(prev => {
            prev[e.target.name] = e.target.value;
            return { ...prev };
        })
    }

    const handleSubmit = () => {
        if(contact.email.length == 0) {
            changeError("I need an email!");
        } else {
            changeContact({
                fname: "",
                lname: "",
                email: ""
            })
        }
        changePopup(true);
    }

    return (
        <section className={styles.newsletterContainer} id="newsletter">
            <div className={styles.newsletterBg} />
            <div className={classNames(styles.newsletter, "layout")}>
                <div className={styles.newsletterText}>
                    <h2>Stay Updated.</h2>
                    <p>Sign up for our monthly newsletter, with information about Suraksha campaigns and upcoming events. We do not spam you, or send promotional emails.</p>
                </div>
                <div className="verticalDivider" />
                <div className={styles.newsletterForm}>
                    <div className={styles.nameInputs}>
                        <Input name="fname" placeholder="First Name" onChange={handleChange} value={contact.fname} />
                        <Input name="lname" placeholder="Last Name" onChange={handleChange} value={contact.lname} />
                    </div>
                    <Input name="email" placeholder="Email" onChange={handleChange} value={contact.email} />
                    <Button onClick={handleSubmit}>Join Newsletter</Button>
                </div>
            </div>
            <Toast 
                message="Added you to the newsletter!"
                error={error}
                changeError={changeError}
                toggleVisibility={changePopup} 
                visible={popup} 
                type={error ? "error" : "success"}
                
            />
        </section>
    )
}