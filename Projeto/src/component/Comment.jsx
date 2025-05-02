import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://thaka.bing.com/th/id/OIP.ZcHTFaNcVC6uYNvf8wQSqwHaHa?rs=1&pid=ImgDetMain" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lancelot</strong>
                            <time dateTime="2025-04-28 19:27">Cerca de 'X' horas atrás</time>
                        </div>
                        <button title='Deletar'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                {/* Agora o botão está DENTRO da commentBox, mas FORA da caixa branca */}
                <footer className={styles.commentFooter}>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
