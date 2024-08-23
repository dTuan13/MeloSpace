import React, { useState } from 'react';
import styles from './UpLoad.module.scss';

import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import Title from './title/Title';
import FileInput from './chooseFile/fileInput';
import DescriptionInput from './descript/Description';
import ModeSelector from './mode/ModeSelector';
import TypeSelector from './type/TypeSelect';
import TagsInput from './tags/Tags';
import Img from './img/Img';
import { useNavigate } from 'react-router-dom';
import instance from '../../api';
const cx = classNames.bind(styles);

const UpLoad = () => {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState({ file: null, src: 'ns2.jpg' });

    const {
        // register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const handleOnSubmit = async (values) => {
        event.preventDefault();
        (async () => {
            try {
                const formData = new FormData();
                const userID = localStorage.getItem('userID')

                formData.append('record', values.file[0]);
                formData.append('image', imageSrc.file);
                formData.append('recordname', values.title);
                formData.append('modeid', values.mode);
                formData.append('authid', userID);
    
                const data = await instance.post('/record/add', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
    
                console.log(data)
                if(data.status === 200)
                {
                    navigate('/')
                }
                
            } catch (error) {
                
            }
        })()
    };
    
    const Skip = () => {
        navigate('/');
    };

    return (
        <form action='' onSubmit={handleSubmit(handleOnSubmit)} className={cx('upLoadForm')}>
            <Img imageSrc={imageSrc} setImageSrc={setImageSrc} />
            <div className={cx('upLoadContain')}>
                <Title control={control} errors={errors} />
                <div className={cx('up')}>
                    <FileInput
                        control={control}
                        name="file"
                        label="Chọn file tải lên"
                        rules={{ required: 'Vui lòng chọn bản ghi' }}
                    />
                    {/* <TypeSelector control={control} name="type" /> */}
                </div>
                <TagsInput control={control} name="tags" />
                <DescriptionInput type="text" name="description" placeholder="Nhập mô tả chi tiết" control={control} />
                <ModeSelector control={control} name="mode" />
                <div className={cx('btn')}>
                    <button onClick={Skip} className={cx('btn1')}>
                        Bỏ qua
                    </button>
                    <button className={cx('btn2')}>Đăng</button>
                </div>
            </div>
        </form>
    );
};

export default UpLoad;
