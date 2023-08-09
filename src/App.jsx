import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/yan-valadares.png",
      name: "Yan Valadares",
      role: "AS Student" 
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github. É um projeto que fiz na Rocketseat O nome do projeto é NutriTrack 🍎'},
      {type: 'link', content: 'https://github.com/yan-valadares/NutriTrack-API'},
    ],
    publishedAt: new Date('2023-08-07 14:01:31')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://source.unsplash.com/random/?woman",
      name: "Isabela Mendes",
      role: "Developer" 
    },
    content: [
      {type: 'paragraph', content: 'Opa, pessoal'},
      {type: 'paragraph', content: 'Passando pra compartilhar a minha ORM favorita. Fica a dica!'},
      {type: 'link', content: 'https://github.com/prisma/prisma'},
    ],
    publishedAt: new Date('2023-08-06 19:42:47')
  },
]

export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post 
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
