import styles from "./partners.module.css";
import Image from "next/image";
import classNames from "@/hooks/classnames";
import GoalCard from "@/components/GoalCard";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import PartnersPrompt from "@/components/Partners";



export default function Partners() {
    return (
        <>
            <section className={styles.partnersMain}>
                <Image src="/partner/partner_bg.jpg" fill alt="Two wild elephants roughhousing"/>
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
            <section className={classNames("layout", styles.highlights)} id="highlights">
                <h2>Partner Highlights</h2>
                <div className={styles.highlightsRow}>
                    <GoalCard 
                        alt="Kid reading book" 
                        desc="Lorem ipsum dolor sit amet consectetur. Pretium sociis sit id nulla nibh ut porttitor in." 
                        date="In 2023"
                        caption="Books Sold"
                        icon="penguin"
                        image="/partner/book.jpg"
                        stat="75.3k"
                        title="Our Neighbors Campaign"
                    />
                    <GoalCard 
                        alt="Cheetah-patterned shoes"
                        caption="Shoes Sold"
                        date="In 2023"
                        desc="Lorem ipsum dolor sit amet consectetur. Pretium sociis sit id nulla nibh ut porttitor in."
                        icon="nike"
                        image="/partner/shoes.jpg"
                        stat="100k"
                        title="Limited Addition Animal Shoes"
                    />
                    <GoalCard 
                        alt="Cheetah-patterned shoes"
                        caption="Shoes Sold"
                        date="In 2023"
                        desc="Lorem ipsum dolor sit amet consectetur. Pretium sociis sit id nulla nibh ut porttitor in."
                        icon="nike"
                        image="/partner/shoes.jpg"
                        stat="100k"
                        title="Limited Addition Animal Shoes"
                    />
                </div>
            </section>
            <PartnersPrompt />
        </>
    )
}