import styles from "./donate.module.css";
import Image from 'next/image';
import classNames from "@/hooks/classnames";
import Link from 'next/link';
import ProgramCard from "@/components/ProgramCards";
import Icon from "@/components/Icon";

export default function Donate() {
    return (
        <>
            <section className={styles.donateMain}>
                <Image src="/donate/background.jpg" fill alt="Two wild elephants roughhousing"/>
                <div className={classNames("layout", styles.mainContent)}>
                    <h4>Donate Now</h4>
                    <h1>Directly support our organization and cause through your donation.</h1>
                </div>
            </section>
            <section className={styles.visionContainer}>
                <div className={classNames("layout", styles.vision)}>
                    <h2>Start Donating</h2>
                    <div className="verticalDivider" />
                    <div className={styles.reason}>
                        <Link href='/donate#directDonations'><h6>{"Direct Donations"} <Icon name="rightArrow" size={24} /></h6></Link>
                        <p>As a non-profit organization, we rely on donations to keep our organization active. Through your donations, we are able to fund our events and projects.</p>
                    </div>
                    <div className={styles.reason}>
                        <Link href='/donate#adoptAnAnimal'><h6>{"Adopt-an-Animal"} <Icon name="rightArrow" size={24} /></h6></Link>
                        <p>Your funds directly benefit the animals. The money is used to host protection, conservation, and restoration events, as well as allow us to protect more animals.</p>
                    </div>
                </div>
            </section>
            <section id="directDonations" className={classNames("layout" ,styles.directDonations)}>
                <h2>How to Donate</h2>
                <h6>Step 1: Choose an Ongoing Program</h6>
                <div className={styles.programs}>
                    <ProgramCard image="/donate/deforestation.jpg" desc="Lorem ipsum dolor sit amet consectetur. Amet orci volutpat aliquam faucibus orci." title="Haitian Reforestation Project" />
                    <ProgramCard image="/donate/deforestation.jpg" desc="Lorem ipsum dolor sit amet consectetur. Amet orci volutpat aliquam faucibus orci." title="Haitian Reforestation Project" />
                    <ProgramCard image="/donate/deforestation.jpg" desc="Lorem ipsum dolor sit amet consectetur. Amet orci volutpat aliquam faucibus orci." title="Haitian Reforestation Project" />
                </div>
                
            </section>
            <section className={styles.differenceContainer}>
                <div className={styles.background}/>
                <div className={classNames("layout", styles.difference)}>
                    <div className={styles.donate}>
                        
                    </div>
                    <div className={styles.data}>
                        <h2>The difference you are making</h2>
                    </div>
                </div>
            </section>
        </>
    )
}