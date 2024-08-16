import React from 'react';
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

const cx = classNames.bind(styles);

const UpLoad = () => {
    const {
        // register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const handleOnSubmit = (values) => {
        console.log(values);
        console.log(values.file[0]);
        console.log(values.description);
        console.log(values.mode);
        console.log(values.type);
    };

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} action="" className={cx('upLoadForm')}>
            <Img src="ns2.jpg" />
            <div className={cx('upLoadContain')}>
                <Title control={control} errors={errors} />
                <FileInput
                    control={control}
                    name="file"
                    label="Chọn file tải lên"
                    rules={{ required: 'Vui lòng chọn bản ghi' }}
                />
                <TypeSelector control={control} name="type" />
                <TagsInput control={control} name="tags" />
                <DescriptionInput type="text" name="description" placeholder="Nhập mô tả chi tiết" control={control} />
                <ModeSelector control={control} name="mode" />
                <div className={cx('btn')}>
                    <button className={cx('btn1')}>Bỏ qua</button>
                    <button className={cx('btn2')}>Lưu</button>
                </div>
            </div>
        </form>
    );
};

export default UpLoad;
