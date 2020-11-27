import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function LoginPage(props) {
    const dispatch = useDispatch();

    // state, 얘네들 서버에 보내야함(axios)
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onSubmitHandler = (event) => {
        // submit 이 되었을때 할 일을 써야하는 공간인데
        // preventDefault 를 안해주면 새로고침이 되어서
        // 그 동작들을 해줄수가 없음
        event.preventDefault();

        let body = {
            email: Email,
            password: Password,
        };

        dispatch(loginUser(body)).then((response) => {
            if (response.payload.loginSuccess) {
                // 완료되면 시작페이지로
                props.history.push('/');
            } else {
                alert('Error');
            }
        });
    };

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <form
                style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type='email' value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input
                    type='password'
                    value={Password}
                    onChange={onPasswordHandler}
                />
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default withRouter(LoginPage);
