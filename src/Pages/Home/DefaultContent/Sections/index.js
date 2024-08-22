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
                localStorage.setItem('sections', JSON.stringify(data));
                setSections(data);
                setKey(true);
            } catch {}
        })();
       
    }, [key]);
    useEffect(() => {
        for(let i = 1; i <=4 ; i++){
            (async () => {
                try {
                    const { data } = await instance.get(`/section/list?id=${i}`);
                    localStorage.setItem('sections', JSON.stringify(data));
                  
                } catch {}
            })();
        }
    },[])
    return (
        <div>
            {
            // sections.map((section) => (
            //     <div key={section.id} className={cx('section')}>
            //         <div className={cx('section-header')}>
            //             <h1>{section.name}</h1>
            //             <Link className={cx('readAll')} to={section.url}>
            //                 Xem tất cả
            //             </Link>
            //         </div>
            //         <div className={cx('section-item')}>
            //             <SectionItem sectionId={section.id} />
            //         </div>
            //     </div>
            // ))
            }
        </div>
    );
}

export default Sections;
