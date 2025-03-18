import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import ArticleForm from '../../components/ArticleForm';
import styles from '../../styles/Admin.module.css';

const CreateArticlePage = () => {
  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.content}>
          <h1>Créer un nouvel article</h1>
          <ArticleForm />
        </div>
      </div>
    </div>
  );
};

export default CreateArticlePage;