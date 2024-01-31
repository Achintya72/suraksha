"use client";

import styles from "./donate.module.css";
import Image from 'next/image';
import classNames from "@/hooks/classnames";
import Link from 'next/link';
import ProgramCard from "@/components/ProgramCards";
import Icon from "@/components/Icon";
import { useState } from "react";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import AnimalCard from "@/components/AnimalCard";
import DonationForm from "@/components/DonationForm";

let tabStyles = [styles.left, styles.right];

export default function Donate() {
    const [type, changeType] = useState(0);
    const [custom, changeCustom] = useState("");
    const [monthy, changeMonthly] = useState(false);

    const customInput = (e) => {
        let value = e.target.value;
        if (value == "$") changeCustom("");
        else {
            if (e.target.value.length > 0 && value[0] != "$") {
                value = `\$${value}`;
            }
            changeCustom(value);
        }
    }


    return (
        <>
            <section className={styles.donateMain}>
                <Image src="/donate/background.jpg" fill alt="Two wild elephants roughhousing" />
                <div className={classNames("layout", styles.mainContent)}>
                    <h4>Donate Now</h4>
                    <h1>Directly support our organization and cause through your donation.</h1>
                </div>
            </section>
            <section className={styles.impact} id="ourVision">
                <div className={classNames("layout", styles.vision)}>
                    <h2>Start Donating</h2>
                    <div className="verticalDivider" />
                    <div className={styles.reason}>
                        <Link href="/donate#directDonations" className={styles.heading}>
                            <h6>Direct Donations</h6>
                            <Icon name="rightArrow" />
                        </Link>
                        <p>A society where the needs of humans do not require the encroaching and compromising of natural habitats, and where humans see animal lives as just as significant as one of their own.</p>
                    </div>
                    <div className={styles.reason}>
                        <Link href="/donate#adoptAnAnimal" className={styles.heading}>
                            <h6>Adopt-An-Animal</h6>
                            <Icon name="rightArrow" />
                        </Link>
                        <p>A home where their body parts, despite being objects of human value, are theirs to use and have, instead of being targets on their backs, where their deaths don&apos;t fill someone&apos;s pockets.</p>
                    </div>

                </div>
            </section>
            <section id="directDonations" className={classNames("layout", styles.directDonations)}>
                <h2>How to Donate</h2>
                <h6>Step 1: Choose an Ongoing Program</h6>
                <div className={styles.programs}>
                    <ProgramCard
                        image="/donate/deforestation.jpg"
                        desc="Lorem ipsum dolor sit amet consectetur. Amet orci volutpat aliquam faucibus orci."
                        title="Haitian Reforestation Project"

                    />
                    <ProgramCard
                        image="/donate/deforestation.jpg"
                        desc="Lorem ipsum dolor sit amet consectetur. Amet orci volutpat aliquam faucibus orci."
                        title="Haitian Reforestation Project"

                    />
                    <ProgramCard
                        image="/donate/deforestation.jpg"
                        desc="Lorem ipsum dolor sit amet consectetur. Amet orci volutpat aliquam faucibus orci."
                        title="Haitian Reforestation Project"

                    />
                </div>
            </section>
            <section className={styles.differenceContainer}>
                <div className={styles.background} />
                <div className={classNames("layout", styles.difference)}>
                    <div className={styles.donate}>
                        <h6>Step 2: Choose an Amount</h6>
                        <DonationForm />
                    </div>
                    <div className={styles.data}>
                        <h2>The difference you are making</h2>
                        <div className={styles.stats}>
                            <DonationStat desc="Planted in core areas to restore canopies." label="trees" value={15} />
                            <DonationStat desc="Planted in core areas to restore canopies." label="trees" value={15} />
                            <DonationStat desc="Planted in core areas to restore canopies." label="trees" value={15} />
                        </div>
                    </div>
                </div>
            </section>
            <section id="adoptAnAnimal" className={classNames("layout", styles.adoptAnAnimal)}>
                <div className={styles.header}>
                    <h2>Adopt An Animal</h2>
                    <p className="caption">Get exclusive monthly updates, a plushie, photos, stamps, and greetings cards of your pet.</p>
                </div>
                <div style={{ display: "flex", paddingTop: "32px", paddingBottom: "32px", gap: "35px", overflowX: "auto", overflowY: "visible"}}>
                    <AnimalCard
                        age={16}
                        bio="Loves to eat, sleep, play, repeat."
                        image="/donate/milo.jpg"
                        location="Amboseli National Park, KY"
                        name="Milo"
                    />
                    <AnimalCard
                        age={23}
                        bio="Loves to show off and eat."
                        image="/donate/bambi.jpg"
                        location="California, USA"
                        name="Bambi"
                    />
                    <AnimalCard
                        age={21}
                        bio="Loves to roll in mud and sleep."
                        image="/donate/roger.jpg"
                        location="KwaZulu-Natal, SA"
                        name="Roger"
                    />
                    <AnimalCard
                        age={9}
                        bio="Loves to swim, sleep, and play."
                        image="/donate/emily.jpg"
                        location="Madhya Pradesh, IN"
                        name="Emily"
                    />
                </div>
            </section>
        </>
    )
}

const DonationStat = ({ desc, value, label }) => {
    return (
        <div className={styles.stat}>
            <div className={styles.statData}>
                <h4>{value}</h4>
                <p className="data-label">{label}</p>
            </div>
            <p>{desc}</p>
        </div>
    )
}