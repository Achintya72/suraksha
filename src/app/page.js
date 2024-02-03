import Image from "next/image";
import styles from "./home.module.css";
import Button from "@/components/Button";
import ActionCard from "@/components/ActionCard";
import classNames from "@/hooks/classnames";
import NewsCard from "@/components/NewsCard";
import Input from "@/components/TextInput";
import NewsLetter from "@/components/Newsletter";
import Carousel from "@/components/Carousel";

export default function Home() {



    return (
        <>
            <section className={styles.heroSection}>
                <Image src="/home/hero_background.png" alt="Deer in the wild" fill className={styles.heroImg} />
                <div className="layout">
                    <div className={styles.heroText}>
                        <h1>Protecting Our Neighbors</h1>
                        <p>
                        Committed to advancing wildlife and habitat conservation and preservation, we work diligently to protect the fragile equilibrium of our natural environments for both current and forthcoming generations. Through engaging projects, active campaigns, and global partnerships, we aim to foster a global environment where biodiversity flourishes and habitats thrive. 
                        </p>
                        <Button type="secondary" redirect="/donate">Support Us</Button>
                    </div>
                </div>
            </section>
            <section className={`${styles.whatWeDo}`} id="whatWeDo">
                <h2 className="layout">What We Do</h2>
                <Carousel>
                    <ActionCard
                        title="Wildlife Protection"
                        icon="elephant"
                        number="65,000+"
                        desc="Rescue, rehabilitate, release wildlife, promote legal protections, and anti-poaching. Collaborate for coexistence, sustainability, and research. Strive for a world where animals thrive in natural habitats, fostering ecological balance."
                        caption="Animals Saved"
                        image="/home/tiger.jpg"
                    />
                    <ActionCard
                        title="Habitat Conservation"
                        icon="trees"
                        number="40,000"
                        caption="Acres Preserved"
                        image="/home/giraffe.jpg"
                        desc="We prioritize global habitat protection, collaborating for sustainable land management and combating deforestation. Our programs integrate research, community engagement, and advocacy, fostering biodiversity. We advocate for national parks to preserve nature, ensuring species survival and ecological balance for future generations."
                    />
                    <ActionCard
                        title="Wildlife Restoration"
                        icon="restore"
                        number="78"
                        caption="Captive Breeding Programs"
                        image="/home/condor.jpg"
                        desc="We protect endangered species through captive breeding, educate the public, and advocate for wildlife corridors. Ensuring habitat connectivity fosters natural movement, preventing isolation, and promoting genetic exchange among populations."
                    />
                    <ActionCard
                        title="Wildlife Protection"
                        icon="plants"
                        number="65,000+"
                        caption="Trees Planted"
                        image="/home/personHoldingPlant.jpg"
                        desc="We revive ecosystems by restoring native vegetation, rehabilitating waterways, and healing landscapes. Our global tree-planting events, led by volunteers, aim to restore lush forests. Through habitat restoration, we nurture thriving ecosystems for future generations"
                    />
                </Carousel>
            </section>
            <section className={classNames(styles.news)} id="latestNews">
                <h2 className="layout">Latest News</h2>
                <Carousel>
                    <NewsCard
                        alt="Open Pit after a mining operation"
                        desc="Join us at the Seattle Marriot as we look back on a year of accomplishments with music, food, and more."
                        image="/events/gala.jpg"
                        title="Annual Suraksha Gala: Registration Information"
                    />
                    <NewsCard
                        alt="Open Pit after a mining operation"
                        desc="Join us at Washington D.C., as we take to the streets to argue for provisions for more national nature reserves."
                        image="/events/protest.jpg"
                        title="March Animal Rights Protest: Get Involved"
                    />
                    <NewsCard
                        alt="Open Pit after a mining operation"
                        desc="Learn how and where mining has caused mass habitat loss and death, and what you can do to stop it."
                        image="/home/mining.jpg"
                        title="Digging Graves: Mining and the 6th Mass Extinction"
                    />
                </Carousel>
            </section>
            <NewsLetter />
        </>
    );
}
