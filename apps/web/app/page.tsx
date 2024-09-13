import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Almost There!</h1>
        <p className={styles.description}>
          Good things take time... and maybe a few cat videos too.
        </p>
        <div className={styles.spinner}></div>
        <p className={styles.tagline}>Launch date? Even we’re not sure. Stay tuned!</p>
        <p className={styles.hidden}>PS: We're probably procrastinating right now.</p>
      </main>
    </div>
  );
}
