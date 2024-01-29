import Input from '@/components/TextInput';
import Button from '@/components/Button';
import styles from './checkout.module.css';
import Image from 'next/image';
import useDarkImage from '@/hooks/darkenImage';
import classNames from '@/hooks/classnames';

export default function Checkout() {
    const darken = useDarkImage();

    return (
        <>
            <section className={styles.checkoutMain}>
                <Image src="/checkout/checkout_bg.jpg" style={darken} fill alt="A rhino walking" />
                <div className={classNames("layout", styles.checkoutContent)}>
                    <h4>Payment Portal</h4>
                    <h1>Thank you for supporting us.</h1>
                </div>
            </section>
            <section className={styles.checkoutBg}>
                <div className={classNames("layout", styles.checkoutDetails)}>
                    <div className={styles.forms}>
                        <BasicInfo />
                    </div>
                    <div className={styles.orderSummary}>
                        <h6>Order Summary</h6>
                    </div>
                </div>
            </section>
        </>
    )
}

const BasicInfo = () => {
    return (
        <div className={styles.basicInfo}>
            <h2>Basic Info</h2>
            <div className={styles.nameInfo}>
                <Input name="fname" placeholder="First Name"/>
                <Input name="lname" placeholder="Last Name" />
            </div>
            <Input name="email" placeholder="Email Address"/>
            <Input name="tel" placeholder="Phone Number" />
            <Input name="dedication" placeholder="Dedication Message" />
            <Button>Next</Button>
        </div>
    )
}