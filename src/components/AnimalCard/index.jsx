import Image from "next/image";
import styles from "./animalcard.module.css";
import Icon from "../Icon";
import Button from "../Button";
import { useContext, useState } from "react";
import StoreContext from "../StoreContext";
import Toast from "../Toast";

export default function AnimalCard({
    location,
    name,
    age,
    bio,
    image,
}) {
    const { addItem } = useContext(StoreContext);
    const [popup, changePopup] = useState(false);
    const [error, changeError] = useState(null);

    const adopt = () => {
        addItem(name, 1, 100);
        changePopup(true);
    }

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <div className={styles.overlay} />
                <Image src={image} alt={name} fill />
            </div>
            <div className={styles.content}>
                <div className={styles.location}>
                    <Icon name="location" size={20} />
                    <p className="caption">{location}</p>
                </div>
                <div className={styles.name}>
                    <h3>{name}</h3>
                    <p className="caption">{age}</p>
                </div>
                <p>{bio}</p>
                <Button type="secondary" onClick={adopt}>Adopt</Button>
            </div>
            <Toast 
                changeError={changeError}
                message="Successfully Added Adoption"
                error={error}
                toggleVisibility={changePopup}
                visible={popup}
            />
        </div>
    )
}