import React from 'react'

import styles from './styles.module.css'

// import Pokeball from '../Pokeball'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Layout
