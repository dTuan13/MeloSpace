import React from 'react';
import styles from './EditProfile.module.scss';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import Bio from './Bio/Bio';
import DisplayName from './DisplayName/DisplayName';
import Img from './img/img';
import InputField from './InputField/InputField';
import PersonalLink from './PersonalLink/PersonalLink';
import SocialLinks from './SocialLinks/SocialLink';
import CloseIcon from '@mui/icons-material/Close';

const cx = classNames.bind(styles);

const EditProfile = () => {
    // const navigate = useNavigate();
    const {
        // register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        defaultValues: {
            title: 'abcd',
            inputLink: 'phuoc23',
            firstName: 'Phuoc',
            lastName: 'Nguyen',
            city: 'Hue',
            region: 'ChoNoMarket',
            bio: '',
        },
    });

    const handleOnSubmit = (values) => {
        console.log(values);
        console.log(values.file[0]);
        console.log(values.description);
        console.log(values.mode);
        console.log(values.type);
    };

    const Skip = () => {
        // navigate(-1);
    };

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} action="" className={cx('editForm')}>
            <div className={cx('editContain')}>
                <Img src="ns2.jpg" />

                <div className={cx('edit-1')}>
                    <DisplayName control={control} errors={errors} />

                    <PersonalLink control={control} errors={errors} />

                    <div className={cx('row-1')}>
                        <InputField control={control} name="firstName" label="Họ" />
                        <InputField control={control} name="lastName" label="Tên" />
                    </div>

                    <div className={cx('row-2')}>
                        <InputField control={control} name="city" label="Thành phố" />
                        <InputField control={control} name="region" label="Khu vực" />
                    </div>

                    <Bio type="text" name="bio" placeholder="Thêm tiểu sử của bạn" control={control} />

                    <SocialLinks control={control} />
                    <div className={cx('btn')}>
                        <button onClick={Skip} className={cx('btn1')}>
                            Bỏ qua
                        </button>
                        <button type="submit" className={cx('btn2')}>
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EditProfile;
