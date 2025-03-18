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
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;