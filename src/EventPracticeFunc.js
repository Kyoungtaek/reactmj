import React, { useState } from 'react';

const EventPracticeFunc = () => {
    const [form, setForm] = useState({
        userName: '',
        message: ''
    });
    const { userName, message } = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }
    const onClick = () => {
        alert(`${userName}: ${message}`);
        setForm({
            userName: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text"
                name="userName"
                placeholder="사용자명"
                value={userName}
                onChange={onChange}
            />
            <input type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}
            >확인</button>
        </div>
    );
};

export default EventPracticeFunc;