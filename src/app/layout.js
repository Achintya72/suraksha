import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight:['400', '700', '600'], display: "swap", variable: "--font-inter" });
const dm_serif = DM_Serif_Display({ subsets: ['latin'], weight:"400", display: "swap", variable: "--font-dm-serif"});


export const metadata = {
  title: 'Suraksha',
  description: 'Wildlife Protection Non-Profit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dm_serif.className}`}>{children}</body>
    </html>
  )
}
