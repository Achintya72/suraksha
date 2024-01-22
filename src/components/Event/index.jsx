import Button from "../Button";
import Icon from "../Icon";
import styles from "./event.module.css";
import Image from "next/image";

export default function Event({ image, alt, date, location, title, desc }) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={image} alt={alt} fill />
            </div>
            <div className={styles.content}>
                <div className={styles.quickInfo}>
                    <p>{date}</p>
                    <div className={styles.location}>
                            <p className="caption">{location}</p>
                            <Icon size={20} name="location"/>
                    </div>
                </div>
                <h6>{title}</h6>
                <p>{desc}</p>
                <Button>More Info</Button>
            </div>
        </div>
    )
}