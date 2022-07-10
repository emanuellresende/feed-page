import css from "./index.module.css";
const Avatar = ( { hasBorder = true, userImage }) => {
  return (
    <img
      className={hasBorder ? css.avatarWithBorder : css.avatar}
      src={userImage}
    />
  );
};

export default Avatar;
