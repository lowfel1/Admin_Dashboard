import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/admin/TopBar';
import ArticleList from '../../components/admin/ArticleList';
import styles from '../../styles/Admin.module.css';

const ArticlesPage = () => {
  const articles = [
    { id: 1, title: 'Article 1', author: 'Auteur 1', date: '2023-10-01' },
    { id: 2, title: 'Article 2', author: 'Auteur 2', date: '2023-10-02' },
    // Ajoutez plus d'articles ici
  ];

  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.content}>
          <h1>Gestion des articles</h1>
          <ArticleList articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;