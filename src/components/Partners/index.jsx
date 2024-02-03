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
        <section className={styles.partnerContainer} id="partnerWithUs">
                <div className={styles.partnerBg} />
                <div className={classNames(styles.partners, "layout")}>
                    <div className={styles.partnerText}>
                        <h2>And We&apos;re Not Done.</h2>
                        <p>Partner companies play a critical role in advancing our mission by providing vital support and resources. With your collaboration, we can amplify our impact, expand outreach efforts, and reach a broader audience to drive meaningful change in wildlife conservation and preservation.</p>
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