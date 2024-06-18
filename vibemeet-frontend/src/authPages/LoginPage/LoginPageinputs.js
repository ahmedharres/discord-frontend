import React from 'react';
import InputWithLable from '../../shared/components/inputWithLabel'
const LoginPageinputs = ({mail, setMail, password, setPassword}) => {
    return (
        <>
            <InputWithLable
                value={mail}
                setValue={setMail}
                lable='E-mail'
                type='text'
                placeholder="Enter your e-mail address"


            />

            <InputWithLable
                value={password}
                setValue={setPassword}
                lable='Password'
                type='password'
                placeholder='Enter password'


            />
        </>

    );
};

export default LoginPageinputs;
