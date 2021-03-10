import React, {useState, useCallback} from 'react';
import {Button, Form, Input} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from "prop-types";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

//useMemo - 값 캐싱
// const style = useMemo(() => ({marginTop: 10}), []);

const LoginForm = ({setIsLoggedIn}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    //useCallback - 함수 캐싱
    const onChangeId = useCallback((e) => {
        console.log("e::{}", e);
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        console.log("e::{}", e);
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        console.log("id, password::{}", id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name={"user-id"} value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-id">비밀번호</label>
                <br/>
                <Input name={"user-id"} type={"password"} value={password} onChange={onChangePassword} required/>
            </div>
            <ButtonWrapper>
                <Button type={"primary"} htmlType={"submit"} loading={false}>로그인</Button>
                <Link href={"/signup"}><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.string
}

export default LoginForm;