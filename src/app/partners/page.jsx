import styles from "./partners.module.css";
import Image from "next/image";
import classNames from "@/hooks/classnames";
import GoalCard from "@/components/GoalCard";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import PartnersPrompt from "@/components/Partners";
import useDarkImage from "@/hooks/darkenImage";
import Carousel from "@/components/Carousel";



export default function Partners() {
    const darken = useDarkImage();

    return (
        <>
            <section className={styles.partnersMain}>
                <Image src="/partner/partner_bg.jpg" style={darken} fill alt="Two wild elephants roughhousing"/>
                <div className={classNames("layout", styles.mainContent)}>
                    <h4>Our Partners</h4>
                    <h1>Join the network of organizations that have supported our work and growth.</h1>
                </div>
            </section>
            <section className={styles.impact} id="impact">
                <div className={classNames("layout", styles.vision)}>
                    <h2>Partner Impact</h2>
                    <div className="verticalDivider" />
                    
                    <div className={styles.reason}>
                        <div className={styles.dataPoint}>
                            <h3>42.3M</h3>
                            <div className="data-label">
                                raised
                            </div>
                        </div>
                        <p>Donated to several of our programs, including wildlife restoration and conservation causes.</p>
                    </div>
                    <div className={styles.reason}>
                        <div className={styles.dataPoint}>
                            <h3>16</h3>
                            <div className="data-label">
                                national parks
                            </div>
                        </div>
                        <p>Created across 7 different countries, in a manner that they can sustain their protection.</p>
                    </div>
                    <div className={styles.reason}>
                        <div className={styles.dataPoint}>
                            <h3>61.3M</h3>
                            <div className="data-label">
                                animals
                            </div>
                        </div>
                        <p>Saved through medical aid, and proactive anti-poaching protocols funded by partners.</p>
                    </div>
                </div>
            </section>
            <section className={classNames(styles.highlights)} id="highlights">
                <h2 className="layout">Partner Highlights</h2>
                <Carousel>
                    <GoalCard 
                        alt="Kid reading book" 
                        desc="Selling hundreds of thousands of animal books, Penguin House helped educate young children about the protection of wildlife." 
                        date="In 2023"
                        caption="Books Sold"
                        icon="penguin"
                        image="/partner/book.jpg"
                        stat="175.3k"
                        title="“Not Just Penguins” Campaign"
                    />
                    <GoalCard 
                        alt="Cheetah-patterned shoes"
                        caption="Shoes Sold"
                        date="In 2023"
                        desc="Nike’s cheetah pattern running shoes increased awareness about the threats the cheetah population faces."
                        icon="nike"
                        image="/partner/shoes.jpg"
                        stat="572.4k"
                        title="“Fast as a Cheetah” Campaign"
                    />
                    <GoalCard 
                        alt="Coca Cola Cans"
                        caption="Cans Sold"
                        date="In July 2021"
                        desc="Our partnership with Coca-Cola led to  widespread awareness about and large donations towards polar bear conservation. "
                        icon="cocacola"
                        image="/partner/coke.jpg"
                        stat="57B"
                        title="“Arctic Chill” Campaign"
                    />
                </Carousel>
            </section>
            <PartnersPrompt />
        </>
    )
}