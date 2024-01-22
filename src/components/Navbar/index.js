"use client";

import Link from "next/link";
import Button from "@/components/Button";
import styles from "./nav.module.css";
import classNames from "../../hooks/classnames";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Icon from "../Icon";
import { useState } from "react";

export default function Navbar() {
    const [sawGala, changeGala] = useState(true);

    const scrollPosition = useScrollPosition();
    return (
        <nav className={classNames(styles.navbar, scrollPosition > 20 ? styles.scrolled : styles.top)}>
            <div className={classNames(styles.galaPopup, sawGala ? null : styles.hide)}>
                <div className={classNames(styles.galaText, "layout")}>
                    <p className="caption">Register for Our Annual Suraksha Gala</p>
                    <Icon size={24} name="close" onClick={() => changeGala(false)} />
                </div>
            </div>
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