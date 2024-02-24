import qrCode from './assets/image-qr-code.png';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.mainBody}>
     <figure className={styles.figureWrapper}>
        <div className={styles.figureImage}>
          <img src={qrCode} alt='Check QR' className={styles.figureImageComponent}  />
        </div>
        {/* aside */}
        <aside className={styles.textWrapper}>
          <h1>Improve your front-end skills by building projects</h1>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </aside>

     </figure>
    </div>
  );
}

          
export default App;