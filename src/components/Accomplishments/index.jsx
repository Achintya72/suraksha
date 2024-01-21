"use client";

import styles from "@/app/about-us/about.module.css";
import Accomplishment from "../Accomplishment";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Accomplishments() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
    return (
        <section ref={ref} className={styles.accomplishments} id="ourAccomplishments">
                <div className={styles.accContent}>
                    <h2 className={"layout"}>Our Accomplishments</h2>
                    <motion.div style={{ x }}className={styles.allAccs}>
                        <Accomplishment 
                            alt="cafe" 
                            img="/about/accomplishments1.jpg" 
                            title="Lorem Ipsum" 
                            desc="Lorem ipsum dolor sit amet consectetur. Velit in viverra ut et feugiat massa sed nunc malesuada. Vehicula mattis tristique praesent nibh sem. Facilisi elementum magna orci mauris consequat malesuada commodo. Sem proin habitasse egestas amet sollicitudin venenatis aenean id. Habitant mattis ornare netus sit. Purus ipsum venenatis id consequat eu sed in molestie. Vulputate eros quam ac."
                        />
                        <Accomplishment 
                            alt="cafe" 
                            img="/about/accomplishments1.jpg" 
                            title="Lorem Ipsum" 
                            desc="Lorem ipsum dolor sit amet consectetur. Velit in viverra ut et feugiat massa sed nunc malesuada. Vehicula mattis tristique praesent nibh sem. Facilisi elementum magna orci mauris consequat malesuada commodo. Sem proin habitasse egestas amet sollicitudin venenatis aenean id. Habitant mattis ornare netus sit. Purus ipsum venenatis id consequat eu sed in molestie. Vulputate eros quam ac."
                        />
                        <Accomplishment 
                            alt="cafe" 
                            img="/about/accomplishments1.jpg" 
                            title="Lorem Ipsum" 
                            desc="Lorem ipsum dolor sit amet consectetur. Velit in viverra ut et feugiat massa sed nunc malesuada. Vehicula mattis tristique praesent nibh sem. Facilisi elementum magna orci mauris consequat malesuada commodo. Sem proin habitasse egestas amet sollicitudin venenatis aenean id. Habitant mattis ornare netus sit. Purus ipsum venenatis id consequat eu sed in molestie. Vulputate eros quam ac."
                        />
                    </motion.div>
                </div>
            </section>
    )
}