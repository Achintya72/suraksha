import Image from "next/image";
import styles from "./events.module.css";
import classNames from "@/hooks/classnames";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Counter from "@/components/Counter";
import Event from "@/components/Event";
import PartnersPrompt from "@/components/Partners";

export default function Events() {
    return (
        <>
            <section className={styles.main}>
                <Image src="/events/events_bg.jpg" alt="deer" fill />
                <div className={classNames(styles.mainText, "layout")}>
                    <h4>Our Events</h4>
                    <h1>The best way to get involved is to get involved.</h1>
                </div>
            </section>
            <section className={classNames("layout", styles.vision)} id="ourVision">
                <h2>Why We Host Events</h2>
                <div className="verticalDivider" />
                <div className={styles.reason}>
                    <h6>Fundraising</h6>
                    <p>All profits for any events hosted by Suraksha are put directly into making things happen. We believe that stewardship need not be a sacrifice, and can come in the form of a fun party.</p>
                </div>
                <div className={styles.reason}>
                    <h6>Awareness</h6>
                    <p>These events are almost always open to the whole public, and hosted in public spaces. This helps draw attention to our cause, our organization, and helps us grow.</p>
                </div>
            </section>
            <section className={styles.galaInfo}>
                <div className={styles.galaPic}>
                    <Image src="/events/gala.jpg" alt="gala" fill />
                </div>
                <div className={styles.galaText}>
                    <div>
                        <div className={styles.location}>
                            <Icon name="location" size={20} />
                            <p className="caption">2100 Alaskan Wy, Seattle, WA 98121</p>
                        </div>
                        <h2>Annual Suraksha Gala</h2>
                    </div>
                    <p className="caption">1/10/2023 - 1/17/2024</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Malesuada magna pretium augue ut. In sollicitudin lacus est ac ipsum nulla nec egestas aliquam. Libero laoreet dolor egestas felis consectetur habitasse. Nisi posuere pellentesque venenatis nec pretium porta. Libero ac bibendum ut volutpat laoreet in. Fermentum enim suscipit donec consequat. Arcu.</p>
                    <div style={{ display: "flex", gap: "25px", marginBottom: "15px"}}>
                        <Counter label="Adults" />
                        <Counter label="Children" />
                    </div>
                    <Button>Register</Button>
                </div>
            </section>
            <section className={classNames(styles.upcoming, "layout")}>
                <h2>Upcoming Events</h2>
                <div className={styles.events}>
                    <Event 
                        alt="Gala Event"
                        date="1/10 - 1/17"
                        desc="Join us at our annual Surakaha gala event, where we reflect on this year's successes and next year's hopes."
                        image="/events/gala.jpg"
                        location="Albuquerque, NM"
                        title="Annual Suraksha Gala: Registration Information"
                    />
                    <Event 
                        alt="PROTEST"
                        date="11/17 - 11/24"
                        desc="Join us at Washington D.C., as we take to the streets to argue for provisions for more national nature reserves."
                        image="/events/protest.jpg"
                        location="Seattle, WA"
                        title="March Animal Rights Protest: Get Involved"
                    />
                    <Event 
                        alt="PROTEST"
                        date="11/17 - 11/24"
                        desc="Join us at Washington D.C., as we take to the streets to argue for provisions for more national nature reserves."
                        image="/events/protest.jpg"
                        location="Seattle, WA"
                        title="March Animal Rights Protest: Get Involved"
                    />
                </div>
            </section>
            <PartnersPrompt />
        </>
    )
}