import React, { useState } from "react";
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import AddFriendDialog from "./AddFriendDialog";
const additionalStyles = {
    marginTop: '10px',
    marignLeft: '5px',
    width: '80%',
    height: '30px',
    background: '#1F7DFF',
}



const AddFriendButton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleOpenFriendDialog = () => {
        setIsDialogOpen(true);
    }

    const handleCloseFriendDialog = () => {
        setIsDialogOpen(false);
    }

    return (
        <>
            <CustomPrimaryButton
                additionalStyles={additionalStyles}
                lable='Add Friend'
                onClick={handleOpenFriendDialog}
            />
            <AddFriendDialog
                isDialogOpen={isDialogOpen}
                closeDialogHandler={handleCloseFriendDialog}
            />
        </>
    )
}

export default AddFriendButton;