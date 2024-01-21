import Image from "next/image";
import styles from "./about.module.css";
import classNames from "@/hooks/classnames";
import GoalCard from "@/components/GoalCard";
import Button from "@/components/Button";
import DonationForm from "@/components/DonationForm";
import Accomplishment from "@/components/Accomplishment";
import Accomplishments from "@/components/Accomplishments";

export default function AboutUs() {
    return (
        <>
            <section className={styles.aboutMain}>
                <Image src="/about/about_bg.jpg" fill alt="Two wild elephants roughhousing"/>
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
            <section className={classNames("layout", styles.goals)} id="ourGoals">
                <h2>Our Goals</h2>
                <div className={styles.goalCards}>
                    <GoalCard 
                        alt="Wolf"
                        caption="Avg. Increase"
                        date="By 2030"
                        icon="tiger"
                        desc="Lorem ipsum dolor sit amet consectetur. Tellus mattis nibh rhoncus morbi nec viverra vel sagittis ac."
                        image="/about/wolf.jpg"
                        stat="20%"
                        title="Endangered Species Populations"
                    />
                    <GoalCard 
                        alt="Wolf"
                        caption="Avg. Increase"
                        date="By 2030"
                        icon="tiger"
                        desc="Lorem ipsum dolor sit amet consectetur. Tellus mattis nibh rhoncus morbi nec viverra vel sagittis ac."
                        image="/about/courthouse.jpg"
                        stat="20%"
                        title="Endangered Species Populations"
                    />
                    <GoalCard 
                        alt="Wolf"
                        caption="Avg. Increase"
                        date="By 2030"
                        icon="tiger"
                        desc="Lorem ipsum dolor sit amet consectetur. Tellus mattis nibh rhoncus morbi nec viverra vel sagittis ac."
                        image="/about/landscape.jpg"
                        stat="20%"
                        title="Endangered Species Populations"
                    />
                </div>    
            </section>
            <section className={styles.donate}>
                <div className={styles.donateBg} />
                <div className={classNames("layout", styles.donateContent)}>
                    <div className={styles.donateText}>
                        <h2>We Need Your Help.</h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur. Est montes elementum augue morbi a dignissim sodales. Gravida hac lorem in facilisis et cras et purus in. Volutpat consequat vivamus risus est viverra ultricies aenean est turpis.
                        </p>
                        <Button>Support Us</Button>
                    </div>
                    <div className="verticalDivider" />
                    <DonationForm />
                </div>
            </section>
        </>
    )
}