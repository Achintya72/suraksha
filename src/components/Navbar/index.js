"use client";

import Link from "next/link";
import Button from "@/components/Button";
import styles from "./nav.module.css";
import classNames from "../../hooks/classnames";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function Navbar() {
    const scrollPosition = useScrollPosition();
    return (
        <nav className={classNames(styles.navbar, scrollPosition > 20 ? styles.scrolled : styles.top)}>
            <div className={`${styles.navbarContent} layout`}>
                <Link href="/"><h5>Suraksha</h5></Link>
                <div className={styles.navLinks}>
                    <Link href="/about-us">About Us</Link>
                    <Link href="/partners">Partners</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/store">Store</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/donate">Donate</Link>
                    <Button type={scrollPosition > 20 ? "primary" : "secondary"}>Support Us</Button>
                </div>
            </div>
        </nav>
    )
}