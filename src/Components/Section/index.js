import SectionAlbumItem from './SectionAlbum';
import SectionPlaylistItem from './SectionPlaylist';
import SectionUserItem from './SectionUser';
import styles from './Section.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Section(section_id) {
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

    const numerSectionId = Number(section_id.section_id);

    const title = sections.find((section) => section.id === numerSectionId).name;

    return (
        <div className={cx('section')}>
            <h2>{title}</h2>
            <div className={cx('section-item')}>
                <SectionPlaylistItem sectionId={numerSectionId} />
                <SectionUserItem sectionId={numerSectionId} />
                <SectionAlbumItem sectionId={numerSectionId} />
            </div>
        </div>
    );
}

export default Section;
