import { Link } from 'react-router-dom';
import styles from './Sections.module.scss';
import classNames from 'classnames/bind';
import SectionPlaylistItem from '../../../../Components/Section/SectionPlaylist';
import SectionUserItem from '../../../../Components/Section/SectionUser';
import SectionAlbumItem from '../../../../Components/Section/SectionAlbum';

const cx = classNames.bind(styles);

function Sections() {
    const sections = [
        {
            id: 1,
            name: 'Dành cho bạn',
            url: 'section/danhchoban',
        },
        {
            id: 2,
            name: 'Album nổi bật',
            url: 'section/album',
        },
        {
            id: 3,
            name: 'Người dùng nổi bật',
            url: 'section/user',
        },
        {
            id: 4,
            name: 'Danh sách phát nổi bật',
            url: 'section/playlist',
        },
        {
            id: 5,
            name: 'Tập thịnh hành',
            url: 'section/popular',
        },
    ];
    return (
        <div>
            {sections.map((section) => (
                <div key={section.id} className={cx('section')}>
                    <div className={cx('section-header')}>
                        <h1>{section.name}</h1>
                        <Link className={cx('readAll')} to={section.url}>
                            Xem tất cả
                        </Link>
                    </div>
                    <div className={cx('section-item')}>
                        <SectionPlaylistItem sectionId={section.id} />
                        <SectionUserItem sectionId={section.id} />
                        <SectionAlbumItem sectionId={section.id} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sections;
