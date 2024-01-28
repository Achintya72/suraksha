import useDarkImage from "@/hooks/darkenImage";
import styles from "./store.module.css";
import Image from 'next/image';
import classNames from "@/hooks/classnames";
import StoreCard from "@/components/StoreCard";

export default function Store()  {
    const darken = useDarkImage();

    return(
        <>
            <section className={styles.storeMain}>
                <Image src="/home/hero_background.png" style={darken} fill alt="A rhino walking"/>
                <div className={classNames("layout", styles.storeContent)}>
                    <h4>Our Store</h4>
                    <h1>All profits go directly to furthering our cause.</h1>
                </div>
            </section>
            <section className={classNames("layout", styles.items)}>
                <h2>Items</h2>
                <div className={styles.itemGrid}>
                    <StoreCard title="placeholder" price="$23.99" image="placeholder"/>
                    <StoreCard title="placeholder" price="$23.99" image="placeholder"/>
                    <StoreCard title="placeholder" price="$23.99" image="placeholder"/>
                    <StoreCard title="placeholder" price="$23.99" image="placeholder"/>
                    <StoreCard title="placeholder" price="$23.99" image="placeholder"/>
                    <StoreCard title="placeholder" price="$23.99" image="placeholder"/>
                </div>
            </section>
        </>
    )
}