"use client";

import Input from '@/components/TextInput';
import Button from '@/components/Button';
import styles from './checkout.module.css';
import Image from 'next/image';
import useDarkImage from '@/hooks/darkenImage';
import classNames from '@/hooks/classnames';
import { useContext, useState } from 'react';
import StoreContext from '@/components/StoreContext';
import Counter from '@/components/Counter';
import useRedirectFunction from '@/hooks/useRedirectFunction';

const stageClasses = [styles.left, styles.center, styles.right];

export default function Checkout() {
    const darken = useDarkImage();
    const [stage, changeStage] = useState(0);
    const { items, getItemName, removeItem, getTotalCost } = useContext(StoreContext);

    const next = () => {
        changeStage(prev => {
            if (prev == 2) {
                return prev;
            }
            return prev + 1;
        })
    }

    const back = () => {
        changeStage(prev => {
            if (prev != 0) {
                return prev - 1;
            }
            return prev;
        })
    }

    const total = getTotalCost();
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
                        {stage == 0 && <BasicInfo next={next} />}
                        {stage == 1 && <BillingInfo next={next} back={back} />}
                        {stage == 2 && <Completion back={back} />}
                    </div>
                    <div className={styles.orderSummary}>
                        <div className={styles.tabSelect}>
                            <div className={classNames(styles.currentBg, stageClasses[stage])} />
                            <a className={stage == 0 ? styles.current : undefined}>Basic Info</a>
                            <a className={stage == 1 ? styles.current : undefined}>Billing Info</a>
                            <a className={stage == 2 ? styles.current : undefined}>Completion</a>
                        </div>
                        <h6>Order Summary</h6>
                        {total != 0 ?
                        <>
                            <div className={styles.orderItems}>
                                {
                                    Object.keys(items).map(key => (
                                        <>
                                            <p className="caption">{getItemName(key)}</p>
                                            <Counter type="tinted" val={items[key].quantity} onChange={(v) => {
                                                stage != 2 && removeItem(key, items[key].quantity - v, items[key].price);
                                            }} />
                                            <p style={{textAlign: "right"}}>${Math.round(items[key].price * items[key].quantity * 100) / 100}</p>
                                        </>
                                    ))
                                }
                            </div>
                            <hr style={{ width: "100%" }} />
                            <div className={styles.orderItem}>
                                <p className='caption'>Subtotal</p>
                                <p>${Math.round(total * 100) / 100}</p>
                            </div>
                            <div className={styles.orderItem}>
                                <p className="caption">Tax</p>
                                <p>${Math.round((total / 10) * 100) / 100}</p>
                            </div>
                            <div className={styles.orderItem}>
                                <p className="caption">Shipping</p>
                                <p>$3.00</p>
                            </div>
                            <div className={styles.orderItem}>
                                <p className="caption">Total</p>
                                <p>${Math.round((total * 1.1 + 3) * 100) / 100}</p>
                            </div>
                        </>
                        :
                        <p>Cart is Empty</p>}
                    </div>
                </div>
            </section>
        </>
    )
}

const BasicInfo = ({ next }) => {
    const [info, changeInfo] = useState({
        fname: "",
        lname: "",
        email: "",
        tel: "",
        dedication: ""
    });

    const handleChange = (e) => {
        changeInfo(prev => {
            prev[e.target.name] = e.target.value;
            return { ...prev };
        })
    }

    const handleSubmit = () => {
        let complete = true;
        Object.keys(info).forEach(key => {
            if (info[key].length == 0) complete = false;
        });
        complete && next();
    }

    return (
        <div className={styles.basicInfo}>
            <h2>Basic Info</h2>
            <div className={styles.nameInfo}>
                <Input name="fname" placeholder="First Name*" value={info.fname} onChange={handleChange} />
                <Input name="lname" placeholder="Last Name*" value={info.lname} onChange={handleChange} />
            </div>
            <Input name="email" placeholder="Email Address*" value={info.email} onChange={handleChange} />
            <Input name="tel" placeholder="Phone Number" value={info.tel} onChange={handleChange} />
            <Input name="dedication" placeholder="Dedication Message" value={info.dedication} onChange={handleChange} />
            <Button onClick={handleSubmit}>Next</Button>
        </div>
    )
}

const BillingInfo = ({ back, next }) => {

    const [info, changeInfo] = useState({
        address: "",
        city: "",
        state: "",
        zip: "",
        card: "",
        expiration: "",
        cvv: ""
    });

    const handleChange = (e) => {
        changeInfo(prev => {
            prev[e.target.name] = e.target.value;
            return { ...prev };
        })
    }

    const handleSubmit = () => {
        let complete = true;
        Object.keys(info).forEach(key => {
            if (info[key].length == 0) complete = false;
        });
        complete && next();
    }

    return (
        <div className={styles.basicInfo}>
            <h2>Billing Info</h2>
            <Input name="address" autocomplete="street-address" placeholder="Street Address" onChange={handleChange} value={info.address} />
            <div className={styles.nameInfo} >
                <Input name="city" placeholder="City" onChange={handleChange} value={info.city} />
                <Input name="state" placeholder="State" onChange={handleChange} value={info.state} />
                <Input name="zip" placeholder="Zip" onChange={handleChange} value={info.zip} />
            </div>
            <Input name="card" placeholder="Card Number" onChange={handleChange} value={info.card} />
            <div className={styles.nameInfo}>
                <Input name="expiration" placeholder="Exp. Date" onChange={handleChange} value={info.expiration} />
                <Input name="cvv" placeholder="CVV" onChange={handleChange} value={info.cvv} />
            </div>
            <div className={styles.navigators}>
                <Button onClick={back}>Back</Button>
                <Button onClick={handleSubmit}>Next</Button>
            </div>
        </div>
    )
}

const Completion = ({ back }) => {
    const homeRedirect = useRedirectFunction("/");
    const {clearCart} = useContext(StoreContext);

    return (
        <div className={styles.basicInfo}>
            <h2>Order Placed.</h2>
            <h6>Thank you for your contribution to our cause. You will receive an email shortly with the details of your order.</h6>
            <Button onClick={() => {
                clearCart();
                homeRedirect();
            }}>Done</Button>
        </div>
    )
}