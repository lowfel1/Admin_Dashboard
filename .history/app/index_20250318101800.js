import Sidebar from '../../components/admin/Sidebar';
import TopBar from '../../components/admin/TopBar';
import styles from '../../styles/Admin.module.css';

const Dashboard = () => {
  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.content}>
          <h1>Tableau de bord</h1>
            <div className={styles.stats}>
                <div className={styles.statCard}>
                <h2>Articles publiés</h2>
                <p>25</p>
                </div>
                <div className={styles.statCard}>
                <h2>Articles en attente</h2>
                <p>3</p>
                </div>
                <div className={styles.statCard}>
                <h2>Utilisateurs</h2>
                <p>10</p>
                </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;