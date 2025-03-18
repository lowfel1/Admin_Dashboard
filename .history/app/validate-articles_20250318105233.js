import Sidebar from '../../components/admin/Sidebar';
import TopBar from '../../components/admin/TopBar';
import ArticleList from '../../components/ArticleList';
import styles from '../../styles/Admin.module.css';

const ValidateArticlesPage = () => {
  // Exemple d'articles en attente de validation
  const pendingArticles = [
    { id: 1, title: 'Article en attente 1', author: 'Auteur 1', date: '2023-10-01' },
    { id: 2, title: 'Article en attente 2', author: 'Auteur 2', date: '2023-10-02' },
  ];

  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.content}>
          <h1>Validation des articles</h1>
          <ArticleList articles={pendingArticles} />
        </div>
      </div>
    </div>
  );
};

export default ValidateArticlesPage;