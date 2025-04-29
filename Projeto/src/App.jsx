import { useState } from 'react'
import { Post } from './component/Post'
import './global.css'
import { Header } from './component/Header'
import styles from './App.module.css'
import { Sidebar } from './component/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Luva de pedreiro"
            content="Um cara que ficou rico do nada"
          />
          <Post 
            author="Fabio do pé de fava"
            content="A vergonha da profissão"
          />
        </main>
      </div>
    </div>
  )
}

export default App;