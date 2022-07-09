import { PencilLine } from "phosphor-react";

import css from "./index.module.css";

const imageUrl =
  "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50";
const userImageUrl = "https://github.com/emanuellresende.png";
const iconSize = 20;
const SideBar = () => {
  return (
    <aside className={css.sidebar}>
      <img className={css.imageBackground} src={imageUrl} />

      <div className={css.profile}>
        <img className={css.userImage} alt={"userImage"} src={userImageUrl} />
        <strong className={css.userName}>username</strong>
        <span>webdevelop</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={iconSize} />
          Edit your profile
        </a>
      </footer>
    </aside>
  );
};

export default SideBar;
