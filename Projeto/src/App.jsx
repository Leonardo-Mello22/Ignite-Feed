import { useState } from 'react'
import { Post } from './component/Post'
import './global.css'
import { Header } from './component/Header'
import styles from './App.module.css'
import { Sidebar } from './component/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://thaka.bing.com/th/id/OIP.ZcHTFaNcVC6uYNvf8wQSqwHaHa?rs=1&pid=ImgDetMain",
      name: "Lancelot",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2025-04-30 17:31')
  },
{
  id: 2,
  author: {
    avatarUrl: "https://i.pinimg.com/736x/31/83/66/3183669fc8dfd6d0083d5fd9ebb50abf.jpg",
    name: "Chris Evans",
    role: "Actor",
  },
  content: [
    { type: "paragraph", content: "Fala galeraa 👋" },
    { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare" },
    { type: "link", content: "jane.design/doctorcare" },
  ],
  publishedAt: new Date('2025-04-30 17:31')
},
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post =>{
              return(
               <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
               />
              )
            })}
        </main>
      </div>
    </div>
  )
}

export default App;