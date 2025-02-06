import Link from 'next/link';
import styles from './button.module.scss';

type Props = {
  text: string;
  url: string;
};

export const Button = ({ text, url }: Props) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};
