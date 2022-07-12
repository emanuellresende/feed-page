import "../../GlobalStyles/index.css";
import css from "./index.module.css";
import { Header } from "../Header";
import Sidebar from "../Sidebar";
import Posts from "../Posts";

const posts = [
  {
    id: 1,
    publishedAt: new Date("2022-05-03 21:00:00"),
    author: {
      name: "Emanuel",
      avatarUrl: "https://github.com/emanuellresende.png",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Hi guys, I'm Emanuel. I'm a web developer and I'm learning ReactJS.",
      },
      { type: "paragraph", content: "I currently work at syonet company" },
      {
        link: "paragraph",
        content: '<a href="https://www.syonet.com.br">syonet</a> ',
      },
    ],
  },

  {
    id: 2,
    publishedAt: new Date("2022-05-03 01:00:00"),
    author: {
      name: "Melo",
      avatarUrl:
        "https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_460,q_auto,w_488/v1607687264/jhdmqfwjl60reothkoxc.webp",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "React <<<<<<3333 ",
      },
      { type: "paragraph", content: "I love react " },
      {
        link: "paragraph",
        content: '<a href="https://pt-br.reactjs.org/">React</a> ',
      },
    ],
  },
];
const HomeScreen = () => {
  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <Sidebar />
        <main>
          {posts.map((posts) => {
            return (
              <Posts
                key={posts.id}
                content={posts.content}
                publishedAt={posts.publishedAt}
                author={posts.author}
              />
            );
          })}
        </main>
      </div>
    </>
  );
};
export default HomeScreen;
