import Image from "next/image";
import styles from "./home.module.css";
import Button from "@/components/Button";
import ActionCard from "@/components/ActionCard";
import classNames from "@/hooks/classnames";
import NewsCard from "@/components/NewsCard";
import Input from "@/components/TextInput";
import NewsLetter from "@/components/Newsletter";
import { Carousel } from "@/components/Carousel";

export default function Home() {
    return (
        <>
            <section className={styles.heroSection}>
                <Image src="/home/hero_background.png" alt="Deer in the wild" fill className={styles.heroImg} />
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
            <section className={`${styles.whatWeDo} layout`} id="whatWeDo">
                <h2>What We Do</h2>
                <Carousel>
                  <ActionCard 
                    title="Wildlife Protection" 
                    icon="elephant" 
                    number="65,000+"
                    desc="Hello, world!" 
                    caption="Animals Saved" 
                    image="/home/tiger.jpg"
                    />
                  <ActionCard 
                    title="Habitat Conservation" 
                    icon="trees" 
                    number="40,000" 
                    caption="Acres Preserved" 
                    image="/home/giraffe.jpg"
                    />
                  <ActionCard 
                    title="Wildlife Restoration" 
                    icon="restore" 
                    number="78" 
                    caption="Captive Breeding Programs" 
                    image="/home/condor.jpg"
                    />
                  <ActionCard 
                    title="Wildlife Protection" 
                    icon="plants" 
                    number="65,000+" 
                    caption="Trees Planted" 
                    image="/home/personHoldingPlant.jpg"
                    />
                </Carousel>
            </section>
            <section className={classNames(styles.news, "layout")} id="latestNews">
                <h2>Latest News</h2>
                <div className={styles.newsCards}>
                    <NewsCard 
                        alt="Open Pit after a mining operation" 
                        desc="Learn how and where mining has caused mass habitat loss and death, and what you can do to stop it." 
                        image="/home/mining.jpg" 
                        title="Digging Graves: Mining and the 6th Mass Extinction"
                    />
                    <NewsCard 
                        alt="Open Pit after a mining operation" 
                        desc="Learn how and where mining has caused mass habitat loss and death, and what you can do to stop it." 
                        image="/home/mining.jpg" 
                        title="Digging Graves: Mining and the 6th Mass Extinction"
                    />
                    <NewsCard 
                        alt="Open Pit after a mining operation" 
                        desc="Learn how and where mining has caused mass habitat loss and death, and what you can do to stop it." 
                        image="/home/mining.jpg" 
                        title="Digging Graves: Mining and the 6th Mass Extinction"
                    />
                </div>
            </section>
            <NewsLetter />
        </>
    );
}
