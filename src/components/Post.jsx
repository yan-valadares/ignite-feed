import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([])

    const [newCommentText, setNewCommentText] = useState('')

    const formattedPublishDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function deleteComment(commmentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commmentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentEmpty = newCommentText.length === 0 
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

            <time title={formattedPublishDate} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
            </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.publishedAt}>{line.content}</p>
                    } else if(line.type === 'link'){
                        return <p key={line.publishedAt}><a href={line.content}>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='input'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(commment => {
                    return (
                        <Comment 
                            key={commment} 
                            content={commment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}