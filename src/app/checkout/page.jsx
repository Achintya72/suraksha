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
                <Image src="/home/hero_background.png" style={darken} fill alt="A rhino walking"/>
                <div className={classNames("layout", styles.checkoutContent)}>
                    <h4>Payment Portal</h4>
                    <h1>Thank you for supporting us.</h1>
                </div>
            </section>
            <section className={classNames("layout", styles.checkoutDetails)}>
                <h2>Personal Information</h2>
                <div className={styles.sideBySide}>
                    <div className={styles.inputs}>
                        <div className={styles.inputGroup}>
                            <CheckoutInput name="First Name*" placeholder="John"/>
                            <CheckoutInput name="Last Name*" placeholder="Doe"/>
                        </div>
                        <CheckoutInput name="Email Address*" placeholder="johndoe@gmail.com"/>
                        <CheckoutInput name="Phone Number*" placeholder="+1 111 222 3333"/>
                        <CheckoutInput name="Street Address*" placeholder="308 Negra Aroya Lane"/>
                        <div className={styles.inputGroup}>
                            <CheckoutInput flex={2} name="City*" placeholder="Albuquerque"/>
                            <CheckoutInput name="State*" placeholder="New Mexico"/>
                            <CheckoutInput name="Zip Code*" placeholder="87104"/>
                        </div>
                        <h2>Personal Information</h2>
                        <div className={styles.inputGroup}>
                            <Button type='primary'>
                                Credit Card
                            </Button>
                            <Button type='primary'>
                                PayPal
                            </Button>
                        </div>
                        <CheckoutInput name="Credit Card Number*" placeholder="4147 0000 0000 0000"/>
                        <div className={styles.inputGroup}>
                            <CheckoutInput name="Expiration Date*" placeholder="2/27"/>
                            <CheckoutInput name="CVV*" placeholder="123"/>
                        </div>
                    </div>  
                </div>
            </section>
        </>
    )
}

function CheckoutInput({name, placeholder, flex=1}) {
    return (
        <div className={flex == 1 ? styles.input1 : styles.input2}>
            <h6>{name}</h6>
            <div className={styles.border}>
                <Input name={name} placeholder={placeholder}/>
            </div>
        </div>
    )
}