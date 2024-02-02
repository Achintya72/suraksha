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
                            desc="Through our program's dedicated restoration efforts utilizing captive breeding, we have achieved a significant milestone by successfully removing five endangered species from the endangered species list. Our commitment to wildlife restoration and captive breeding programs has played a pivotal role in revitalizing populations that were once on the verge of disappearance. By providing a secure environment for breeding and nurturing these species, we have not only safeguarded their existence but also bolstered their numbers, ensuring a brighter future for biodiversity."
                        />
                        <Accomplishment 
                            alt="cafe" 
                            img="/about/accomplishments2.jpg" 
                            title="Habitat Conservation" 
                            desc="Our program's unwavering commitment to conservation has led to the establishment of seven national parks worldwide, an amazing milestone in safeguarding precious ecosystems. Through strong advocacy, we helped establish the preservation of natural habitats and biodiversity hotspots, protecting our Earth’s beautiful landscapes for generations to come. Furthermore, our efforts have resulted in the protection of an astounding 37 million acres of land, serving as sanctuaries for diverse flora and fauna."
                        />
                        <Accomplishment 
                            alt="cafe" 
                            img="/about/accomplishments3.jpg" 
                            title="Habitat Restoration" 
                            desc="Thanks to our hard-working volunteers, we have planted tens of thousands of trees and transformed millions of acres of once-barren land into thriving green landscapes. By employing innovative techniques and fostering community engagement, we have breathed new life into ecosystems, mitigating desertification and enhancing biodiversity. Our commitment to reforestation not only beautifies the environment but also provides crucial habitats for wildlife and promotes sustainable land management practices."
                        />
                    </motion.div>
                </div>
            </section>
    )
}