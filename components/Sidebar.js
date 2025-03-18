import Link from 'next/link';
import styles from '../../styles/Admin.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link href="/admin">📌 Tableau de bord</Link></li>
        <li><Link href="/admin/articles">📝 Articles</Link></li>
        <li><Link href="/admin/utilisateurs">👥 Utilisateurs</Link></li>
        <li><Link href="/admin/Paramètres">⚙️ Paramètres</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;