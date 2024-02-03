import Image from "next/image";
import styles from "./about.module.css";
import classNames from "@/hooks/classnames";
import GoalCard from "@/components/GoalCard";
import Button from "@/components/Button";
import DonationForm from "@/components/DonationForm";
import Accomplishment from "@/components/Accomplishment";
import Accomplishments from "@/components/Accomplishments";
import Carousel from "@/components/Carousel";

export default function AboutUs() {
    return (
        <>
            <section className={styles.aboutMain}>
                <Image src="/about/about_bg.jpg" fill alt="Two wild elephants roughhousing" />
                <div className={classNames("layout", styles.mainContent)}>
                    <h4>Our Philosphy</h4>
                    <h1>Animals don&apos;t have to earn the right to be saved, they are born with it.</h1>
                </div>
            </section>
            <section className={classNames("layout", styles.vision)} id="ourVision">
                <h2>Our Vision</h2>
                <div className="verticalDivider" />
                <div className={styles.reason}>
                    <h6>For Humans</h6>
                    <p>A society where the needs of humans do not require the encroaching and compromising of natural habitats, and where humans see animal lives as just as significant as one of their own.</p>
                </div>
                <div className={styles.reason}>
                    <h6>For Animals</h6>
                    <p>A home where their body parts, despite being objects of human value, are theirs to use and have, instead of being targets on their backs, where their deaths don&apos;t fill someone&apos;s pockets.</p>
                </div>
            </section>
            <Accomplishments />
            <section className={classNames(styles.goals)} id="ourGoals">
                <h2 className="layout">Our Goals</h2>
                <Carousel>
                    <GoalCard
                        alt="Wolf"
                        caption="Avg. Increase"
                        date="By 2030"
                        icon="tiger"
                        desc="We aim to increase the population of 8 endangered species with the ultimate goal of taking them off the endangered species list."
                        image="/about/wolf.jpg"
                        stat="20%"
                        title="Endangered Species Populations"
                    />
                    <GoalCard
                        alt="Wolf"
                        caption="New Legislative Acts"
                        date="By 2030"
                        icon="law"
                        desc="Through advocacy and peaceful protest, we aim to draw more attention from the government to poaching and trafficking."
                        image="/about/courthouse.jpg"
                        stat="4"
                        title="Protect Endangered Species"
                    />
                    <GoalCard
                        alt="Wolf"
                        caption="Avg. Increase"
                        date="By 2030"
                        icon="trees"
                        desc="Our goal is to increase canopy coverage for major forests in the United States through restoration efforts."
                        image="/about/landscape.jpg"
                        stat="45%"
                        title="Expanding Canopy Coverage"
                    />
                </Carousel>
            </section>
            <section className={styles.donate}>
                <div className={styles.donateBg} />
                <div className={classNames("layout", styles.donateContent)}>
                    <div className={styles.donateText}>
                        <h2>We Need Your Help.</h2>
                        <p>
                            As a non-profit organization, we rely on the support and collaboration of individuals like you to drive meaningful impact. Your contributions, whether through volunteering, donations, or spreading awareness, are crucial in fulfilling our mission of creating positive change for our environment.
                        </p>
                    </div>
                    <div className="verticalDivider" />
                    <div className={styles.form}>
                        <DonationForm bg="white"/>
                    </div>
                </div>
            </section>
        </>
    )
}