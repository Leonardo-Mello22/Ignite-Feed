import styles from './Header.module.css'
import myignite from '../assets/my-ignite.png';

export function Header(){
   return(
    <header className={styles.header}>
      <img src ={myignite} alt="logo do ignite" />
    </header>
   );
}