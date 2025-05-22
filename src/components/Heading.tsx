import styles from './Heading.module.css';

// Desestrutração do Javascript, como eu sei que eu recebo um props eu posso pegar a variável que eu quero direto.

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
