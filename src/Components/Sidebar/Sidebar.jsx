import React, { useState } from 'react'

import  styles from './Sidebar.module.scss'
import { Link } from 'react-router-dom'
import {Add,HomeSharp, HomeOutlined, SearchSharp, SavedSearch, LibraryMusicOutlined, LibraryMusicSharp} from '@mui/icons-material';

const Sidebar = () => {
  const [active, setActive] = useState(1)

  const handleSetActive = (index) => {
    setActive(index)
  }
  return (
    <div className= {styles.navBar}>
          <div className= {styles.logo}>
            mellospace
          </div>
          <ul>
            <Link to= '/'>
              <li className= {`${styles.navBarItem} ${active === 1 ? `${styles.active}` : ''}` }
                  onClick={() => {handleSetActive(1)}}>
                  <div className= {styles.navBarItemText} to = '/'>
                    {active === 1 ? <HomeSharp className={styles.navIcon} /> :<HomeOutlined className={styles.navIcon}  />}
                    <p>Trang chủ</p>
                  </div>
              </li>
            </Link>
            <Link to = '/search'>
              <li className= {`${styles.navBarItem} ${active === 2 ? `${styles.active}` : ''}` }
                  onClick={() => {handleSetActive(2)}}>
                  <div  className= {styles.navBarItemText}  to ='/contact'>
                    {active === 2 ? <SavedSearch className={styles.navIcon}   />: <SearchSharp className={styles.navIcon} />}
                    <p> Tìm kiếm</p>
                  </div>
              </li>
            </Link>
            <li className= {`${styles.navBarItem} ${active === 3 ? `${styles.active}` : ''}` }
              onClick={() => {handleSetActive(3)}}>
              <div  className= {styles.navBarItemText}  to ='/contact'>
                {active === 3 ? <LibraryMusicSharp className={styles.navIcon}   /> : <LibraryMusicOutlined className={styles.navIcon} />}
                <p>Danh sách phat</p>
              </div>
            </li>
        </ul>
        <div className={styles.userPlayList}>
          <ul className={styles.userPlayListContainer}>
              <li className={styles.playListItem}>
                <img src="https://images.unsplash.com/photo-1711223507491-08a2cae466cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className={styles.playListDescription}>
                  <span className={styles.playListName}>Nho ve em</span>
                  <span className={styles.songQuantity}>14 songs</span>
                </div>
              </li>
              <li className={styles.playListItem}>
                <img src="https://images.unsplash.com/photo-1711223507491-08a2cae466cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className={styles.playListDescription}>
                  <span className={styles.playListName}>Nho ve em</span>
                  <span className={styles.songQuantity}>14 songs</span>
                </div>
              </li>
              <li className={styles.playListItem}>
                <img src="https://images.unsplash.com/photo-1711223507491-08a2cae466cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className={styles.playListDescription}>
                  <span className={styles.playListName}>Nho ve em</span>
                  <span className={styles.songQuantity}>14 songs</span>
                </div>
              </li>
              
          </ul>
        </div>
    </div>
  )
}
export default Sidebar
