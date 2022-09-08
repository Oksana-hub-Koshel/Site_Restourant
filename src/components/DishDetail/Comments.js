import { CommentForm } from './CommentForm';
import './Comments.css';
import { Stagger, Fade } from 'react-animation-components';



export const Comments = ({ comments, postComment, dishId, resetCommentForm }) => {

    return (

        <div className="comments_block">
            <h1>Comments</h1>
            <br />
            <Stagger in>
                {comments.map(comment => (
                    <Fade in>
                        <div key={comment.id}>
                            <p>{comment.comment}</p>
                            <h5>{comment.author}</h5>
                            <h6>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</h6>
                            <br /><br />
                        </div>
                    </Fade>
                ))}
            </Stagger>

            <CommentForm dishId={dishId} postComment={postComment} resetCommentForm={resetCommentForm} />

        </div >
    )


}





