import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"
import { useState } from 'react';

export function Comment({ content , onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

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
                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer className={styles.commentFooter}>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
