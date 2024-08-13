import React from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import TocMenuSection from './TocMenuSection ';

const TocMenu = ({ visible }) => (
    <div
        className="IconToc"
        style={{
            display: visible ? 'inline' : 'none',
            position: 'absolute',
            top: '26px',
            width: '160px',
            height: '270px',
            background: '#292727',
            zIndex: '100',
            transform: 'translate(-95%, 6%)',
            borderRadius: '9px',
            overflow: 'hidden',
            transition: '0.2s linear',
        }}
    >
        <TocMenuSection
            title="Sắp xếp theo"
            items={[
                { label: 'Gần đây' },
                { label: 'Mới thêm' },
                { label: 'Theo chữ cái' },
                { label: 'Người sáng tạo' },
            ]}
        />
        <TocMenuSection
            title="Xem dưới dạng"
            items={[
                { label: 'Dạng rút gọn', icon: <DehazeIcon /> },
                { label: 'Dạng danh sách', icon: <ListIcon /> },
                { label: 'Dạng lưới', icon: <GridViewIcon /> },
            ]}
        />
    </div>
);

export default TocMenu;
