import React, {useCallback} from 'react';
import {Avatar, Card, Button} from 'antd';
import PropTypes from "prop-types";

const UserProfile =  ({setIsLoggedIn}) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);
    return (
        <Card actions={[
            <div key={"twit"}>짹짹<br/>0</div>,
            <div key={"followings"}>팔로잉<br/>0</div>,
            <div key={"followings"}>팔로워<br/>0</div>
        ]}>
            <Card.Meta
                avatar={<Avatar>ZC</Avatar>}
                title={"ZeroCho"}
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}

UserProfile.propTypes = {
    setIsLoggedIn: PropTypes.string
}

export default UserProfile;