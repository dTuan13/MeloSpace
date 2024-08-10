import { Link } from 'react-router-dom';
import styles from './CategoryItems.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import PlayButton from '../PlayButton';

const cx = classNames.bind(styles);

function CategoryItems(categoryId) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // get Song by categoryId

        setData([
            {
                id: 1,
                name: 'Tận hưởng âm nhạc',
                image: 'https://i.scdn.co/image/ab67616d00001e024b261902f2f94e876adf9181',
                url: 'a',
                artist: 'Vũ Cát Tường',
            },
            {
                id: 2,
                name: 'Chiếc thuyền ngoài xa',
                image: 'https://i.scdn.co/image/ab67616d00001e0202fcf71da689419d4ae373d6',
                url: 'b',
                artist: 'Đen Vâu',
            },
            {
                id: 3,
                name: 'Lắng nghe âm thanh du dương',
                image: 'https://i.scdn.co/image/ab67616d00001e020ecdf596e76b0403506c1375',
                url: 'c',
                artist: 'Vũ',
            },
            {
                id: 4,
                name: 'HipHop never die',
                image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c4147df88ea092a40f66accc3',
                url: 'd',
                artist: 'Chú Đen',
            },
            {
                id: 5,
                name: 'sky ơi!!!',
                image: 'https://i.scdn.co/image/ab67616d00001e02824ac9ea17bde4ea1fd09f4f',
                url: 'e',
                artist: 'Sơn Tùng MTP',
            },
            {
                id: 6,
                name: 'Uống cà phê và nghe nhạc',
                image: 'https://i.scdn.co/image/ab67656300005f1f1a4fdef885da6bd14b993fcb',
                url: 'g',
                artist: 'Ngọc Minh',
            },
            {
                id: 7,
                name: 'Lofi và chill',
                image: 'https://i.scdn.co/image/ab6761610000517410e658dffbc09c792ad3969c',
                url: 'h',
                artist: 'HIEUTHUHAI',
            },
            {
                id: 8,
                name: 'Mãi yêu',
                image: 'https://i.scdn.co/image/ab6761610000517410e658dffbc09c792ad3969c',
                url: 'i',
                artist: 'Mỹ Tâm',
            },
        ]);
    }, []);

    return (
        <div className={cx('category')}>
            {data.map((item) => (
                <Link key={item.id} to={item.url} className={cx('category-item')}>
                    <div className={cx('category-item_img')}>
                        <img src={item.image} />
                    </div>
                    <div className={cx('category-item__info')}>
                        <h3>{item.artist}</h3>
                        <h6>{item.name}</h6>
                    </div>
                    <div className={cx('playBtn')}>
                        <PlayButton />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default CategoryItems;
