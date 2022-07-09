import "../../GlobalStyles/index.css";

import css from "./index.module.css";
import { Header } from "../Header";
import Sidebar from "../Sidebar";

const HomeScreen = () => {
  return <>
  <Header/>
  <div className={css.wrapper}>
    <Sidebar/>
    <main>bbb</main>
  </div>
  </>;
};
export default HomeScreen;
