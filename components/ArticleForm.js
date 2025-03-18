import { useState } from 'react';
import styles from '../../styles/Admin.module.css';

const ArticleForm = ({ article }) => {
  const [title, setTitle] = useState(article ? article.title : '');
  const [content, setContent] = useState(article ? article.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={styles.articleForm}>
      <h2>{article ? 'Modifier l\'article' : 'Créer un nouvel article'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Contenu</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">{article ? 'Modifier' : 'Créer'}</button>
      </form>
    </div>
  );
};

export default ArticleForm;