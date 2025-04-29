import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
          <img 
            className={styles.cover} 
            src="https://www.shutterstock.com/shutterstock/videos/3600551359/thumb/10.jpg?ip=x480"
          />  
          <div className={styles.profile}>
            <img className={styles.avatar}src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-6adc-61f6-a452-a859010564e5/raw?se=2025-04-28T23%3A12%3A27Z&sp=r&sv=2024-08-04&sr=b&scid=ead9457b-47a6-5ecb-a38b-2382af79b1d6&skoid=a47cd303-16a2-427e-8efb-2ce406116005&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-28T20%3A05%3A35Z&ske=2025-04-29T20%3A05%3A35Z&sks=b&skv=2024-08-04&sig=qD2ZI41bgibTJfusBGlYhE8hhZgA4%2BPXURoOMw2%2Bl6U%3D" alt="" />
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

