"use client";

import Button from "../Button";
import Icon from "../Icon";
import Image from "next/image";
import styles from './storecard.module.css';
import StoreContext from "../StoreContext";
import { useContext } from "react";

export default function StoreCard({ title, price, image, icon, alt = `${image} plushie` }) {
    const { addItem } = useContext(StoreContext);
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <div className={styles.imageContainer}>
                    <Image src={'/store/' + image + '.png'} fill className={styles.bgImg} alt={alt} />
                </div>
            </div>
            <div className={styles.cardContent}>
                <div>
                    <h6>{title}</h6>
                    <p>{price}</p>
                </div>
                <Button type='primary' iconOnly onClick={() => {
                    addItem(image, 1, 23.99);
                }}>
                    <Icon name="add" size={20} />
                </Button>
            </div>
        </div>
    )
}