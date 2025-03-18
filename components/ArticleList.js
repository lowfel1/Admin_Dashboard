import styles from '../../styles/Admin.module.css';

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.articleList}>
      <h2>Liste des articles</h2>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.author}</td>
              <td>{article.date}</td>
              <td>
                <button>Valider</button>
                <button>Modifier</button>
                <button>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;