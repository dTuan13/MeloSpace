import React from 'react';
import styles from './ProfileItem.module.scss';
import { PlayArrow, Favorite, Comment, MoreHoriz } from '@mui/icons-material';

const ProfileItem = ({ item }) => {
    return (
        <div className={styles.RecordItem}>
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
