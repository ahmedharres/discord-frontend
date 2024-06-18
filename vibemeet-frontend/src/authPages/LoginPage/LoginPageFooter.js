import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';



const getFormIsNotValidMessage = () => {
        return 'Enter correct e-mail and Password to login ';
}

const getFormIsValidMessage = () => {
        return 'Go to your room chat! have fun ';
}


const LoginPageFooter = ({ handleLogin, isFormValid }) => {
        const navigate = useNavigate();


        const handlePushToRegisterPage = () => {
                navigate('../register')
        };
        return (
                <>
                        <Tooltip
                                title={!isFormValid ? getFormIsNotValidMessage() : getFormIsValidMessage()}
                        >
                                <div>

                                        <CustomPrimaryButton
                                                lable='Log in'
                                                additionalStyles={{ marginTop: "30px" }}
                                                disabled={!isFormValid}
                                                onClick={handleLogin}
                                        />

                                </div>
                        </Tooltip>
                        <RedirectInfo
                                text='Do not have account? '
                                redirectText='Create an account'
                                additionalStyles={{ marginTop: '5px' }}
                                redirectHandler={handlePushToRegisterPage}
                        />

                </>
        );
};

export default LoginPageFooter;