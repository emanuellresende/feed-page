import "../../GlobalStyles/index.css";

import css from "./index.module.css";
import { Header } from "../Header";
import Sidebar from "../Sidebar";
import Posts from "../Posts";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <Sidebar />
        <main>
          <Posts />
        </main>
      </div>
    </>
  );
};
export default HomeScreen;
