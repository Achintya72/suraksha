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
                <Image src="/store/store_background.jpg" style={darken} fill alt="A rhino walking"/>
                <div className={classNames("layout", styles.storeContent)}>
                    <h4>Our Store</h4>
                    <h1>All profits go directly to furthering our cause.</h1>
                </div>
            </section>
            <section className={classNames("layout", styles.items)}>
                <h2>Items</h2>
                <div className={styles.itemGrid}>
                    <StoreCard title="Suraksha Elephant" price="$23.99" image="elephant"/>
                    <StoreCard title="Suraksha Giraffe" price="$23.99" image="giraffe"/>
                    <StoreCard title="Suraksha Rhino" price="$23.99" image="rhino"/>
                    <StoreCard title="Suraksha Panda" price="$23.99" image="panda"/>
                    <StoreCard title="Suraksha Deer" price="$23.99" image="deer"/>
                    <StoreCard title="Surakhsa Cheetah" price="$23.99" image="cheetah"/>
                </div>
            </section>
        </>
    )
}