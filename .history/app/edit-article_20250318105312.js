import { useRouter } from 'next/router';
import Sidebar from '../../../components/Sidebar';
import TopBar from '../../../components/admin/TopBar';
import ArticleForm from '../../../components/admin/ArticleForm';
import styles from '../../../styles/Admin.module.css';

const EditArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Simuler un article existant
  const article = {
    id: id,
    title: 'Article existant',
    content: 'Contenu de l\'article existant.',
  };

  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.content}>
          <h1>Modifier l'article</h1>
          <ArticleForm article={article} />
        </div>
      </div>
    </div>
  );
};

export default EditArticlePage;