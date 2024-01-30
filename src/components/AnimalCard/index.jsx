import Image from "next/image";
import styles from "./animalcard.module.css";
import Icon from "../Icon";
import Button from "../Button";

export default function AnimalCard({
    location,
    name,
    age,
    bio,
    image,
}) {
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
                <Button type="secondary">Adopt</Button>
            </div>
        </div>
    )
}