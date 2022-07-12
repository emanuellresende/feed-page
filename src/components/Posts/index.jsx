import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import Avatar from "../Avatar";
import Comment from "../Comment";
import css from "./index.module.css";

const Posts = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState(["You are very top"]);
  const [newComment, setNewComment] = useState("");
  const publishedDateFormatted = format(
    publishedAt,
    "d  'de'  LLLL 'as'  HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = () => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleChangeNewComment = () => {
    setNewComment(event.target.value);
  };

  const deleteComment = ( commentToDelete ) => {
    const newCommentWithoutDeleted = comments.filter(
       comment =>  comment !== commentToDelete
       
    );
    setComments(newCommentWithoutDeleted);
  }
  
  return (
    <article className={css.posts}>
      <header>
        <div className={css.author}>
          <Avatar userImage={author.avatarUrl} alt="" />
          <div className={css.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dataTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={css.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return <p key={item.content}>{item.content}</p>;
          }
        })}
      </div>

      <form className={css.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Leave your comment</strong>
        <textarea
          placeholder="Leave a comment"
          name="comment"
          onChange={handleChangeNewComment}
          value={newComment}
        />
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>
      <div className={css.comments}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} onDeleteComment = { deleteComment } />;
        })}
      </div>
    </article>
  );
};

export default Posts;
