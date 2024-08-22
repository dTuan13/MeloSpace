import React, { useContext, useState } from 'react'
import styles from './AddPlaylist.module.scss'
import { HighlightOff } from '@mui/icons-material'
import { GlobalContext } from '../../Context'
import instance from '../../api'
import { useNavigate } from 'react-router-dom'
const AddPlaylist = () => {
  const getContext = useContext(GlobalContext)
  const [name, setName] = useState('')
  const [des, setDes] = useState('')
  const [thumb, setThumb] = useState()
   return (
    getContext.hiddenAddPlaylist === true ? 
      <div className={styles.AddItem}>
          <form className = {styles.AddContainer}>
            <div className={styles.firstRow}>
              <span>Tạo mới Playlist </span>
              <div 
                onClick={() => {
                  getContext.setHidden(false)
                }}>
                <HighlightOff className={styles.closeBtn} />
              </div>
                
            </div>
            <div className={styles.mainContainer}>
              <div className = {styles.leftContainer}>
                  <img id='uploadArea' className={styles.thumb} 
                    onClick={() => {
                      document.querySelector('#input').click()
                    }}/>
                  <input id = 'input' type="file"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file) {
                          setThumb(file)

                          const reader = new FileReader();
                          reader.onload = function(e) {
                              const img = document.createElement('img');
                              const uploadArea = document.getElementById('uploadArea');
                              // Xóa ảnh cũ nếu có
                              uploadArea.src = e.target.result
                          
                          };
                          reader.readAsDataURL(file);
                      }
                    }} />
              </div>
              <div className = {styles.rightContainer}>
                <div className={styles.formInput}>
                  <label htmlFor="">Tên Playlist</label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    type="text" />
                </div>
                <div className={`${styles.formInput}`}>
                  <label htmlFor="">Mô tả</label>
                  <textarea 
                    value={des}
                    onChange={(e) => {
                      setDes(e.target.value)
                    }}
                    className={styles.des} type="text" />
                </div>
              </div>
            </div>
            <div className={styles.btn}>
                <button

                  onClick={async () => {
                    console.log(name, des)
                    try {
                      const formData = new FormData();
                      const userID = localStorage.getItem('userID')
                      formData.append('name', name );
                      formData.append('description', des)
                      formData.append('userid', userID)
                      formData.append('thumb', thumb)
                      console.log(thumb)
                      const data = await instance.post('/playlist/add', formData, {
                      headers: { 'Content-Type': 'multipart/form-data' },
                    });
                     if(data.status === 200){
                      setThumb()
                      setName('')
                      setDes('')
                      const navigate = useNavigate()
                      (async () => {
                        try {
                            const userID = getContext.auth.payload.guid;
                            const { data } = await instance.get(`/playlist?userid=${userID}`);
                            localStorage.setItem('playlist', JSON.stringify(data));
                        } catch {}
                    })();
                      navigate('/')
                     }
                     else{
                      alert('fail')
                     }
                  } catch (error) {
                      
                  }
                  }}>
                  Luu</button>
            </div>
          </form>
      </div> : <div></div>
  )
}

export default AddPlaylist
