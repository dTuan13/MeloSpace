import React from 'react';
import classNames from 'classnames/bind';
import styles from './PersonalLink.module.scss';
import CreateIcon from '@mui/icons-material/Create';
import { Controller } from 'react-hook-form';
const cx = classNames.bind(styles);

const PersonalLink = ({ control, errors }) => {
    return (
        <div className={cx('link')}>
            <label htmlFor="title">
                Đường dẫn trang cá nhân <span className={cx('text-red')}>*</span>
            </label>
            <Controller
                name="inputLink"
                control={control}
                rules={{
                    required: 'Đường link không ít hơn 4 kí tự.',
                    minLength: {
                        value: 4,
                        message: 'Đường link không ít hơn 4 kí tự',
                    },
                }}
                render={({ field }) => (
                    <div>
                        <div>
                            <div>
                                <label htmlFor="inputLink">melospace.com/</label>
                                <input
                                    type="text"
                                    id="inputLink"
                                    placeholder=""
                                    {...field}
                                    className={cx({ error: errors.link })}
                                />
                            </div>
                            {errors.link && <p className={cx('error-text')}>{errors.link.message}</p>}
                        </div>
                        <label htmlFor="link" className={cx('icon')}>
                            <CreateIcon></CreateIcon>
                        </label>
                    </div>
                )}
            />
        </div>
        // <div className={cx('personLink')}>
        //     <label>
        //         Đường dẫn trang cá nhân <span className={cx('text-red')}>*</span>
        //     </label>
        //     <div>
        //         <div>
        //             <label htmlFor="inputLink">melospace.com/</label>
        //             <input name="inputLink" id="inputLink" type="text" />
        //         </div>
        //         <button>
        //             <CreateIcon></CreateIcon>
        //         </button>
        //     </div>
        // </div>
    );
};

export default PersonalLink;
