import { Post } from "./Post"
import { Header } from "./components/Header";

import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <Post 
            author="Yan Valadares" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquam! Deserunt quos hic magni sequi delectus odio, ut libero. Consectetur, vero atque! Eligendi maxime ut facere distinctio magnam voluptates explicabo!"
          />
          <Post 
            author="Rennan Henrique" 
            content="Novo post"
          />
        </main>
      </div>
    </>
  )
}