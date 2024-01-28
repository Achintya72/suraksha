import Button from "../Button";
import Icon from "../Icon";
import Image from "next/image";
import styles from './storecard.module.css';

export default function StoreCard({title, price, image, icon, alt=`${image} plushie`})  {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src={'/store/' + image + '.png'} fill className={styles.bgImg} alt={alt}/>
            </div>
            <div className={styles.cardContent}>
                <div>
                    <h6>{title}</h6>
                    <p>{price}</p>
                </div>
                <Button type='primary'>
                    <Icon name="add" size={20} />
                </Button>
            </div>
        </div>
    )
}