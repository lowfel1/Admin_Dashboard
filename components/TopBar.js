import styles from '../../styles/Admin.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="🔍 Rechercher..." />
      </div>
      <div className={styles.notifications}>
        <button>🔔</button>
      </div>
      <div className={styles.profile}>
        <span>👤 Admin</span>
      </div>
    </div>
  );
};

export default TopBar;