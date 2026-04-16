import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>NoteHub</h1>

      <p className={styles.text}>
        Welcome to Notes App
      </p>

      <Link href="/notes" className={styles.link}>
        Go to Notes →
      </Link>
    </div>
  );
}