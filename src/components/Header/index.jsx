import css from "./index.module.css";
import IgniteLogo from "../../assets/ignite-logo.svg";
export const Header = () => {
  return (
    <header className={css.header}>
      <img src={IgniteLogo} alt="Ignite Logo" />
      <strong>Feed Project</strong>
    </header>
  );
};
