import React from "react";
import { createPopper } from "@popperjs/core";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';

const UserDropdown = () => {
    const dispatch = useDispatch();
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    const handleLogoutButton = (event) => {
        dispatch(logoutUser());
    }

    return (
        <>
            <a
                className="text-blueGray-500 block"
                href="#blank"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <div className="items-center flex">
                    <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                        <img
                            alt="..."
                            className="w-full rounded-full align-middle border-none shadow-lg"
                            src={require("assets/img/blank.png").default}
                        />
                    </span>
                </div>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                }
            >
                {/* <a
                    href="#blank"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    Something else here
                </a>
                <div className="h-0 my-2 border border-solid border-blueGray-100" /> */}
                <a
                    href="#blank"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={(e) => handleLogoutButton(e)}
                >
                    Logout
                </a>
            </div>
        </>
    );
};

export default UserDropdown;
