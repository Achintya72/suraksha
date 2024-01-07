import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'
import styles from "./nav.module.css";
import Link from 'next/link';
import Button from '@/components/button';

const inter = Inter({ subsets: ['latin'], weight:['400', '700', '600'], variable: "--font-inter" });
const dm_serif = DM_Serif_Display({ subsets: ['latin'], weight:"400", variable: "--font-dm-serif"});


export const metadata = {
  title: 'Suraksha',
  description: 'Wildlife Protection Non-Profit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${inter.variable} ${dm_serif.variable}`}>
        <nav className={styles.navbar}>
          <div className={`${styles.navbarContent} layout`}>
          <h5>Suraksha</h5>
          <div className={styles.navLinks}>
            <Link href="/about-us">About Us</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/events">Events</Link>
            <Link href="/store">Store</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/donate">Donate</Link>
            <Button type="secondary">Support Us</Button>
          </div>
          </div>
          </nav>
        {children}  
      </body>
    </html>
  )
}
