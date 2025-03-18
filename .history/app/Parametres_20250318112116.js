import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import Parametres from '../../components/Parametres';
import styles from '../../styles/Admin.module.css';

const Paramsetres = () => {
  const handleSave = (e) => {
    e.preventDefault();
    alert('Parametres sauvegardés !');
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


export default Parametre;