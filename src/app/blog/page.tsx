import styles from './page.module.scss';

type BlogPageProps = {};

const BlogPage = (props: BlogPageProps) => {
  return (
    <div className={styles.container}>
      <h1>Blog Page</h1>
    </div>
  );
};

export default BlogPage;
