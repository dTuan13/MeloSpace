import { Link } from 'react-router-dom';
import styles from './Sections.module.scss';
import classNames from 'classnames/bind';
import SectionItem from '../../../../Components/Section/SectionItem';
import { useState, useEffect } from 'react';
import instance from '../../../../api';

const cx = classNames.bind(styles);
const initSection = () => {
    const sec = localStorage.getItem('sections');
    return sec ? JSON.parse(sec) : [];
};
function Sections() {
    const [sections, setSections] = useState(initSection);
    const [key, setKey] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`/section`);
                if (localStorage.getItem('sections')) {
                    localStorage.removeItem('sections');
                }
                localStorage.setItem('sections', JSON.stringify(data));
                setSections(data);
                setKey(true);
            } catch {}
        })();
        console.log(sections);
    }, [key]);

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
                        <SectionItem sectionId={section.id} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sections;
