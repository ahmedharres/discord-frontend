import React, { useState, useEffect } from 'react';

import { Typography } from '@mui/material'
import AuthBox from '../../shared/components/authBox';
import RegisterPageinputs from '../RegisterPage/RegisterPageinputs';
import RegisterPageFooter from '../RegisterPage/RegisterPageFooter'
import { valdiateRegisterForm } from '../../shared/utiles/valdiators';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ register }) => {

    const navigate = useNavigate();
    const [mail, setMail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [isFormValid, setIsFromValid] = useState(false);

    const handleRegister = () => {
        const userDetails = {
            mail,
            password,
            username
        };

        register(userDetails, navigate);
    };

    useEffect(() => {
        setIsFromValid(valdiateRegisterForm({
            mail,
            username,
            password,
        }))
    }, [mail, username, password, setIsFromValid])

    return (
        <AuthBox>
            <Typography variant='h5' sx={{ color: 'black' }}>
                Create an acount
            </Typography>
            <RegisterPageinputs
                mail={mail}
                setMail={setMail}
                username={username}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
            />
            <RegisterPageFooter
                handleRegister={handleRegister}
                isFormValid={isFormValid}
            />
        </AuthBox>
    );
};
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
}

export default connect(null, mapActionsToProps)(RegisterPage);
