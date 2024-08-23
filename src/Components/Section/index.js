import SectionItem from './SectionItem';
import styles from './Section.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function initItem(id) {
    const dataSectionItem = localStorage.getItem(`section-Item_${id}`);
    return dataSectionItem ? dataSectionItem : [];
}

const initSection = () => {
    const sec = localStorage.getItem('sections');
    return sec ? JSON.parse(sec) : [];
};

function Section() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    const [isLoaded, setLoaded] = useState(false);
    const [sectionItem, setSectionItem] = useState(initItem(id));
    const [sections, setSections] = useState(initSection);

    let title = sections.find((item) => item.id == id).name;

    useEffect(() => {
        (async () => {
            try {
                const storedSectionItem = localStorage.getItem(`section-Item_${id}`);
                if (storedSectionItem) {
                    setSectionItem(JSON.parse(storedSectionItem));
                } else {
                    const { data } = await instance.get(`/section/list?id=${id}`);
                    localStorage.setItem(`section-Item_${id}`, JSON.stringify(data));
                    setSectionItem(data);
                }
                setLoaded(true);
            } catch {}
        })();
    }, [id]);

    return (
        <div className={cx('section')}>
            {isLoaded ? (
                <div>
                    <h2>{title}</h2>
                    <div className={cx('section-item')}>
                        <SectionItem sectionId={id} />
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Section;
