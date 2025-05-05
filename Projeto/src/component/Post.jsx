import styles from "./Post.module.css"
import { Comment } from './Comment';
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow} from 'date-fns';
import { ptBR } from "date-fns/locale";
import { useState } from "react";

export function Post({ author , publishedAt, content}){
    const [comments, setComments] = useState([
        "1"
    ]);


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm", {
        locale: ptBR
    })

    const [newCommentText, setnewCommentText] = useState('')

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const isNewCommentEmpty = newCommentText.length == 0

    function handleCreateNewComment(event) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setnewCommentText('');
    }
    
    function HandleNewCommentChange(event) {
        event.target.setCustomValidity('');
        setnewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Obrigatório')
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
                        if (line.type === "paragraph") {
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === "link") {
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                })}
            </div>
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
                name="comment"
                placeholder="Deixe seu comentario"
                onChange={HandleNewCommentChange}
                value={newCommentText}
                onInvalid={handleNewCommentInvalid}
                required
            />
            <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return( 
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                )    
            })}
        </div>
    </article>
   )
    
} 

