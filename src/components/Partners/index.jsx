import Button from "../Button"
import styles from "./partners.module.css";
import Icon from "../Icon";
import classNames from "@/hooks/classnames";

const partners = [
    'nike', 'adidas', 'microsoft', 'google', 'apple', 'ibm',
    'uniqlo', 'mcdonalds', 'logitech', 'twitch', 'boeing', 'pepsi',
    'cocacola', 'paypal', 'stripe', 'tiktok'
];


export default function PartnersPrompt() {
    return (
        <section className={styles.partnerContainer} id="partners">
                <div className={styles.partnerBg} />
                <div className={classNames(styles.partners, "layout")}>
                    <div className={styles.partnerText}>
                        <h2>And We&apos;re Not Done.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Elit cras aliquet tincidunt sed. Laoreet volutpat ullamcorper duis ullamcorper vel.</p>
                        <Button>Get Involved</Button>
                    </div>
                    <div className="verticalDivider" />
                    <div className={styles.partnersIcons}>
                        {partners.map(p => <Icon size={25} name={p} key={p} />)}
                    </div>
                </div>
            </section>
    )
}