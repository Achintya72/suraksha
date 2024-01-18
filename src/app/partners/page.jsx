import styles from "./partners.module.css";
import Image from "next/image";
import classNames from "@/hooks/classnames";

export default function Partners() {
    return (
        <>
            <section className={styles.partnersMain}>
                <Image src="/partner_bg.jpg" fill alt="Two wild elephants roughhousing"/>
                <div className={classNames("layout", styles.mainContent)}>
                    <h4>Our Partners</h4>
                    <h1>Join the network of organizations that have supported our work and growth.</h1>
                </div>
            </section>
            <section className={styles.impact} id="ourVision">
                <div className={classNames("layout", styles.vision)}>
                    <h2>Partner Impact</h2>
                    <div className="verticalDivider" />
                    <div className={styles.reason}>
                        <h3>$42.3M</h3>
                        <p>A society where the needs of humans do not require the encroaching and compromising of natural habitats, and where humans see animal lives as just as significant as one of their own.</p>
                    </div>
                    <div className={styles.reason}>
                        <h3>16</h3>
                        <p>A home where their body parts, despite being objects of human value, are theirs to use and have, instead of being targets on their backs, where their deaths don&apos;t fill someone&apos;s pockets.</p>
                    </div>
                    <div className={styles.reason}>
                        <div className={styles.dataPoint}>
                            <h3>61.3M</h3>
                            <div className="data-label">
                                raised
                            </div>
                        </div>
                        <p>A home where their body parts, despite being objects of human value, are theirs to use and have, instead of being targets on their backs, where their deaths don&apos;t fill someone&apos;s pockets.</p>
                    </div>
                </div>
            </section>
        </>
    )
}