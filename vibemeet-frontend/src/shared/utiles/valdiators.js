export const valdiateLoginForm = ({ mail, password }) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
};


export const valdiateRegisterForm = ({ mail, username, password }) => {
    return  validateMail(mail) && validateUserName(username) && validatePassword(password)
}

const validatePassword = (password) => {
    return password.length > 7 && password.length < 20;
};
const validateMail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
};
const validateUserName = (username) => {
    return username.length > 2 && username.length < 30
}