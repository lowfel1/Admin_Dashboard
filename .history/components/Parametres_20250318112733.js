import styles from '../../styles/Admin.module.css';

const Settings = () => {
  return (
    <div className={styles.Settings}>
      <h2>Settings</h2>
      <form>
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
  );
};

export default Paramètres;