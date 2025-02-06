import styles from './page.module.scss';

type DashboardPageProps = {};

const DashboardPage = (props: DashboardPageProps) => {
  return (
    <div className={styles.container}>
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;
