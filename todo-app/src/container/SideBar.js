import React from "react";
import Modal from '@material-ui/core/Modal';
import Pop1 from './Pop1'

const SideBar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <div>
                <h1></h1>
            </div>
            <div>
                <button type="button" onClick={handleOpen}>
                    <h4>+Create New Board</h4>
                </button>
            </div>
            <Modal
                onClose={handleClose}
                open={open}
            >
                <Pop1 />
            </Modal>
        </>
    )
}

export default SideBar;