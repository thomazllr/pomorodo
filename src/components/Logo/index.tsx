import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <TimerIcon />
        <span>Pomorodo</span>
      </a>
    </div>
  );
}
