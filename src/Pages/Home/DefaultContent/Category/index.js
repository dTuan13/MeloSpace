import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';
import classNames from 'classnames/bind';
import CategoryItems from '../CategoryItems';

const cx = classNames.bind(styles);

function Category() {
    const Categories = [
        {
            id: 1,
            name: 'Dành cho bạn',
            url: 'category/danhchoban',
        },
        ,
        {
            id: 2,
            name: 'Nhạc yên tĩnh',
            url: 'category/nhacyentinh',
        },
        {
            id: 3,
            name: 'Tuổi học trò',
            url: 'category/tuoihoctro',
        },
    ];
    return (
        <div>
            {Categories.map((category) => (
                <div key={category.id} className={cx('category')}>
                    <div className={cx('category-header')}>
                        <h1>{category.name}</h1>
                        <Link className={cx('readAll')} to={category.url}>
                            Xem tất cả
                        </Link>
                    </div>
                    <div>
                        <CategoryItems categoryId={category.id} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Category;
