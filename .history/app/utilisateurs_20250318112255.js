import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import utilisateurs from '../../components/utilisateurs';
import styles from '../../styles/Admin.module.css';

const utilisateurs = () => {
  // Exemple de liste d'utilisateurs
  const users = [
    { id: 1, name: 'Utilisateur 1', email: 'user1@example.com', role: 'Admin' },
    { id: 2, name: 'Utilisateur 2', email: 'user2@example.com', role: 'Éditeur' },
  ];

  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.content}>
          <h1>Gestion des utilisateurs</h1>
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
};

export default utilisateurs;