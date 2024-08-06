import React, { useEffect, useState } from 'react'
import styles from './MainContainer.module.scss'
import {PlayArrow, Favorite, Comment, MoreHoriz} from '@mui/icons-material'
const MainContainer = (url) => {
    const [data, setData] = useState([])
    const example = [
        {
            title : 'Đừng làm trái tim anh đau'
        },
        {
            title : 'Em Là'
        },
        {
            title : 'Ngày đẹp trời để nói chia tay'
        },
        {
            title : 'Em xinh'
        },
        {
            title : 'Em'
        },
        {
            title : 'Anh'
        },
        {
            title : 'Anh trai'
        },
    ]
useEffect(() => {
    // goi API lay du lieu
    setData(example)
},[])
console.log(url)
  return (
    <div className= {styles.MainContainer}>
        {/* {
            data.map((item) => (
                <div className= {styles.RecordItem}>
                    <div className= {styles.RecordDes}>
                        <div className = {styles.RecordInfo}>
                            <img src="https://plus.unsplash.com/premium_photo-1722585492057-32e26f01e15f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className= {styles.RecordDetail}>
                                <span className={styles.recordName}>{item.title}</span>
                                <div className={styles.recordActions}>
                                    <div className={styles.Reaction}>
                                        <PlayArrow 
                                        className={styles.icon}/>
                                        <span>1283</span>
                                    </div>
                                    <div className={styles.Reaction}>
                                        <Favorite 
                                        className={styles.icon}/>
                                        <span>19</span>
                                    </div>
                                    <div className={styles.Reaction}>
                                        <Comment 
                                        className={styles.icon}/>
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </div>
                    <  MoreHoriz 
                        className = {styles.More}/>
            </div>
            ))
        } */}
        <div className={styles.noDataFound}>
            <img src="https://minhtoan.blob.core.windows.net/images/add.jpg" alt="" />
            <div className= {styles.actions}>
                <span>Ở đây thiếu em ...</span>
                <button>Tải lên ngay</button>
            </div>
        </div>
    </div>
  )
}

export default MainContainer
