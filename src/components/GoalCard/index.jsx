import Image from "next/image";
import styles from "./goalcard.module.css";
import Icon from "../Icon";
import classNames from "@/hooks/classnames";
import useDarkImage from "@/hooks/darkenImage";

export default function GoalCard({
    image,
    alt,
    stat,
    caption,
    date,
    icon,
    title,
    desc
}) {
    const darken = useDarkImage();
    return(
        <div className={styles.card}>
            <Image src={image} style={darken} fill alt={alt} />
            <div className={styles.content}>
                <div className={styles.stats}>
                    <div>
                        <h4>{stat}</h4>
                        <p className={classNames("caption", styles.dataLabel)}>{caption}</p>
                        <p className="caption">{date}</p>
                    </div>
                    <Icon size={70} name={icon}/>
                </div>
                <div className={styles.text}>
                    <p className="caption">{title}</p>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}