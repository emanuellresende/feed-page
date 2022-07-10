import { ThumbsUp, Trash } from "phosphor-react";
import Avatar from "../Avatar";
import css from "./index.module.css";
const userImageUrl = "https://github.com/emanuellresende.png";

const Comment = () => {
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
            <button title="Delete Comment">
              <Trash size={24} />
            </button>
          </header>
          <p>macaco</p>
        </div>
        <footer>
          <button title="Reply">
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
