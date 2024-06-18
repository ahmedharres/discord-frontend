import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/authBox';
import LoginPageHeaders from './LoginPageHeaders';
import LoginPageinputs from './LoginPageinputs';
import LoginPageFooter from './LoginPageFooter';
import { valdiateLoginForm } from '../../shared/utiles/valdiators';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ login }) => {
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(valdiateLoginForm({ mail, password }));
    }, [mail, password]);

    const handleLogin = () => {
        const userDetails = {
            mail,
            password
        };
        login(userDetails, navigate);
    };

    return (
        <AuthBox>
            <LoginPageHeaders />
            <LoginPageinputs
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}
            />
            <LoginPageFooter
                isFormValid={isFormValid}
                handleLogin={handleLogin}
            />
        </AuthBox>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(LoginPage);
