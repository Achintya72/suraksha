import Image from "next/image";
import styles from "./newscard.module.css";
import Button from "../Button";

function NewsCard({
    title,
    desc,
    link,
    image,
    alt
}) {
    return (
        <div className={styles.newsCard}>
            <div className={styles.imageContainer}>
                <Image src={image} fill alt={alt}/>
            </div>
            <div className={styles.cardContent}>
                <h6>{title}</h6>
                <p>{desc}</p>
                <Button>Read More</Button>
            </div>
        </div>
    )
}


export default NewsCard;