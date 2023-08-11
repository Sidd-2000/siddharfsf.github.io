import Image from 'next/image'
import styles from '@/app/Stylepages/page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <div className={styles.wholeBody}>
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navlogo}>
        <a href='/home'><img className={styles.namImages} src="./DreamXpertlogo1.png" /></a>
        </div>
        <ul className={styles.navul}>
          <li className={styles.ulli}><Link href='/'>Home</Link></li>
          <li className={styles.ulli}><Link href='/about'>about</Link></li>
          <li className={styles.ulli}><Link href='/contact'>contact us</Link></li>
        </ul>
        <a href= '/login' className={styles.login}>Login</a>
      </div>
      <div className={styles.tabcontainer}>
        <a href='#' className={styles.tab}>circket</a>
        <a href='#' className={styles.tab}>hockey</a>
        <a href='#' className={styles.tab}>football</a>
        <a href='#' className={styles.tab}>vally ball</a>
        <a href='#' className={styles.tab}>basket ball</a>
        <a href='#' className={styles.tab}>carrom</a>
        <a href='#' className={styles.tab}>kabaddi</a>
      </div>
      </nav>  
      </div>
        <footer className={styles.footer}>
<p>siddharth
</p>
</footer>
    </main>
  )
}
