import css from "./index.module.css";
const userImageUrl = "https://github.com/emanuellresende.png";
const Posts = () => {
  return (
    <article className={css.posts}>
      <header>
        <div className={css.author}>
          <img src={userImageUrl} alt="user" className={css.avatar} />

          <div className={css.authorInfo}>
            <strong>Emanuel</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio" dataTime={"09/07/2022 00:26"}>
          Posted hour ago
        </time>
      </header>

      <div className={css.content}>
        <p>Melo subiu um post</p>
        <p>testa ai zezao</p>
        <p>
          <a href="">mcmelao</a>
        </p>
        <p>
          <a href="">mcmelao</a>
        </p>
      </div>

      <form className={css.commentForm}>
        <strong>Leave your comment</strong>
        <textarea placeholder="Leave a comment" />
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>
    </article>
  );
};

export default Posts;
