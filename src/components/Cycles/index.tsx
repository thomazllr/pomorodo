import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos: </span>

      <div className={styles.cyleDots}>
        <span className={`${styles.cyleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyleDot} ${styles.shortBreak}`}></span>
        <span className={`${styles.cyleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyleDot} ${styles.shortBreak}`}></span>

        <span className={`${styles.cyleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyleDot} ${styles.shortBreak}`}></span>
        <span className={`${styles.cyleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyleDot} ${styles.longBreak}`}></span>
      </div>
    </div>
  );
}
