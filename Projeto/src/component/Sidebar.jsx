import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
          <img 
            className={styles.cover} 
            src="https://www.shutterstock.com/shutterstock/videos/3600551359/thumb/10.jpg?ip=x480"
          />  
          <div className={styles.profile}>
            <Avatar src="https://thaka.bing.com/th/id/OIP.ZcHTFaNcVC6uYNvf8wQSqwHaHa?rs=1&pid=ImgDetMain"/>
            <strong>Lancelot</strong>
            <span>Guerreiro</span>
          </div>
          <footer>
            <a href='#'>
              <PencilLine size={20} /> 
                Editar Perfil
            </a>
          </footer>
        </aside>
    );
}

