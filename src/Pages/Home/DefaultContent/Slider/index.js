import { Link } from 'react-router-dom';
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Slider() {
    const data = [
        {
            id: 1,
            img: 'https://photo-zmp3.zmdcdn.me/banner/b/c/9/a/bc9a3dc28e43f64fdbc48469662f5cce.jpg',
            url: 'slider_1',
        },
        {
            id: 2,
            img: 'https://photo-zmp3.zmdcdn.me/banner/4/c/f/9/4cf9c7268aac170489f9e9a3a155f16e.jpg',
            url: 'slider_2',
        },
        {
            id: 3,
            img: 'https://photo-zmp3.zmdcdn.me/banner/8/8/c/3/88c369df48d6989fb37a663731b4cb38.jpg',
            url: 'slider_3',
        },
    ];

    return (
        <div className={cx('slider')}>
            {data.map((item) => (
                <Link to={item.url} key={item.id} className={cx('slider-Link')}>
                    <img src={item.img} />
                </Link>
            ))}
        </div>
    );
}

export default Slider;
