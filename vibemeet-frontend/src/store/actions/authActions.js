import * as api from '../../api';
import { openAlertMessage } from './alertAction';

export const authActions = {
    SET_USER_DETAILS: 'AUTH_SET_USER_DETAILS'
};

export const getActions = (dispatch) => {
    return {
        login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
        register: (userDetails, navigate) => dispatch(register(userDetails, navigate)),
    };
};

const SET_USER_DETAILS = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    }
};

const login = (userDetails, navigate) => {
    return async (dispatch) => {

        const response = await api.login(userDetails);
        console.log(response);
        if (response.error) {
             dispatch(openAlertMessage(response?.exception?.response?.data))
        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(SET_USER_DETAILS(userDetails));
            navigate('/dashboard');
        }

    };
};

const register = (userDetails, navigate) => {
    return async (dispatch) => {

        const response = await api.register(userDetails);
        console.log(response);
        if (response.error) {
             dispatch(openAlertMessage(response?.exception?.response?.data))

        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(SET_USER_DETAILS(userDetails));
            navigate('/login');
        }

    };
};
