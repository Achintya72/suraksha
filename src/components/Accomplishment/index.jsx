import Image from "next/image";
import styles from "./accomplishment.module.css";
import classNames from "@/hooks/classnames";

export default function Accomplishment({ img, alt, title, desc}) {
    return (
        <div className={styles.accomplishment}>
            <div className={classNames(styles.accContent)}>
                <div className={styles.img}>
                    <Image src={img} alt={alt} fill />
                </div>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}