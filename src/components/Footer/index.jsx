import styles from './footer.module.css';
import Link from 'next/link';
import Icon from '@/components/Icon'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.linkGrid} layout`}>
                <div className={styles.suraksha}>
                    <Link href="/"><h5>Suraksha</h5></Link>
                    <div className={`caption ${styles.protecting}`}>Protecting our neighbors.</div>
                    <div className={styles.iconGroup}>
                        <Icon name="instagram" size={24}/>
                        <Icon name="facebook" size={24}/>
                        <Icon name="linkedin" size={24}/>
                        <Icon name="x" size={24}/>
                    </div>
                </div>
                <div className={styles.linkGroup}>
                    <Link href="/"><h6>Home</h6></Link>
                    <Link href='/#whatWeDo'>What we Do</Link>
                    <Link href='/#latestNews'>Latest News</Link>
                    <Link href='/#newsletter'>Newsletter</Link>
                </div>
                <div className={styles.linkGroup}>
                    <h6>About Us</h6>
                    <Link href='/about-us#ourVision'>Our Vision</Link>
                    <Link href='/about=us#ourAccomplishments'>Our Accomplishments</Link>
                    <Link href='/about-us#ourGoals'>Our Goals</Link>
                </div>
                <div className={styles.linkGroup}>
                    <h6>Partners</h6>
                    <Link href='/partners#impact'>Impact</Link>
                    <Link href='/partners#highlights'>Highlights</Link>
                    <Link href='/partners#partnerWithUs'>Partner With Us</Link>
                </div>
                <div className={styles.linkGroup}>
                    <h6>Events</h6>
                    <Link href='/events#whyWeDoEvents'>Why We Do Events</Link>
                    <Link href='/events#annualGala'>Annual Gala</Link>
                    <Link href='/events#upcomingEvents'>Upcoming Events</Link>
                    <Link href='/events#partnerWithUs'>Host an Event</Link>
                </div>
                <div className={styles.supportUs}>
                    <h6>Support Us</h6>
                    <Link href='/donate#whyDonate'>Why Donate?</Link>
                    <Link href='/donate#directDonations'>Individual</Link>
                    <Link href='/donate#adoptAnAnimal'>Adopt-An-Animal</Link>
                    <Link href='/donate#store'>Store</Link>
                </div>
            </div>
            <div className="layout">
                <p className={styles.copyright}>© 2023-2027 Suraksha. All Rights Reserved</p>
                <Link href="/sources">Sources</Link>
            </div>
        </footer>
    )
}