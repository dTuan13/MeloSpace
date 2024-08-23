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
    const [isLoaded, setLoaded] = useState(false);
    const [key, setKey] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const storedSections = localStorage.getItem('sections');
                if (storedSections) {
                    setSections(JSON.parse(storedSections));
                    setLoaded(true);
                } else {
                    const { data } = await instance.get(`/section`);
                    localStorage.setItem('sections', JSON.stringify(data));
                    setSections(data);
                    setLoaded(true);
                    setKey(true);
                }
            } catch {}
        })();
    }, [key]);
    return (
        <div>
            {isLoaded ? (
                sections.map((section) => (
                    <div key={section.id} className={cx('section')}>
                        <div className={cx('section-header')}>
                            <h1>{section.name}</h1>
                            <Link className={cx('readAll')} to={`/section/list?id=${section.id}`}>
                                Xem tất cả
                            </Link>
                        </div>
                        <div className={cx('section-item')}>
                            <SectionItem sectionId={section.id} />
                        </div>
                    </div>
                ))
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Sections;
