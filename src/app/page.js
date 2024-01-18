import Image from "next/image";
import styles from "./home.module.css";
import Button from "@/components/Button";
import ActionCard from "@/components/ActionCard";
import classNames from "@/hooks/classnames";
import NewsCard from "@/components/NewsCard";
import Input from "@/components/TextInput";

export default function Home() {
    return (
        <>
            <section className={styles.heroSection}>
                <Image src="/hero_background.png" alt="Deer in the wild" fill className={styles.heroImg} />
                <div className="layout">
                    <div className={styles.heroText}>
                        <h1>Protecting Our Neighbors</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nisl ut cursus volutpat egestas. Elementum sed
                            facilisis ut elit odio orci diam libero. Suspendisse vulputate egestas porttitor scelerisque
                            mauris enim sit.
                        </p>
                        <Button type="secondary">Get Involved</Button>
                    </div>
                </div>
            </section>
            <section className={`${styles.whatWeDo} layout`}>
                <h2>What We Do</h2>
                <div className={styles.actionCards}>
                  <ActionCard title="Wildlife Protection" icon="elephant" number="65,000+" caption="Animals Saved" image="/tiger.jpg"/>
                  <ActionCard title="Habitat Conservation" icon="trees" number="40,000" caption="Acres Preserved" image="/giraffe.jpg"/>
                  <ActionCard title="Wildlife Restoration" icon="restore" number="78" caption="Captive Breeding Programs" image="/condor.jpg"/>
                  <ActionCard title="Wildlife Protection" icon="plants" number="65,000+" caption="Trees Planted" image="/personHoldingPlant.jpg"/>
                </div>
            </section>
            <section className={classNames(styles.news, "layout")}>
                <h2>Latest News</h2>
                <div className={styles.newsCards}>
                    <NewsCard 
                        alt="Open Pit after a mining operation" 
                        desc="Learn how and where mining has caused mass habitat loss and death, and what you can do to stop it." 
                        image="/mining.jpg" 
                        title="Digging Graves: Mining and the 6th Mass Extinction"
                    />
                    <NewsCard 
                        alt="Open Pit after a mining operation" 
                        desc="Learn how and where mining has caused mass habitat loss and death, and what you can do to stop it." 
                        image="/mining.jpg" 
                        title="Digging Graves: Mining and the 6th Mass Extinction"
                    />
                    <NewsCard 
                        alt="Open Pit after a mining operation" 
                        desc="Learn how and where mining has caused mass habitat loss and death, and what you can do to stop it." 
                        image="/mining.jpg" 
                        title="Digging Graves: Mining and the 6th Mass Extinction"
                    />
                </div>
            </section>
            <section className={styles.newsletterContainer}>
                <div className={styles.newsletterBg} />
                <div className={classNames(styles.newsletter, "layout")}>
                    <div className={styles.newsletterText}>
                        <h2>Stay Updated.</h2>
                        <p>Sign up for our monthly newsletter, with information about Suraksha campaigns and upcoming events. We do not spam you, or send promotional emails.</p>
                    </div>
                    <div className="verticalDivider" />
                    <div className={styles.newsletterForm}>
                        <div className={styles.nameInputs}>
                            <Input />
                            <Input />
                        </div>
                        <Input />
                        <Button>Join Newsletter</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
