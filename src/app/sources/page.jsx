import classNames from "@/hooks/classnames";
import styles from "./sources.module.css";


export default function Sources() {
    return (
        <section className={classNames(styles.sources, "layout")} id="Sources">
            <PageCard name="Home Page">
                <p>https://unsplash.com/photos/brown-deer-beside-plants-favQn8WgRyk</p>
                <p>https://unsplash.com/photos/brown-and-black-tiger-lying-on-ground-Q_3WmguWgYg</p>
                <p>https://unsplash.com/photos/brown-giraffe-on-brown-grass-field-during-daytime-2n3tcXLZjxg</p>
                <p>https://unsplash.com/photos/white-and-brown-bird-on-green-grass-during-daytime-d5c8vfGzlwQ</p>
                <p>https://unsplash.com/photos/person-holding-green-plant-on-black-pot-CbZh3kaPxrE</p>
                <p>https://unsplash.com/photos/brown-rock-formation-during-daytime-asHMHLCdv7M</p>
                <p>https://unsplash.com/photos/earth-is-more-valuable-than-money-signage-RuRYRswYDkk</p>
                <p>https://unsplash.com/photos/three-clear-wine-glasses-on-the-desk-P1djASp78Ss</p>
                <p>https://icon-sets.iconify.design/mdi/flower/</p>
                <p>https://icon-sets.iconify.design/tabler/restore/</p>
                <p>https://icon-sets.iconify.design/game-icons/elephant/</p>
                <p>https://icon-sets.iconify.design/material-symbols/forest/</p>

            </PageCard>
            <PageCard name="Footer">
                <p>https://icon-sets.iconify.design/ic/baseline-facebook/</p>
                <p>https://icon-sets.iconify.design/mdi/linkedin/</p>
                <p>https://icon-sets.iconify.design/devicon/twitter/</p>
                <p>https://icon-sets.iconify.design/mdi/instagram/</p>
            </PageCard>
            <PageCard name="About Us">
                <p>https://unsplash.com/photos/brown-elephant-on-brown-field-during-daytime-evDuzZd8Kc0</p>
                <p>https://icon-sets.iconify.design/octicon/law-16/</p>
                <p>https://icon-sets.iconify.design/game-icons/tiger-head/</p>
                <p>https://unsplash.com/photos/wolf-with-open-mouth-QZ2EQuPpQJs</p>
                <p>https://unsplash.com/photos/white-concrete-pillar-during-daytime-0LUqdizULdY</p>
                <p>https://unsplash.com/photos/lake-and-trees-HeEJU3nrg_0</p>
                <p>https://unsplash.com/photos/white-and-brown-bald-eagle-selective-focus-photography-byw35Ua2cEM </p>
                <p>https://unsplash.com/photos/green-pine-trees-near-body-of-water-during-daytime-YbbRa8ROM6c </p>
                <p>https://unsplash.com/photos/green-leafed-trees-2Y4dE8sdhlc </p>
            </PageCard>

            <PageCard name="Partners">
                <p>https://unsplash.com/photos/tigers-fighting-on-swamp-76dgUcMupv4</p>
                <p>https://unsplash.com/photos/person-wearing-leopard-print-sneakers-wiuP1gOyBqQ</p>
                <p>https://www.dailytoreador.com/news/texas-tech-students-join-coca-cola-to-raise-awareness/article_295a6c1c-1fba-11e1-8382-0019bb30f31a.html</p>
                <p>https://icon-sets.iconify.design/simple-icons/nike/</p>
                <p>https://icon-sets.iconify.design/simple-icons/cocacola/</p>
                <p>https://icon-sets.iconify.design/simple-icons/adidas/</p>
                <p>https://icon-sets.iconify.design/mdi/microsoft/</p>
                <p>https://icon-sets.iconify.design/basil/google-solid/</p>
                <p>https://icon-sets.iconify.design/ic/baseline-apple/</p>
                <p>https://icon-sets.iconify.design/logos/ibm/</p>
                <p>https://icon-sets.iconify.design/simple-icons/uniqlo/</p>
                <p>https://icon-sets.iconify.design/simple-icons/mcdonalds/</p>
                <p>https://icon-sets.iconify.design/simple-icons/logitech/</p>
                <p>https://icon-sets.iconify.design/mdi/twitch/</p>
                <p>https://icon-sets.iconify.design/cib/boeing/</p>
                <p>https://icon-sets.iconify.design/tabler/brand-pepsi/</p>
                <p>https://icon-sets.iconify.design/ic/baseline-paypal/</p>
                <p>https://icon-sets.iconify.design/cib/stripe/</p>
                <p>https://icon-sets.iconify.design/ic/baseline-tiktok/</p>
            </PageCard>
            <PageCard name="Events">
                <p>https://unsplash.com/photos/deer-on-grass-field-photography-3z8kVEYCYxY</p>
                <p>https://icon-sets.iconify.design/carbon/location-filled/</p>
                <p>https://www.floridakayak.com/wp-content/uploads/2014/07/Myakka-4-free.jpg</p>
            </PageCard>
            <PageCard name="Store">
                <p>https://unsplash.com/photos/gray-rhinoceros-in-the-middle-of-brown-bare-bushes-tVobOsLSZvs</p>
                <p>https://icon-sets.iconify.design/bxs/cart-add/</p>
                <p>https://unsplash.com/photos/pride-of-lion-on-field-L4-BDd01wmM</p>
            </PageCard>
        </section>
    )
}


const PageCard = ({ name, children }) => (
    <div className={styles.card}>
        <h6>{name}</h6>
        {children}
    </div>
);