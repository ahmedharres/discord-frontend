import React from "react";
import InputWithLable from '../../shared/components/inputWithLabel';
const RegisterPageinputs = (props) => {
    const { mail, setMail, username, setUserName, password, setPassword } = props;
    return (
        <>
            <InputWithLable
                value={mail}
                setValue={setMail}
                lable='E-mail address'
                type='text'
                placeholder='Enter your E-mail address'
            />

            <InputWithLable
                value={username}
                setValue={setUserName}
                lable='User Name'
                type='text'
                placeholder='Enter your user name'
            />

            <InputWithLable
                value={password}
                setValue={setPassword}
                lable='Password'
                type='password'
                placeholder='Enter your password'
            />
        </>
    );
};

export default RegisterPageinputs;