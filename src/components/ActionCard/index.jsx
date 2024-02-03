import classNames from "@/hooks/classnames";
import Icon from "../Icon";
import styles from "./actioncard.module.css";
import Image from "next/image";
import useDarkImage from "@/hooks/darkenImage";

function ActionCard({ title, icon, number, desc, caption, image, alt="Picture of an animal" }) {
    const darken = useDarkImage();
    return (
        <div tabIndex={0} className={styles.card}>
            <Image src={image} style={darken} fill className={styles.bgImg} alt={alt}/>
            <div className={styles.cardContent}>
                <h3>{title}</h3>
                <div className={styles.stats}>
                    <Icon name={icon} size={60} />
                    <h4>{number}</h4>
                    <p className={classNames("caption", styles.caption)}>{caption}</p>
                </div>
            </div>
            <div className={styles.overlay}>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ActionCard;