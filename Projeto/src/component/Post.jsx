import styles from "./Post.module.css"
import { Comment } from './Comment';
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow} from 'date-fns';
import { ptBR } from "date-fns/locale";
import { useState } from "react";

export function Post({ author , publishedAt, content}){
    const [comments, setComments] = useState([
        1,
        2
    ]);


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, comments.length + 1]);
        console.log('ola')
    }
    
    return(     
    <article className={styles.post}>
        <header>
        <div className={styles.author}>
            <Avatar src={author.avatarUrl}/>
            <div className={styles.authorInfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
            </div>

        </div>
            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
            </time>
        </header>
        <div>

            <div className={styles.content}>
               {content.map(line => {
                if(line.type == "paragraph"){
                    return <p>{line.content}</p>
                }else if(line.type == "link"){
                    return <p><a href="#">{line.content}</a></p>
                }
               })}
            </div>
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
                placeholder="Deixe seu comentario"
            />
            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return <Comment />
            })}
        </div>
    </article>
   )
    
} 

