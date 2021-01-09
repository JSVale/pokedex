import React, { InputHTMLAttributes } from 'react'
import { MdSearch } from 'react-icons/md'

import styles from './styles.module.css'

// Explain the interface inheritance
type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <div className={styles.searchInputContainer}>
      <input type="text" {...rest} />
      <MdSearch size={28} className={styles.icon} />
    </div>
  )
}

export default Input
