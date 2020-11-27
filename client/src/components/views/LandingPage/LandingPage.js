import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function LandingPage(props) {
    useEffect(() => {
        axios.get('/api/hello').then((response) => console.log(response));
    }, []);

    const onLogoutHandler = () => {
        axios.get(`/api/users/logout`).then((response) => {
            if (response.data.logoutSuccess) {
                props.history.push('/login');
            } else {
                alert('로그아웃 실패');
            }
        });
    };

    const onLoginHandler = () => {
        props.history.push('/login');
    };

    const onRegisterHandler = () => {
        props.history.push('/register');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            <h2>시작 페이지</h2>
            <button onClick={onLoginHandler}>로그인</button>
            <br />
            <button onClick={onLogoutHandler}>로그아웃</button>
            <br />
            <button onClick={onRegisterHandler}>회원가입</button>
        </div>
    );
}

export default withRouter(LandingPage);
