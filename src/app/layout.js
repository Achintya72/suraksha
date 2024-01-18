import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';

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
        <Navbar />
        {children}  
      </body>
    </html>
  )
}
