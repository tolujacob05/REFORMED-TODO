import React, { useState } from "react";
import Modal from '@material-ui/core/Modal';
import Pop1 from './Pop1'
import Pop2 from './Pop2' 
import {
    Menu,
    MenuItem,
    Sidebar,
    useProSidebar,
} from 'react-pro-sidebar'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import logo from './img/logo.jpg'
import './css/SideBar.css';

const SideBar = () => {
    // Function to handle Popup
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    // Function to handle to handle SideBar
    const [menuCollapse, setMenuCollapse] = useState(false)

    /*const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };*/

    // Function to handle second Popup
    const [open1, setOpen1] = React.useState(false);

    const toggleClose = () => {
        setOpen1(false);
    };

    const toggleOpen = () => {
        setOpen1(true);
    };

    // Function to handle Sisebar collapse
    const { collapseSidebar } = useProSidebar();

    return (
        <>
            <div className="large">
                <Sidebar>
                    
                        <div className="image">
                            {menuCollapse ? <img src={logo} alt="" /> :  <img src={logo} alt="" />}
                        </div>
                        <Menu>
                            <MenuItem>
                                <div className="click">
                                    <button type="button" onClick={handleOpen}>
                                        <h4>+Create New Board</h4>
                                    </button>
                                </div>
                            </MenuItem>
                            <Modal
                                onClose={handleClose}
                                open={open}
                            >
                                <Pop1 />
                            </Modal>
                        </Menu>
                        
                        {/*<div className="closeMenu" onClick={menuIconClick}>
                            <p>
                                {menuCollapse ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                                Hide Sidebar
                            </p>
                        </div>*/}
                    
                </Sidebar>
                <div className='kanban'>
                    <h3>Platform Launch</h3>
                    <div className='add' onClick={toggleOpen}>
                        <h4>+Add New Task</h4>
                    </div>
                    <Modal
                        onClose={toggleClose}
                        open={open1}
                    >
                        <Pop2 />
                    </Modal>
                </div>
            </div>
            
        </>
    )
}

export default SideBar;