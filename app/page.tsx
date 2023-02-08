import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      

      <div className={styles.center}>
        <h1> HOME </h1>
      </div>

      <Link href="/posts"> To Posts </Link>
      <Link href="/account"> To Accounts </Link>


    </main>
  )
}
