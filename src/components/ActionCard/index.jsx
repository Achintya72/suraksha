import styles from "./actioncard.module.css";
import Image from "next/image";

function ActionCard({ title, icon, number, caption, image, alt="Picture of an animal" }) {
    return (
        <div className={styles.card}>
            <Image src={image} fill className={styles.bgImg} alt={alt}/>
            <div className={styles.cardContent}>
                <h3>{title}</h3>
                <div className={styles.stats}>
                    {icon}
                    <h4>{number}</h4>
                    <p className="caption">{caption}</p>
                </div>
            </div>
        </div>
    )
}

export default ActionCard;