"use client";

import Link from "next/link";
import Button from "@/components/Button";
import styles from "./nav.module.css";
import classNames from "../../hooks/classnames";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Icon from "../Icon";
import { useContext, useState } from "react";
import useRedirectFunction from "@/hooks/useRedirectFunction";
import StoreContext from "../StoreContext";
import { motion, AnimatePresence } from "framer-motion";

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {
            delay: 0.7,
        }
    }
};

const cartVariants = {
    closed: {
        opacity: 1,
        transition: {
            delay: 3,
        }
    },
    open: {
        opacity: 0,
        transition: {
            delay: 3,
        }
    }
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.07,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.07,
            staggerDirection: 1
        }
    }
};

export default function Navbar() {
    const [sawGala, changeGala] = useState(true);
    const { getTotalItems } = useContext(StoreContext);
    const donateRedirect = useRedirectFunction("/donate")
    const cartItems = getTotalItems();
    const scrollPosition = useScrollPosition();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={classNames(styles.navbar, scrollPosition > 20 ? styles.scrolled : styles.top)}>
            <div className={classNames(styles.galaPopup, sawGala ? null : styles.hide)}>
                <div className={classNames(styles.galaText, "layout")}>
                    <p className="caption">Register for Our <Link style={{ textDecoration: "underline"}} href="/events#annualGala">Annual Suraksha Gala</Link></p>
                    <Icon size={24} name="close" onClick={() => changeGala(false)} />
                </div>
            </div>
            <div className={`${styles.navbarContentDesktop} layout`}>
                <Link href="/"><h5>Suraksha</h5></Link>
                <div className={styles.navLinks}>
                    <Link href="/about-us">About Us</Link>
                    <Link href="/partners">Partners</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/store">Store</Link>
                    <Link href="/checkout" style={{ position: "relative", height: "20px", width: "20px" }}>
                        <Icon name="add" size={20} />
                        <p className={styles.items}>{cartItems > 9 ? "9+" : cartItems}</p>
                    </Link>
                    <Button type={scrollPosition > 20 ? "primary" : "secondary"} onClick={donateRedirect}>Support Us</Button>
                </div>
            </div>
            <div className={`${styles.navbarContentMobile} layout`}>
                <Link href="/"><h5>Suraksha</h5></Link>
                <motion.div initial={false} animate={isOpen ? "open" : "closed"} className={styles.btnContainer}>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <svg width="23" height="23" viewBox="0 0 23 23">
                            <motion.path fill='transparent' strokeWidth="3" stroke={isOpen ? "black" : "currentColor"} strokeLinecap="round" variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" }
                            }}/>
                            <motion.path fill='transparent' strokeWidth="3" stroke={isOpen ? "black" : "currentColor"}strokeLinecap="round" d="M 2 9.423 L 20 9.423"
                            variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                            }}
                            transition={{ duration: 0.1 }}/>
                            <motion.path fill='transparent' strokeWidth="3" stroke={isOpen ? "black" : "currentColor"}strokeLinecap="round" variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                            }}/>
                        </svg>
                    </div>
                </motion.div>
                {!isOpen && 
                <AnimatePresence>
                    <motion.div initial="closed" animate={isOpen ? "open" : "closed"} exit="closed" variants={cartVariants}>
                        <Link href="/checkout" style={{ position: "relative", height: "20px", width: "20px", right: "75px" }}>
                            <Icon name="add" size={20} />
                            <p className={styles.items}>{cartItems > 9 ? "9+" : cartItems}</p>
                        </Link>
                    </motion.div>
                </AnimatePresence>
                }
            </div>
            <div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.aside
                            className={styles.aside}
                            initial={{ width: 0 }}
                            animate={{
                                width: 300
                            }}
                            exit={{
                                width: 0,
                                transition: { delay: 0.7, duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className={styles.container}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={sideVariants}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}
                                >
                                    <Link onClick={() => setIsOpen(false)} href="/about-us">About Us</Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}
                                >
                                    <Link onClick={() => setIsOpen(false)} href="/partners">Partners</Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}
                                >
                                    <Link onClick={() => setIsOpen(false)} href="/events">Events</Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}
                                >
                                    <Link onClick={() => setIsOpen(false)} href="/store">Store</Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}
                                >
                                    <Button type={"primary"} onClick={() => { setIsOpen(false); donateRedirect() }}>Support Us</Button>
                                </motion.div>
                            </motion.div>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </div>
        </nav>

    )
}