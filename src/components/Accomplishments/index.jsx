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
                            title="Wildlife Protection" 
                            desc="Through dedicated restoration efforts and captive breeding, our program successfully removed five species from the endangered list. Our commitment to wildlife revitalization has safeguarded and increased their populations, ensuring a brighter future for biodiversity."
                        />
                        <Accomplishment 
                            alt="cafe" 
                            img="/about/accomplishments2.jpg" 
                            title="Habitat Conservation" 
                            desc="Our program's commitment to conservation achieved a milestone with seven global national parks. Through advocacy, we preserved natural habitats, safeguarding 37 million acres for diverse flora and fauna, ensuring a lasting legacy for future generations."
                        />
                        <Accomplishment 
                            alt="cafe" 
                            img="/about/accomplishments3.jpg" 
                            title="Habitat Restoration" 
                            desc="Our program achieved a milestone with seven global national parks, preserving natural habitats and biodiversity hotspots. Through advocacy, we protected 37 million acres, creating sanctuaries for diverse flora and fauna, securing Earth's landscapes for future generations."
                        />
                    </motion.div>
                </div>
            </section>
    )
}