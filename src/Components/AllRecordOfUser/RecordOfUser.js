import React from 'react';
import MusicControl from '../MusicController';
import styles from './RecordOfUser.module.scss';
import { PlayArrow, Favorite, Comment, MoreHoriz } from '@mui/icons-material';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const RecordOfUser = () => {
    const record = [
        {
            src: 'ns2.jpg',
            name: 'Âm thầm bên em',
            user: 'Sơn Tùng MTP',
        },
        {
            src: 'ns2.jpg',
            name: 'Âm thầm bên em',
            user: 'Sơn Tùng MTP',
        },
    ];
    return (
        <div className={cx('Container')}>
            <h1>Bản ghi của user</h1>
            <div>
                {record.map((item) => (
                    <div className={cx('RecordItem')}>
                        <div className={cx('RecordDes')}>
                            <div className={cx('RecordInfo')}>
                                <img src="/ns2.jpg" alt="" />
                                <div className={cx('RecordDetail')}>
                                    <h3 className={cx('recordName')}>{item.name}</h3>
                                    <p>{item.user}</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('recordActions')}>
                            <div className={cx('Reaction')}>
                                <PlayArrow className={styles.icon} />
                                <span>1283</span>
                            </div>
                            <div className={cx('Reaction')}>
                                <Favorite className={styles.icon} />
                                <span>19</span>
                            </div>
                            <div className={cx('Reaction')}>
                                <Comment className={styles.icon} />
                                <span>3</span>
                            </div>
                        </div>
                        <MoreHoriz className={cx('More')} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecordOfUser;
