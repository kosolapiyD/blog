import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/button/button';

type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url='/portfolio' text='See Our Works' />
      </div>
      <div className={styles.item}>
        <Image src={'/hero.png'} alt='' className={styles.img} fill />
      </div>
    </div>
  );
};

export default HomePage;
