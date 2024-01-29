import Button from "../Button";
import Icon from "../Icon";
import styles from "./program.module.css";
import Image from "next/image";

export default function ProgramCard({ image, alt, title, desc, raised=30000, target=50000 }) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={image} alt={alt} fill />
            </div>
            <div className={styles.content}>
                <h6>{title}</h6>
                <p>{desc}</p>
                <div className={styles.raisedDetails}>
                    <div>
                        <div className="data-label">{"$" + raised.toLocaleString("en-US")}</div>
                        <div className="caption">{"raised of $" + target.toLocaleString("en-US")}</div>
                    </div>
                    <h6>{Math.round((raised / target) * 100)  + "%"}</h6>
                </div>
                <div className={styles.progressBg}>
                    <div className={styles.progress} style={{ width: `${raised * 100 / target}%`}} />
                </div>
                <Button>Select</Button>
            </div>
        </div>
    )
}