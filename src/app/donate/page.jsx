"use client";

import styles from "./donate.module.css";
import Image from 'next/image';
import classNames from "@/hooks/classnames";
import Link from 'next/link';
import ProgramCard from "@/components/ProgramCards";
import Icon from "@/components/Icon";
import { useState } from "react";

let tabStyles = [styles.left, styles.right];

export default function Donate() {
    const [type, changeType] = useState(0);

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
                        <div className={styles.tabSelect}>
                            <div className={classNames(styles.tabBg, tabStyles[type])} />
                            <a className={classNames(styles.tab, type == 0 && styles.active)} onClick={() => changeType(0)}>Individual</a>
                            <a className={classNames(styles.tab, type == 1 && styles.active)} onClick={() => changeType(1)}>Corporate</a>
                        </div>
                        <div className={styles.donationForm}>
                            <div className={styles.defaults}>
                                <a className={styles.donationAmount} >${(5 * (1 + type * 99)).toLocaleString('en-us')}</a>
                                <a className={styles.donationAmount}>  ${(10 * (1 + type * 99)).toLocaleString('en-us')}</a>
                                <a className={styles.donationAmount} >${(15 * (1 + type * 99)).toLocaleString('en-us')}</a>
                                <a className={styles.donationAmount} >${(20 * (1 + type * 99)).toLocaleString('en-us')}</a>
                            </div>
                            <input />
                        </div>
                    </div>
                    <div className={styles.data}>
                        <h2>The difference you are making</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

