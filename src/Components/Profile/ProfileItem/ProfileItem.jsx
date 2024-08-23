import React, { useContext } from 'react';
import styles from './ProfileItem.module.scss';
import { PlayArrow, Favorite, Comment, MoreHoriz } from '@mui/icons-material';
import { GlobalContext } from '../../../Context';
const ProfileItem = ({ item }) => {
    const getContext = useContext(GlobalContext)
    return (
        <div
            onClick = {() =>{
                if(item.url){
                    const song = {
                        RecordName: item.name,
                        RecordURL: item.url,
                        RecordThumb: item.thumb,
                    }
                    getContext.setCurrentSong(song)
                    getContext.setChangeSong(!getContext.changeSong)
                    localStorage.setItem('current-song', JSON.stringify(song))
                }
                
            }}
             className={styles.RecordItem}>
            <div className={styles.RecordDes}>
                <div className={styles.RecordInfo}>
                    <img src={item.thumb} alt="" />
                    <div className={styles.RecordDetail}>
                        <h3 className={styles.recordName}>{item.name}</h3>
                        <div className={styles.recordActions}>
                            <div className={styles.Reaction}>
                                <PlayArrow className={styles.icon} />
                                <span>1283</span>
                            </div>
                            <div className={styles.Reaction}>
                                <Favorite className={styles.icon} />
                                <span>19</span>
                            </div>
                            <div className={styles.Reaction}>
                                <Comment className={styles.icon} />
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MoreHoriz className={styles.More} />
        </div>
    );
};

export default ProfileItem;
