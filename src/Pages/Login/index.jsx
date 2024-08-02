import React, { useContext, useState } from 'react';
import styles from './Login.module.scss';
import instance from '../../api';
import { useNavigate } from 'react-router-dom';
import { Contexts } from '../../Context';

const Login = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const getAuthContext = useContext(Contexts.AuthContext);
    let navigate = useNavigate();
    const handleLogin = () => {
        (async () => {
            try {
                // get User by username and password

                const user = {
                    id: 1,
                    name: 'Adam',
                    email: '',
                    image: 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53',

                    //demo
                    mail: 3,
                    notify: 2,
                };

                getAuthContext.setAuth(user);
                localStorage.setItem('accessToken', '123');
                navigate('/');
            } catch (error) {}
        })();
    };
    return (
        <div class={styles.login}>
            <form class={styles.inputContainer}>
                <div class="mb-4">
                    <label for="exampleInputEmail1" class="form-label">
                        Username
                    </label>
                    <input
                        value={userName}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        type="email"
                        class="form-control"
                    ></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        class="form-control"
                    ></input>
                </div>
                <button onClick={() => handleLogin()} type="submit" class="btn btn-primary mb-4">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
