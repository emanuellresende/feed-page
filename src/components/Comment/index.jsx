import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import Avatar from "../Avatar";
import css from "./index.module.css";
const userImageUrl = "https://github.com/emanuellresende.png";

const Comment = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);
  const handleDeleteComment = () => {
    onDeleteComment(content);
  }

  const handleLike = () => setLikeCount(likeCount => likeCount + 1);
  return (
    <div className={css.comment}>
      <Avatar hasBorder={false} userImage={userImageUrl} alt="" />
      <div className={css.commentBox}>
        <div className={css.commentContent}>
          <header>
            <div className={css.authorAndDate}>
              <strong>Author Melo Emanuel</strong>
              <time title="11 de maio" dataTime={"09/07/2022 00:26"}>
                Posted hour ago
              </time>
            </div>
            <button title="Delete Comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button title="Reply" onClick={handleLike}>
            <ThumbsUp />
            Applaud <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
