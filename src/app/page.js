import Image from "next/image";
import styles from "./home.module.css";
import Button from "@/components/Button";
import ActionCard from "@/components/ActionCard";

export default function Home() {
    return (
        <div className={styles.snapScrollContainer}>
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
                  <ActionCard title="Wildlife Protection" icon="A" number="65,000+" caption="Animals Saved" image="/tiger.jpg"/>
                  <ActionCard title="Wildlife Protection" icon="A" number="65,000+" caption="Animals Saved" image="/tiger.jpg"/>
                  <ActionCard title="Wildlife Protection" icon="A" number="65,000+" caption="Animals Saved" image="/tiger.jpg"/>
                  <ActionCard title="Wildlife Protection" icon="A" number="65,000+" caption="Animals Saved" image="/tiger.jpg"/>
                </div>
            </section>
        </div>
    );
}
