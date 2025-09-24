import HeaderTop from './utils/HeaderTop'
import styles from './Header.module.css'
import React from 'react';

interface HeaderProps {
  handleHeaderClick: () => void;
}

const Header:React.FC<HeaderProps> = ({handleHeaderClick}) => {
  return (
    <div className={styles.backgroundBlack}>
      <HeaderTop handleHeaderClick={handleHeaderClick}/>
    </div>
  )
}

export default Header
