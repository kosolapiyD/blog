import styles from './page.module.scss';

type AboutPageProps = {};

const AboutPage = (props: AboutPageProps) => {
  return (
    <div className={styles.container}>
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;
