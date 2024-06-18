import React from "react";
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';



const getFormIsNotValidMessage = () => {
    return 'Enter correct e-mail  username  and password ';
}

const getFormIsValidMessage = () => {
    return 'Login now ';
}


const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
    const navigate = useNavigate();


    const handlePushToLoginPage = () => {
        navigate('../login')
    };
    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormIsNotValidMessage() : getFormIsValidMessage()}
            >
                <div>

                    <CustomPrimaryButton
                        lable='Register'
                        additionalStyles={{ marginTop: "30px" }}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />

                </div>
            </Tooltip>
            <RedirectInfo
                text=''
                redirectText='Already have  an account?'
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToLoginPage}

            />
        </>
    );
};

export default RegisterPageFooter;