import Sidebar from '../../components/admin/Sidebar';
import TopBar from '../../components/admin/TopBar';
import Settings from '../../components/admin/Paramètres';
import styles from '../../styles/Admin.module.css';

const Parametres = () => {
  const handleSave = (e) => {
    e.preventDefault();
    alert('Paramètres sauvegardés !');
  };

  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.content}>
          <h1>Paramètres</h1>
          <form onSubmit={handleSave}>
            <div>
              <label>Thème</label>
              <select>
                <option value="light">Clair</option>
                <option value="dark">Sombre</option>
              </select>
            </div>
            <div>
              <label>Notifications</label>
              <input type="checkbox" />
            </div>
            <button type="submit">Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Parametres;