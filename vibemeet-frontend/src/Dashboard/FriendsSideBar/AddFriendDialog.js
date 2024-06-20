import React, { useEffect, useState } from "react";
import { validateMail } from '../../shared/utiles/valdiators';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import InputWithLabel from '../../shared/components/inputWithLabel';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { connect } from 'react-redux';
import { getActions } from "../../store/actions/friendesAction";

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => { }
}) => {
    const [mail, setMail] = useState('');
    const [isFormValid, setIsFormVaild] = useState(false);

    const handleSendFriendInvitation = () => {
        sendFriendInvitation({
            targetMailAddress: mail,
        },
        handleCloseDialog
    );
    };

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    };

    useEffect(() => {
        setIsFormVaild(validateMail(mail));
    }, [mail]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography sx={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}
                    >Invite a Friend
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography component="span">
                            Enter e-mail address to invite a friend
                        </Typography>
                    </DialogContentText>
                    <InputWithLabel
                        label='E-mail'
                        type='text'
                        value={mail}
                        setValue={setMail}
                        placeholder='Enter e-mail address'
                    />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendFriendInvitation}
                        disabled={!isFormValid}
                        lable='Send'
                        additionalStyles={{
                            marginLeft: '15px',
                            marginRight: '15px',
                            marginBottom: '10px'
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
