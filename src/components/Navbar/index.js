import Link from "next/link";
import Button from "@/components/Button";
import styles from "./nav.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navbarContent} layout`}>
                <Link href="/"><h5>Suraksha</h5></Link>
                <div className={styles.navLinks}>
                    <Link href="/about-us">About Us</Link>
                    <Link href="/partners">Partners</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/store">Store</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/donate">Donate</Link>
                    <Button type="secondary">Support Us</Button>
                </div>
            </div>
        </nav>
    )
}